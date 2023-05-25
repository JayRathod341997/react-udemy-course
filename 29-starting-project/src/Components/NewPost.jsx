import classes from "./NewPost.module.css";
import { useState } from "react";
function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={props.onAddPost} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={props.onClose}>Cancle</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
