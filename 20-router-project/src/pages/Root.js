import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Root.module.css";

const Root = () => {
  return (
    <>
      {/* <h1>Root</h1> */}
      <main className={classes.content}>
        <MainNavigation />

        <Outlet />
      </main>
    </>
  );
};

export default Root;
