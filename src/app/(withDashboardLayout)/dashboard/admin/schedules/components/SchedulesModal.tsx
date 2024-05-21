import FabDatePicker from '@/components/Forms/FabDatePicker';
import FabForm from '@/components/Forms/FabForm';
import FabTimePicker from '@/components/Forms/FabTimePicker';
import FabModal from '@/components/Modal/Modal';
import { useCreateScheduleMutation } from '@/redux/api/sheduleApi';
import { DateFormatter } from '@/utils/DateFormatter';
import { TimeFormatter } from '@/utils/TimeFormatter';
import { Button, Grid, TextField } from '@mui/material';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

interface ISchedulesModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SchedulesModal: React.FunctionComponent<ISchedulesModalProps> = ({ open, setOpen }) => {
  const [createSchedule] = useCreateScheduleMutation();
  const handleCreateschedule = async (values: FieldValues) => {
    values.startDate = DateFormatter(values.startDate)
    values.endDate = DateFormatter(values.endDate)
    values.startTime = TimeFormatter(values.startTime);
    values.endTime = TimeFormatter(values.endTime);
    try {
      const response = await createSchedule(values);
      if(response){
        toast.success("Schedule successfully created !");
      }
      
    } catch (error:any) {
       toast.error(error.message)
    }
  }
  return <>
    <FabModal open={open} setOpen={setOpen} title='Create schedule'>
      <FabForm onSubmit={handleCreateschedule}>

        <Grid sx={{
          padding: "0.3rem 1rem"
        }} container spacing={3}>
          <Grid item md={12}>
            <FabDatePicker label='Start Date' fullWidth={true} name="startDate" />
          </Grid>
          <Grid item md={12}>
            <FabDatePicker label='End Date' fullWidth={true} name="endDate" />
          </Grid>
          <Grid item md={6}>
            <FabTimePicker label='Start Time' fullWidth={true} name="startTime" />
          </Grid>
          <Grid item md={6}>
            <FabTimePicker label='End Time' fullWidth={true} name="endTime" />
          </Grid>

        </Grid>
        <Button sx={{
          m: 3
        }} type='submit'>Create</Button>



      </FabForm>
    </FabModal>
  </>;
};

export default SchedulesModal;
