import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  const loadData = useLoaderData();
  if (loadData.isError) {
    return <p>{loadData.message}</p>;
  }
  const events = loadData.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events/12");

  if (!response.ok) {
    return { isError: true, message: "An error occurred" };
  } else {
    const resData = await response.json();
    return resData;
    // setFetchedEvents(resData.events);
  }
}
