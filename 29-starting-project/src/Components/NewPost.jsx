import classes from "./NewPost.module.css";
import { useState } from "react";
function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState();
  const [enteredAuthor, setEnteredAuthor] = useState();
  const onBodychangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  const onNameChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const personData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    props.onAdd(personData);
    console.log(personData);
    props.onClose();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodychangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onNameChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancle
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
