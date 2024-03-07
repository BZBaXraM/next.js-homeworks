import { useRouter } from "next/router";

const PhotoDetailsPage = () => {
  const router = useRouter();
  const { eventId, photoId } = router.query;

  return (
    <div>
      <h1>Photo Details Page</h1>
      <p>Event ID: {eventId}</p>
      <p>Photo ID: {photoId}</p>
      {Number(photoId) % 15 === 0 ? (
        <h1>FizzBuzz</h1>
      ) : Number(photoId) % 3 === 0 ? (
        <h1>Fizz</h1>
      ) : Number(photoId) % 5 === 0 ? (
        <h1>Buzz</h1>
      ) : (
        <h1>{photoId}</h1>
      )}
    </div>
  );
};

export default PhotoDetailsPage;
