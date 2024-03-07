import Link from "next/link";

const EventPage = () => {
  return (
    <div>
      <h1>Events Page</h1>
      <ul>
        <li>
          <Link href={"/events/100"}>Event 1</Link>
        </li>
        <li>
          <Link href={"/events/89"}>Event 2</Link>
        </li>
        <li>
          <Link href={"/events/78"}>Event 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default EventPage;
