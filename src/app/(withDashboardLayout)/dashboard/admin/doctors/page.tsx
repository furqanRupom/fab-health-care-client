"use client";
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';
import DoctorsModal, { IDoctor } from './DoctorsModal';
import { useDeleteDoctorMutation, useGetAllDoctorQuery } from '@/redux/api/doctorApi';
import { DataGrid, GridColDef, GridRowIdGetter } from '@mui/x-data-grid';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DeleteIcon from "@mui/icons-material/Delete"
import Image from 'next/image';
import { toast } from 'sonner';
import { randomUUID } from 'crypto';
import { useDebounced } from '@/redux/hooks';

interface IDocotorsProps {
}

const Docotors: React.FunctionComponent<IDocotorsProps> = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const debounceTerm = useDebounced({
    searchQuery:searchTerm,
    delay:600
  })
  if(!!debounceTerm){
    query["searchTerm"] = searchTerm;
  }
  const { data, isLoading,isFetching } = useGetAllDoctorQuery({...query});
  const [deleteDoctor] = useDeleteDoctorMutation();

  const handleDelete = async (id: string) => {
    try {
      const response = await deleteDoctor(id).unwrap();
      if(response.id){
        toast.success("Doctor successfully deleted !");
      }
      
    } catch (error:any) {
      toast.error(error.message)
      
    }

  }
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    {
      field: 'email', headerName: 'Email', flex: 1
    },
    {
      field: 'contactNumber', headerName: 'Contact Number', flex: 1
    },
    {
      field: 'registrationNumber', headerName: 'Registration Number', flex: 1
    },
    {
      field: 'address', headerName: 'Address', flex: 1
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      renderCell: ({ row }) => {
        return <>
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <ModeEditOutlineIcon color="primary" />
          </IconButton>
        </>
      },
    }
  ];
  return <Box>

    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Button onClick={() => setOpen(true)}>Create New Doctor</Button>
      <DoctorsModal open={open} setOpen={setOpen} />
      <TextField onChange={(e) => setSearchTerm(e.target.value)} size='small' placeholder='Search Doctor' />
    </Stack>

    {
      !isLoading && !isFetching ? <Box my={2}>

        <DataGrid
          getRowId={(row) => row.id}
          rows={data?.doctors}
          columns={columns}
         
        
        /> 

      </Box> : <Typography>Doctor Not found</Typography>
    }

  </Box>;
};

export default Docotors;
