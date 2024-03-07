import { useRouter } from "next/router";

const PhotoPage = () => {
  const router = useRouter();
  const { eventId, photoId } = router.query;

  return (
    <div>
      <h1>
        Event {eventId} - Photo {photoId}
      </h1>
    </div>
  );
};

export default PhotoPage;
