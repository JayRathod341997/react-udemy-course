import React, { useState } from "react";
import Post from "./Posts";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
export default function PostList({ visibleModal, hideModalHandler }) {
  const [postData, setPostData] = useState([]);
  const addPostHandler = (personData) => {
    setPostData((prevData) => [...prevData, personData]);
  };
  return (
    <>
      {visibleModal && (
        <Modal onClose={hideModalHandler}>
          <NewPost onClose={hideModalHandler} onAdd={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {postData.map((post) => (
          <Post key={post.body} author={post.author} body={post.body} />
        ))}
      </ul>
    </>
  );
}
