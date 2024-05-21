"use client";
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import * as React from 'react';
import SchedulesModal from './components/SchedulesModal';
import { useGetAllScheduleQuery } from '@/redux/api/sheduleApi';
import { DataGrid, GridColDef, GridRowIdGetter } from '@mui/x-data-grid';
import DeleteIcon from "@mui/icons-material/Delete"
import { DateFormatter } from '@/utils/DateFormatter';
import dayjs from 'dayjs';
interface ISchedulesProps {
}

interface iSchedule {
  id:string
  startDate:string;
  endDate:string;
  startTime:string;
  endTime:string;
  creaedAt:string;
  updatedAt:string
}

const Schedules: React.FunctionComponent<ISchedulesProps> = (props) => {

  const { data } = useGetAllScheduleQuery({});
  const schedules = data?.schedules;
  console.log(schedules)
  const [allSchedules,setAllSchedules] = React.useState<Record<string,any>>([])
  React.useEffect(()=>{
    const updateSchedule = schedules?.map((schedule:iSchedule) => ({
      id:schedule?.id,
      startDate:DateFormatter(schedule.startDate),
      endDate:DateFormatter(schedule.endDate),
      startTime:dayjs(schedule?.startDate).format('hh:mm a'),
      endTime: dayjs(schedule?.endDate).format('hh:mm a'),
    }))

    setAllSchedules(updateSchedule);

  },[allSchedules])
  const [open, setOpen] = React.useState<boolean>(false);
  const handleDelete = (id:string) => {}
  const columns: GridColDef[] = [
    { field: 'startDate', headerName: 'Start Ddate', flex: 1 },
    {
      field: 'endDate', headerName: 'End Date', flex: 1
    },
    {
      field: 'startTime', headerName: 'Start Time', flex: 1
    },
    {
      field: 'endTIme', headerName: 'End Time', flex: 1
    },
  
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: ({ row }) => {
        return <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      },
    }
  ];
  return <Box> 
    <Stack direction="row" justifyContent="space-between" alignItems="center">
    <Button onClick={() => setOpen(true)}>Create New Schedules</Button>
    <SchedulesModal open={open} setOpen={setOpen} />
    <TextField size='small' placeholder='Search Specialites' />
  </Stack>

   
    {/* <DataGrid
      getRowId={(row) => row.id}
      rows={data?.schedules}
      columns={columns}


    />  */}
  </Box>;
};

export default Schedules;
