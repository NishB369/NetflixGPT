import React from "react";
import Login from "../Login/Login";
import Browse from "../Browse/Browse";
import { createBrowserRouter, RouterProvider } from "react-router";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
