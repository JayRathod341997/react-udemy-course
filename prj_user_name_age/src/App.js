import "./App.css";
import React, { useState } from "react";
import UserForm from "./Components/Users/UserForm";
import UserData from "./Components/Users/UserData";
function App() {
  const [userData, setUserdata] = useState("");

  const addUserDetailsHandler = (user) => {
    setUserdata((preUser)=>{
      return {...preUser, ...user};
    });
    console.log("App", userData);
  };

  return (
    <div className="App">
      <UserForm onAddUserDetails={addUserDetailsHandler}></UserForm>
      {/* <UserData></UserData> */}
    </div>
  );
}

export default App;
