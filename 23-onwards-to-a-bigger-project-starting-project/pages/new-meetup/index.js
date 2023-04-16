import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const addMeetupHandler = (enteredMeet) => {
    console.log(enteredMeet);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
