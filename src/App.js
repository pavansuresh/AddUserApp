import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserLists";

function App() {
const [userList , setUserList] = useState([]);

const whenSomeoneAddUser = (username , userage) => {
  setUserList( (prevUsersList) => {
     return [...prevUsersList, {
         name: username,
         age: userage,
         id: Math.random().toString()
     }]
  });
}

  return (
    <div className="app-container">
        <AddUser onAddUser={whenSomeoneAddUser}/>
        <UserList users={userList}/>
    </div>
  );
}

export default App;
