"use client";
import FabModal from '@/components/Modal/Modal';
import { Box, Button, IconButton, Stack, TextField, Typography } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete"
import * as React from 'react';
import SpecialitstModal from './components/SpecialitstModal';
import { useDeleteSpecialistMutation, useGetAllSpecialistQuery } from '@/redux/api/specialistApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Image from 'next/image';
import { toast } from 'sonner';

interface ISpecialtiesProps {
}


const Specialties: React.FunctionComponent<ISpecialtiesProps> = (props) => {
  const [deleteSpecialist] = useDeleteSpecialistMutation();
  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpecialist(id).unwrap();
      if (res?.id) {
        toast.success("Speciality successfully deleted !");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }
  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', width: 300 },
    {
      field: 'icon',
      headerName: 'Icon'
      , width: 400,
      renderCell: ({ row }) => {
        return <Box>
          <Image src={row.icon} alt="icon" width={30} height={30} />
        </Box>
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      },
    }
  ];
  const [open, setOpen] = React.useState<boolean>(false);
  const { data, isLoading } = useGetAllSpecialistQuery({});
  console.log(data);
  return <Box>
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Button onClick={() => setOpen(true)}>
        Create Speciality
      </Button>
      <SpecialitstModal open={open} setOpen={setOpen} />
      <TextField size='small' placeholder='scarch specilities ' />
    </Stack>

    {/* box for display specialist */}
    {
      isLoading && <Typography py={3} sx={{
        textAlign: "center"

      }} component="h5" variant='h5'>No Data Found</Typography>
    }
    {
      !isLoading && <Box my={2}>

        <DataGrid
          rows={data}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />

      </Box>
    }
  </Box>;
};

export default Specialties;
