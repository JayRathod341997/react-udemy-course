import React from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";
export default function Modal(props) {
  const navigate = useNavigate();
  const closeModalHandler = () => {
    navigate("..");
  };
  return (
    <>
      <div className={classes.backdrop} onClick={closeModalHandler}></div>
      <dialog open className={classes.modal}>
        {props.children}
      </dialog>
    </>
  );
}
