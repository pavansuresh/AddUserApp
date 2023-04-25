import React from 'react';

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Card from './Card'

const ErrorMessage = (props) => {
     return(
        <Card>
           <header>
              <Typography
              variant="subtitle1"
              align="left"
              color="error"
            >
             {props.title} <br />
             {props.description}
            </Typography>
           </header>
           <footer>
           <Button variant="contained" type="submit">
            Okay
          </Button>
           </footer>
        </Card>
     )
};

export default ErrorMessage