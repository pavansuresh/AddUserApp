import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
} from "@mui/material";
import { Edit, Delete, FaceRetouchingOff } from "@mui/icons-material";

function ListItem({ employees, handleEdit, handleDelete }) {
const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: null
});
  return (
    <Table style={{ borderTop: "1px solid grey", marginTop: "30px" }}>
      <TableHead>
        <TableRow>
          <TableCell>No</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>E-mail</TableCell>
          <TableCell>Salary</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employees.length > 0 ? (
          employees.map((employee, i) => {
            return (
              <TableRow key={employee.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{employee.firstName}</TableCell>
                <TableCell>{employee.lastName}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{formatter.format(employee.salary)}</TableCell>
                <TableCell>{employee.date}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(employee.id)}>
                    <Edit />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(employee.id)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })
        ) : (
          <TableRow>
            <TableCell colSpan={7} align="center"
            style={{
          color: 'black',
        }}>
              <FaceRetouchingOff pt={2} />
              <Typography>
                It seems that your employee list is empty!
              </Typography>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default ListItem;
