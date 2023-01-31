import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.inputvalue.id}>{props.label}</label>
      <input {...props.inputvalues} />
    </div>
  );
};

export default Input;
