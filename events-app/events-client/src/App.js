import React, { useState } from "react";
import "./App.css";

import EventsList from "./events-list/EventsList";
import AddEvent from "./add-event/AddEvent";

function App() {
  const [hasChanged, isChanged] = useState(false);

  const handleChange = changed => {
    isChanged(changed);
  };

  return (
    <div className="App">
      <h1>Events App</h1>
      <EventsList hasChanged={hasChanged}/>
      <AddEvent onAdded={handleChange}/>
    </div>
  );
}

export default App;
