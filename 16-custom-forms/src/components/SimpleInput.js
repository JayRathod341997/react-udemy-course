import userEvent from "@testing-library/user-event";
import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputIsInvalid,
    isValid: enteredNameIsValid,
    valueInputHandler: nameInputHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset,
  } = useInput((value) => value.trim() !== "");

  // const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredNameIsTouch, setEnteredNameIsTouch] = useState(false);
  const [enteredEmailIsTouch, setEnteredEmailIsTouch] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  const enteredEmailIsValid = enteredEmail.includes("@");
  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouch;
  const nameEmailIsInvalid = !enteredEmailIsValid && enteredEmailIsTouch;
  let isFormValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    isFormValid = true;
  }

  // const nameInputHandler = (event) => {
  //   setEnteredName(event.target.value);
  // };
  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  // const nameInputBlurHandler = (event) => {
  //   setEnteredNameIsTouch(true);
  // };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailIsTouch(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    reset();
    // setEnteredNameIsTouch(true);
    setEnteredEmailIsTouch(true);

    // setEnteredName("");
    setEnteredEmail("");
    // setEnteredNameIsTouch(false);
    setEnteredEmailIsTouch(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  const nameEmailClasses = nameEmailIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name"> Your Name </label>{" "}
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />{" "}
        {nameInputIsInvalid && (
          <p className="error-text"> Name must not be empty </p>
        )}{" "}
      </div>
      <div className={nameEmailClasses}>
        <label htmlFor="name"> E - mail </label>{" "}
        <input
          type="text"
          id="email"
          onChange={emailInputHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />{" "}
        {nameEmailIsInvalid && (
          <p className="error-text"> Email must not be empty </p>
        )}{" "}
      </div>{" "}
      <div className="form-actions">
        <button disabled={!isFormValid}> Submit </button>{" "}
      </div>{" "}
    </form>
  );
};

export default SimpleInput;
