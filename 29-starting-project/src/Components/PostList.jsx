import React, { useState } from "react";
import Post from "./Posts";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
export default function PostList({ visibleModal, hideModalHandler }) {
  const [enteredText, setEnteredText] = useState("");
  const bodyChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  return (
    <>
      {visibleModal && (
        <Modal onClose={hideModalHandler}>
          <NewPost onAddPost={bodyChangeHandler} onClose={hideModalHandler}/>
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="a1" body={enteredText} />
        <Post author="a2" body="content2" />
        <Post author="a3" body="content3" />
      </ul>
    </>
  );
}
