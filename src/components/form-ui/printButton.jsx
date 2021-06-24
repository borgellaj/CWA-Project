import React from 'react';
import { Button } from '@material-ui/core';

const ButtonPrint = ({
  children,
  ...otherProps
}) => {


  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
  }

  return (
    <Button
      {...configButton}
    >
      {children}
    </Button>
  );
};

export default ButtonPrint;