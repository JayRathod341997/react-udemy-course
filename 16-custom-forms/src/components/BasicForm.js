import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstNameError,
    isValid: firstNameIsValid,
    valueInputHandler: firstNameInputHandler,
    valueInputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  let isValidForm = false;
  if (firstNameIsValid) {
    isValidForm = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    firstNameReset();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameInputHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameError && (
            <p className="error-text"> First Name must not be empty </p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!isValidForm}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
