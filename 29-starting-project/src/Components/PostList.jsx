import React, { useState } from "react";
import Post from "./Posts";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
export default function PostList({ visibleModal, hideModalHandler }) {
  
  return (
    <>
      {visibleModal && (
        <Modal onClose={hideModalHandler}>
          <NewPost onClose={hideModalHandler}/>
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author="a2" body="content2" />
        <Post author="a3" body="content3" />
      </ul>
    </>
  );
}
