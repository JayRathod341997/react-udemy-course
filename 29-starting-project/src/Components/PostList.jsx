import React, { useState } from "react";
import Post from "./Posts";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
export default function PostList({ visibleModal, hideModalHandler }) {
  const [postData, setPostData] = useState([]);

  const addPostHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "content-type": "application/json",
      },
    });
    setPostData((prevData) => [...prevData, postData]);
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
