import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    name: "Event 1",
  },
  {
    id: "e2",
    name: "Event 2",
  },
  {
    id: "e3",
    name: "Event 3",
  },
];

const EventsPage = () => {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
