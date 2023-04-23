import React from "react";
import Card from "../UI/Card";
// here css not used

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const UserList = (props) => {

// delete functionality
// const [users, setUsers] = useState([]);
// const  handleDelete = (user) => {
//   const updatedList = [...users];
//   updatedList.splice(user, 1);
//   setUsers(updatedList);
// }


return (
    <div className="card-lists">
      {props.users.map((user) => (
        <Card 
        key={user.id}>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="subtitle1"
              align="left"
              color="secondary"
            >
              User name : {user.name} <br />
              Age : {user.age}
            </Typography>
            <Button variant="outlined" color="error"  size="small">
              Delete
            </Button>
          </Box>
        </Card>
      ))}
    </div>
  );
};

export default UserList;
