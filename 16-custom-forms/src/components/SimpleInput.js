
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueInputHandler: nameInputHandler,
    valueInputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueInputHandler: nameEmailHandler,
    valueInputBlurHandler: nameEmailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let isFormValid = false;
  if (nameInputHasError && enteredEmailIsValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    nameReset();
    emailReset();

  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const nameEmailClasses = emailInputHasError
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
        {nameInputHasError && (
          <p className="error-text"> Name must not be empty </p>
        )}{" "}
      </div>
      <div className={nameEmailClasses}>
        <label htmlFor="name"> E - mail </label>{" "}
        <input
          type="text"
          id="email"
          onChange={nameEmailHandler}
          onBlur={nameEmailBlurHandler}
          value={enteredEmail}
        />{" "}
        {emailInputHasError && (
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
