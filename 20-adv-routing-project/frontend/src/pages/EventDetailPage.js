import { Link, useLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useLoaderData();

  return (
    <>
      <EventItem event={data.event} />
      <Link to=".." relative="path">
        Go back
      </Link>
    </>
  );
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "couldn't load event ID" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
}
