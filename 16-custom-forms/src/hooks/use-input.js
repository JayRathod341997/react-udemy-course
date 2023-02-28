import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsTouch, setEnteredValueIsTouch] = useState(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && enteredValueIsTouch;

  const valueInputHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueInputBlurHandler = (event) => {
    setEnteredValueIsTouch(true);
  };

  const reset = () => {
    setEnteredValue("");
    setEnteredValueIsTouch(false);
  };

  return {
    value: enteredValue,
    hasError,
    isValid:valueIsValid,
    valueInputHandler,
    valueInputBlurHandler,
    reset,
  };
};

export default useInput;
