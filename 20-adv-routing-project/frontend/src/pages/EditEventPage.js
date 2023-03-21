import { Link, useRouteLoaderData, json } from "react-router-dom";
import EventForm from "../components/EventForm";
const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EventForm event={data.event}></EventForm>
    </>
  );
};

export default EditEventPage;
