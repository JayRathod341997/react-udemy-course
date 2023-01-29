import React from "react";
import Card from "../UI/Card";

const Adduser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={addUserHandler}>
        <label>Username </label>
        <input type="text" id="username"></input>
        <label>Age (Years) </label>
        <input type="number" id="age"></input>
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default Adduser;
