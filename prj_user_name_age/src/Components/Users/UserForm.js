import "./UserForm.css";
import React, { useState } from "react";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const enteredNameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const enteredAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    setUserInfo(() => {
      return { name: enteredName, age: enteredAge };
    });
    props.onAddUserDetails(userInfo);
    setEnteredName("");
    setEnteredAge("");
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className="form">
        <div className="inputdiv">
          <label> Enter Name</label>
          <input
            type="text"
            value={enteredName}
            onChange={enteredNameHandler}
          ></input>
        </div>

        <div className="inputdiv">
          <label> Enter Age</label>
          <input
            type="number"
            value={enteredAge}
            onChange={enteredAgeHandler}
          ></input>
        </div>

        <div className="btn">
          <button type="submit">Enter</button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
