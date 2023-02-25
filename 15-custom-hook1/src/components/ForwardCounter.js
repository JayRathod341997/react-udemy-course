import React from "react";
import useCounter from "../hooks/Counter";
import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
