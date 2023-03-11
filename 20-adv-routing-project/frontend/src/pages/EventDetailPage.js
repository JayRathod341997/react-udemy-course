import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>{params.eventId}</p>
      <Link to=".." relative="path">
        Go back
      </Link>
    </>
  );
};

export default EventDetailPage;
