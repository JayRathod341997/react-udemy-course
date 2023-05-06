import { useState } from "react";

const Greeting = () => {
  const [changedText, setChangeText] = useState(false);

  const changedTextHandler = () => {
    setChangeText(true);
  };
  return (
    <div>
      <h1>Hello World</h1>
      <h1>Nice , good to see you again!</h1>
      {!changedText && <p>Paragram tag</p>}
      {changedText && <p>Changed</p>}
      <button onClick={changedTextHandler}>Change</button>
    </div>
  );
};

export default Greeting;
