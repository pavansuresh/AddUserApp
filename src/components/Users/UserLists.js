import React from "react";
import Card from "../UI/Card";
// here css not used

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserList = (props) => {
  return (
    <Card>
      <CardContent>
          {props.users.map((user) => (
            <Typography
              variant="subtitle1"
              align="left"
              color="secondary"
              key={user.id}
            >
              User name : {user.name} <br />
              Age : {user.age}
            </Typography>
          ))}
      </CardContent>
    </Card>
  );
};

export default UserList;
