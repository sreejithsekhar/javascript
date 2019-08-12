import React, { useState, useEffect } from "react";

const EventsList = ({ hasChanged }) => {
  console.log("events list init");
  const [events, setEvents] = useState([]);

  useEffect(() => {
    refresh();
  }, [hasChanged]);

  const refresh = () => {
    fetch("http://localhost:3000/events")
      .then(resp => resp.json())
      .then(data => {
        console.log("data", data);
        setEvents(data);
      })
      .catch(ex => {
        console.log("ex", ex);
      });
  };

  const removeEvent = eventId => {
    fetch("http://localhost:3000/events/remove-event", {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ eventId })
    })
      .then(res => {
        refresh();
        return res.json;
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  return events.map(event => (
    <div key={event._id} className="event-container">
      <h2>{event.title}</h2>
      <h3>{event.location}</h3>
      <h3>{event.date}</h3>
      <button onClick={() => removeEvent(event._id)}>Remove</button>
    </div>
  ));
};

export default EventsList;
