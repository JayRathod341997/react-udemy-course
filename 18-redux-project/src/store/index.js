import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: action.counter + 1,
    };
  } else if (action.type === "decrement") {
    return {
      counter: action.counter - 1,
    };
  } else return state;
};

const store = createStore(counterReducer);

export default store;
