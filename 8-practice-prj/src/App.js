import React from "react";
import Adduser from "./Components/Users/Adduser";
import UserList from "./Components/Users/UsersList";
function App() {
  return (
    <div>
      <Adduser />
      <UserList users={[]} />
    </div>
  );
}

export default App;
