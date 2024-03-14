import { Event } from "@/types";
import { useRouter } from "next/router";
import { useState } from "react";

interface Props {
  events: Event[];
}

const Events = ({ events }: Props) => {
  const [eventsList, setEventsList] = useState<Event[]>(events);
  const router = useRouter();

  const fetchHolidayEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=holiday"
    );
    const data = await response.json();

    setEventsList(data);

    router.push("events-filtered?category=holiday", undefined, {
      shallow: true,
    });
  };

  const fetchCharityEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=charity"
    );
    const data = await response.json();

    setEventsList(data);

    router.push("events-filtered?category=charity", undefined, {
      shallow: true,
    });
  };

  const fetchNetworkingEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=networking"
    );
    const data = await response.json();

    setEventsList(data);

    router.push("events-filtered?category=networking", undefined, {
      shallow: true,
    });
  };

  return (
    <div>
      <h1>Events</h1>
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
      {eventsList.map((item) => (
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
};

export default Events;

export const getServerSideProps = async (query: any) => {
  const { category } = query;
  const queryString = category ? "category=holiday" : "";

  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      events: data,
    },
  };
};
