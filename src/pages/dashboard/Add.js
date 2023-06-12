import { useState, useRef, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import Swal from "sweetalert2";

function Add({ employees, setEmployees, setIsAdding }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        title: "ERROR",
        icon: "error",
        text: "Enter all the fields",
        showConfirmButton: true,
      });
    }
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      salary,
      date,
    });

    const id = employees.length + 1;
    console.log(id)
    const newEmployees = {
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    employees.push(newEmployees);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} 
      ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });

    // Reset the input values
    setFirstName("");
    setLastName("");
    setEmail("");
    setSalary("");
    setDate("");
  };

  return (
    <form onSubmit={handleAdd}>
      <h2>Add User</h2>
      <TextField
        label="First Name"
        value={firstName}
        ref={textInput}
        onChange={(e) => setFirstName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        variant="contained"
        color="success"
        size="large"
        type="submit"
        value="Add"
      >
        Add
      </Button>
      <button
      className="cancel-btn"
        type="button"
        onClick={() => setIsAdding(false)}
      >
        Cancel
      </button>
    </form>
  );
}

export default Add;
