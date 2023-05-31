import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useLoaderData } from "react-router-dom";
import classes from "./PostList.module.css";
export default function PostList() {
  const postData = useLoaderData();

  return (
    <>
      {postData.length > 0 && (
        <ul className={classes.posts}>
          {postData.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
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
