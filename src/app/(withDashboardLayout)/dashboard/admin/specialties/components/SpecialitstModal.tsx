import FabFileUploader from '@/components/Forms/FabFileUploader';
import FabForm from '@/components/Forms/FabForm';
import FabInput from '@/components/Forms/FabInput';
import FabModal from '@/components/Modal/Modal';
import { useCreateSpecialistMutation } from '@/redux/api/specialistApi';
import { modifyPayload } from '@/utils/modifyFormData';
import { Button, DialogContent, DialogContentText, Grid, TextField } from '@mui/material';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

interface ISpecialitstProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SpecialitstModal: React.FunctionComponent<ISpecialitstProps> = ({ open, setOpen }) => {
  const [createSpeciality] = useCreateSpecialistMutation();
  const handleCreateSpecialistSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await createSpeciality(data).unwrap();
      if (res.id) {
        toast.success("Speciality created successfully !");
        setOpen(false);
      }
    } catch (error: any) {
      console.log(error.message);
    }

  }
  return <FabModal open={open} setOpen={setOpen} title="Create speciality">
    <FabForm onSubmit={handleCreateSpecialistSubmit}>
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item md={6}>
          <FabInput name="title" label='title' />
        </Grid>
        <Grid item md={6}>
          <FabFileUploader name="file" label='Choose Image' />
        </Grid>
      </Grid>
      <Button sx={{
        mx: 2,
        my: 1
      }} type="submit"> Create </Button>
    </FabForm>

  </FabModal>;
};

export default SpecialitstModal;
