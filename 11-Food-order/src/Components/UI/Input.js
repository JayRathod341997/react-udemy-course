import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.inputvalue.id}>{props.label}</label>
      <input {...props.inputvalue} />
    </div>
  );
};

export default Input;
