import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postsLoader } from "./Posts";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [{ path: "/create", element: <NewPost /> }],
      },
      ,
    ],
  },
  ,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
