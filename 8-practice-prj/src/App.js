import React, { useState } from "react";
import Adduser from "./Components/Users/Adduser";
import UserList from "./Components/Users/UsersList";
function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <Adduser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
