import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Adduser.module.css";

const Adduser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label>Username </label>
        <input type="text" id="username"></input>
        <label>Age (Years) </label>
        <input type="number" id="age"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default Adduser;
