import React from "react";
import classes from "./Modal.module.css";
export default function Modal(props) {
  return (
    <>
      <div className={classes.backdrop}> </div>
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}
