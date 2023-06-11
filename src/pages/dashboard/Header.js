import React from 'react'
import { Box,Typography, Button } from '@mui/material';

const Header = ({setIsAdding}) => {
  return (
    <Box>
    <Typography variant="h4" component="h1" marginBottom={3}  style={{ fontWeight: 'bold' }}>User Management System</Typography>
         <Button variant="contained" color="success" size="large"
         mt={2} onClick={() => setIsAdding(true)}>Add user</Button> 
    </Box>
  )
}

export default Header