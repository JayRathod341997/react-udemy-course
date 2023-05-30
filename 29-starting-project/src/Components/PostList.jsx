import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";
import classes from "./PostList.module.css";
export default function PostList({ visibleModal, hideModalHandler }) {
  const postData = useLoaderData();

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
      {postData.length > 0 && (
        <ul className={classes.posts}>
          {postData.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {postData.length === 0 && (
        <div>
          <h1>No post available</h1>
        </div>
      )}
    </>
  );
}
