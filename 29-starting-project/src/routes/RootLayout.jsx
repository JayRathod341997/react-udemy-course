import React from "react";
import MainHeader from "../Components/MainHeader";
import { Outlet } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
