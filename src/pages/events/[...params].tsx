// pages/events/[...params].tsx
import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();
  const { params } = router.query;

  console.log(params);

  return (
    <div>
      <h1>Event Page</h1>
      <p>{Array.isArray(params) ? params.join(" / ") : params}</p>
    </div>
  );
};

export default EventPage;
