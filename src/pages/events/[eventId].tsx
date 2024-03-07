import { useRouter } from "next/router";

const EventIdDetailsPage = () => {
  const router = useRouter();
  const { eventId } = router.query;

  return (
    <div>
      <h1>Event ID Details Page</h1>
      <p>Event ID: {eventId}</p>
      {Number(eventId) % 15 === 0 ? (
        <h1>FizzBuzz</h1>
      ) : Number(eventId) % 3 === 0 ? (
        <h1>Fizz</h1>
      ) : Number(eventId) % 5 === 0 ? (
        <h1>Buzz</h1>
      ) : (
        <h1>{eventId}</h1>
      )}
    </div>
  );
};

export default EventIdDetailsPage;
