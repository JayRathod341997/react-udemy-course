import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
function EventsPage() {
  const loadData = useLoaderData();
  const events = loadData.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events12");

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "API error" }), {
      status: 500,
    });
  } else {
    const resData = await response.json();
    return resData;
    // setFetchedEvents(resData.events);
  }
}
