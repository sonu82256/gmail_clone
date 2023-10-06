

import React from 'react'
import {Box, Typography} from '@mui/material';
import { useRouteError } from 'react-router-dom';

const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <Box style = {{marginLeft: 250}}>
        <Typography>There was an error loading this page </Typography>
    </Box>
  )
}

export default ErrorComponent