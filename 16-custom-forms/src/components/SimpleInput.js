import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameIsTouch, setEnteredNameIsTouch] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouch;
  let isFormValid = false;
  if (enteredNameIsValid) {
    isFormValid = true;
  }

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameIsTouch(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredNameIsTouch(true);
    console.log(enteredName);

    setEnteredName("");
    setEnteredNameIsTouch(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
