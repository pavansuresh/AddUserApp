import React, { useState } from 'react';
import { Box, Container} from '@mui/material';

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
      console.log(id)
  }

  const handleDelete = (id) => {
    console.log('delete'+ id)
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