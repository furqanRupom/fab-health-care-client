import FabFileUploader from '@/components/Forms/FabFileUploader';
import FabForm from '@/components/Forms/FabForm';
import FabInput from '@/components/Forms/FabInput';
import FabModal from '@/components/Shared/Modal';
import { modifyPayload } from '@/utils/modifyFormData';
import { Button, DialogContent, DialogContentText, Grid, TextField } from '@mui/material';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';

interface ISpecialitstProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SpecialitstModal: React.FunctionComponent<ISpecialitstProps> = ({ open, setOpen }) => {
  const handleCreateSpecialistSubmit = async (values:FieldValues) => {
        const data = modifyPayload(values);
        try {
          
        } catch (error:any) {
          console.log(error.message);
        }

  }
  return <FabModal open={open} setOpen={setOpen} title="Create speciality">
    <FabForm onSubmit={handleCreateSpecialistSubmit}>
      <Grid container spacing={2} sx={{p:3}}>
        <Grid item md={6}>
          <FabInput name="Title" label='Title' />
        </Grid>
        <Grid item md={6}>
          <FabFileUploader name="file" label='Choose Image'  />
        </Grid>

      </Grid>
      <Button sx={{
        mx:2,
        my:1
      }} type="submit"> Create </Button>
    </FabForm>

  </FabModal>;
};

export default SpecialitstModal;
