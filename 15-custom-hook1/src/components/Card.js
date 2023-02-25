import classes from "./Card.module.css";
import React from "react";
const Card = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
