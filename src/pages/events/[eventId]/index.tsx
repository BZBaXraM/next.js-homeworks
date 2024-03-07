import { useRouter } from "next/router";
import EventDetails from "../[...slug]";

const EventPage = () => {
  const router = useRouter();
  const { eventId } = router.query;

  return <EventDetails slug={eventId as string} />;
};

export default EventPage;
