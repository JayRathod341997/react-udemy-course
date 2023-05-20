import React from "react";
import Post from "./Posts";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
export default function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="a1" body="content1" />
        <Post author="a2" body="content2" />
        <Post author="a3" body="content3" />
      </ul>
    </>
  );
}
