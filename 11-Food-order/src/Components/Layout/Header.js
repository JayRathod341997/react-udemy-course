import classes from "./Header.module.css";
import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpeg";
import Button from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React-Meals</h1>
        <Button />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="food img" />
      </div>
    </Fragment>
  );
};

export default Header;
