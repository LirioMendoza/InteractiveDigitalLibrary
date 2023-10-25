import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const SubmitButton = ({ label }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button type="submit" variant="contained">{label}</Button>
    </Stack>
  );
};

export default SubmitButton;