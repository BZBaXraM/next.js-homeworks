"use client";

import { Event } from "@/types/event";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  events: Event[];
}

export default function Page({ events }: Props) {
  const [eventsList, setEventsList] = useState<Event[]>(events);
  const router = useRouter();

  const fetchData = async (query: any) => {
    const { category } = query;
    const queryString = category ? "category=holiday" : "";

    const response = await fetch(`http://localhost:4000/events?${queryString}`);

    const data = await response.json();

    setEventsList(data);

    router.push(`filtered-events?${queryString}`);

    return {
      props: {
        events: data,
      },
    };
  };
  const fetchHolidayEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=holiday"
    );
    const data = await response.json();

    setEventsList(data);

    router.push("filtered-events?category=holiday");
  };

  const fetchCharityEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=charity"
    );
    const data = await response.json();

    setEventsList(data);

    router.push("filtered-events?category=charity");
  };

  const fetchNetworkingEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=networking"
    );
    const data = await response.json();

    setEventsList(data);

    router.push("filtered-events?category=networking");
  };

  return (
    <div>
      <h1>Events</h1>

      <button
        style={{
          margin: "5px",
        }}
        onClick={fetchData}
      >
        All
      </button>

      <button
        style={{
          margin: "5px",
        }}
        onClick={fetchHolidayEvents}
      >
        Holiday
      </button>
      <button
        style={{
          margin: "5px",
        }}
        onClick={fetchCharityEvents}
      >
        Charity
      </button>
      <button
        style={{
          margin: "5px",
        }}
        onClick={fetchNetworkingEvents}
      >
        Networking
      </button>
      {eventsList &&
        eventsList.map((item) => (
          <div key={item.id}>
            <h2>
              {item.title} - {item.category}
            </h2>
            <p>
              Category - {item.category} - {item.description}
            </p>
          </div>
        ))}
    </div>
  );
}
