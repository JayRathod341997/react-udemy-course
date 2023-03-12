import { Outlet } from "react-router-dom";
import EventNavigation from "../components/EventsNavigation";
const EventRoot = () => {
  return (
    <>
      <EventNavigation />
      <Outlet />
    </>
  );
};

export default EventRoot;
