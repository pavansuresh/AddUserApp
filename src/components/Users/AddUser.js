import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import Card from "../UI/Card";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName , enteredAge)
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  }

  const ageNameChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  return (
    <Card>
      <h3 style={{ color: "#1976d2" }}>Fill the form to add User</h3>
      <form onSubmit={addUserHandler}>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User name"
            name="UserName"
            autoFocus
            autoComplete="off"
            onChange={userNameChangeHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="age"
            name="age"
            label="Age"
            autoComplete="off"
            onChange={ageNameChangeHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Add User
          </Button>
        </Grid>
      </form>
    </Card>
  );
};

export default AddUser;
