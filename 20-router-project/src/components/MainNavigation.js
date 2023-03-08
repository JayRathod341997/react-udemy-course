import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
const MainNavigation = () => {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainNavigation;
