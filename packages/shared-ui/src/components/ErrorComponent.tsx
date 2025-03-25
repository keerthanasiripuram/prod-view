
import { Typography } from '@mui/material';
import React from 'react';
type ErrorProps={
    error:string
}
export const ErrorComponent = ({error}:ErrorProps) => {
  return <Typography color="error">{error}</Typography>;
};