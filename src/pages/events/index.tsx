import { Event } from "@/types/event";
import { useState } from "react";

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [event, setEvent] = useState<string>("");
  const [update, setUpdateEvent] = useState<{ [key: string]: string }>({});

  const fetchEvents = async () => {
    const response = await fetch("api/events");
    const events = await response.json();
    setEvents(events);
  };

  const submitEvent = async () => {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ event }),
    });

    const data = await response.json();
    console.log(`Data: ${data}`);
    fetchEvents();
  };

  const deleteEvent = async (id: string) => {
    const response = await fetch(`/api/events/${id}`, {
      method: "DELETE",
    });

    const data = await response.json();
    console.log(`Deleted data: ${data}`);
    fetchEvents();
  };

  const updateEvent = async (id: string) => {
    const response = await fetch(`/api/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, event: update[id] }),
    });

    const data = await response.json();
    console.log(`Updated data: ${data}`);
    fetchEvents();
  };

  return (
    <div>
      <h1>Events</h1>
      <button
        style={{
          margin: "10px ",
          backgroundColor: "lightgreen",
          color: "black",
        }}
        onClick={fetchEvents}
      >
        Fetch Comments
      </button>
      <input
        type="text"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
      />
      <button
        style={{
          margin: "10px ",
          backgroundColor: "lightblue",
          color: "black",
        }}
        onClick={submitEvent}
      >
        Submit new Event
      </button>
      {events.map((item) => (
        <div key={item.id}>
          <h2>
            id: {item.id} - {item.title}
          </h2>
          <input
            type="text"
            value={update[item.id] || ""}
            onChange={(e) =>
              setUpdateEvent({ ...update, [item.id]: e.target.value })
            }
          />
          <button
            style={{
              margin: "10px ",
              backgroundColor: "lightblue",
              color: "black",
            }}
            onClick={() => updateEvent(item.id)}
          >
            Update Event
          </button>
          <button
            style={{
              margin: "10px ",
              backgroundColor: "lightcoral",
              color: "black",
            }}
            onClick={() => deleteEvent(item.id)}
          >
            Delete Event
          </button>
        </div>
      ))}
    </div>
  );
};

export default Events;
