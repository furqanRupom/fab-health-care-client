"use client";
import FabModal from '@/components/Shared/Modal';
import { Box, Button, Stack, TextField } from '@mui/material';
import * as React from 'react';
import SpecialitstModal from './components/SpecialitstModal';

interface ISpecialtiesProps {
}

const Specialties: React.FunctionComponent<ISpecialtiesProps> = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  return <Box>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Button onClick={() => setOpen(true)}>
        Create Speciality
      </Button>
      <SpecialitstModal open={open} setOpen={setOpen} />
      <TextField size='small' placeholder='scarch specilities ' />
    </Stack>

  </Box>;
};

export default Specialties;
