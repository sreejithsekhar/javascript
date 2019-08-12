import React, { useState } from "react";

const AddEvent = ({ onAdded }) => {
  console.log("add event init");
  const [eventItem, setEvent] = useState({});

  const submitEvent = event => {
    event.preventDefault();
    const { title, location, date } = eventItem;
    if (title && location && date) {
      fetch("http://localhost:3000/events/add-event", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(eventItem)
      })
        .then(res => {
            onAdded(true);
            return res.json
        })
        .catch(err => {
          console.log("err", err);
        });
    }
  };

  const handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    setEvent({
      ...eventItem,
      [name]: value
    });
  };

  return (
    <form className="event-form" onSubmit={submitEvent}>
      <label className="event-form-item">
        Event Name: <input type="text" name="title" onChange={handleChange} />
      </label>
      <label className="event-form-item">
        Event Location:{" "}
        <input type="text" name="location" onChange={handleChange} />
      </label>
      <label className="event-form-item">
        Event Date: <input type="text" name="date" onChange={handleChange} />
      </label>
      <div>
        <button className="event-form-item" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddEvent;
