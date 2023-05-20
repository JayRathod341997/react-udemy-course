import React, { useState } from "react";
import Post from "./Posts";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
export default function PostList() {
  const [enteredText, setEnteredText] = useState("");
  const bodyChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <>
      <NewPost onAddPost={bodyChangeHandler} />
      <ul className={classes.posts}>
        <Post author="a1" body={enteredText} />
        <Post author="a2" body="content2" />
        <Post author="a3" body="content3" />
      </ul>
    </>
  );
}
