import React, { useState } from 'react';
import { Box, Container} from '@mui/material';
import Swal from 'sweetalert2';

import Add from './Add';
import Header from './Header';
import Edit from './Edit';
import ListItem from './List';

import { employeesData } from '../../data'

const Index = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [selectedEmployees, setSelectedEmployees] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEdit = (id) => {
      const [employee] =  employees.filter(employee => employee.id === id);
      setSelectedEmployees(employee);
      setIsEditing(true)
  }

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure you want to delete this?',
      text: "you won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    }).then(result => {
       if(result.value){
        const[employee] = employees.filter(employee => employee.id === id)
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.firstName} ${employee.lastName}`,
          showConfirmButton: false,
          timer: 1500
        })
        setEmployees(employees.filter(employee => employee.id !== id));
       }
    })
  }
  
  return (
    <Box marginTop={5}>
    <Container maxWidth="lg" className="">
       {!isAdding && !isEditing && (
         <>
          <Header setIsAdding={setIsAdding}/>
          <ListItem employees={employees} handleEdit={handleEdit} handleDelete={handleDelete}/>
         </>
       )}
       {/* add */}
       {isAdding && (
        <Add
        employees={employees}
        setEmployees={setEmployees}
        setIsAdding={setIsAdding}
        />
       )}
       {/* edit */}
       {isEditing && (
        <Edit
        employees={employees}
        selectedEmployees={selectedEmployees}
        setEmployees={setEmployees}
        setIsEditing={setIsEditing}
        />
       )}
    </Container>
    </Box>
    )
}
 
export default Index;