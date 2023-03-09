import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = () => {
  return (
    <>
      {/* <h1>Root</h1> */}
      <main>
        <MainNavigation />

        <Outlet />
      </main>
    </>
  );
};

export default Root;
