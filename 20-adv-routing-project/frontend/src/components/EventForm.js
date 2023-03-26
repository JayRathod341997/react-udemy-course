import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
} from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData(); // get data from closest page -> NewEventPage
  const isSubmitted = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method="post" className={classes.form}>
      {/*  if data is submitted ,
            && if data of error property is set  then  display error */}
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>

        // Object.values will give all the values available inside the data.error
      )}

      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : "New Event title"}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={
            event
              ? event.image
              : "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg"
          }
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : "New description"}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitted}>
          Cancel
        </button>
        <button disabled={isSubmitted}>
          {isSubmitted ? "Submitting" : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;
