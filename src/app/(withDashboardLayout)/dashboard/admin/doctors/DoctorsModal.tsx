"use client";
import FabForm from '@/components/Forms/FabForm';
import FabInput from '@/components/Forms/FabInput';
import FabSelect from '@/components/Forms/FabSelect';
import FullScreenModal from '@/components/Modal/FullScreenModal';
import { useCreateDoctorMutation } from '@/redux/api/doctorApi';
import { Gender } from '@/types';
import { modifyPayload } from '@/utils/modifyFormData';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, Grid, Stack, TextField } from '@mui/material';
import * as React from 'react';
import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

interface IDoctorsModalProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDoctor {
    name: string;
    email: string;
    gender: 'MALE' | 'FEMALE',
    address: string;
    designation: string;
    currentWorkPlace: string;
    contactNumber: string;
    registrationNumber: string;
    experience: string | number;
    qualification: string;
    appointmentFee: string | number;
}

interface IDoctorValues {
    password: string;
    doctor: IDoctor
}
const DoctorDefaultValues: IDoctorValues = {
    password: "",
    doctor: {
        name: "",
        email: "",
        gender: 'MALE',
        address: "",
        designation: "",
        currentWorkPlace: "",
        contactNumber: "",
        registrationNumber: "",
        experience: "",
        qualification: "",
        appointmentFee: ""
    }
}

const doctorValidationSchema = z.object({
    password: z.string().min(1, 'Password is required'),
    doctor: z.object({
        name: z.string().min(1, 'Name is required'),
        email: z.string().min(1, 'Email is required'),
        address:z.string().min(1,"address is required"),
        contactNumber: z.string().min(1, 'Contact Number is required'),
        registrationNumber: z.string().min(1, 'Registration Number is required'),
        gender: z.enum(Gender as [string, ...string[]], { required_error: "Gender is required" }),
        designation: z.string().min(1, 'Designation is required'),
        appointmentFee: z.string().min(1, 'Apointment Fee is required'),
        currentWorkPlace: z.string().min(1, 'Current Work place is required'),
        experience: z.string().min(1, 'Experience is required'),
        qualification: z.string().min(1, 'Qualification is required'),
    })
})

const DoctorsModal: React.FunctionComponent<IDoctorsModalProps> = ({ open, setOpen }) => {
    const [createDoctor] = useCreateDoctorMutation();
   
   const handleDoctorSubmit = async (values:FieldValues) => {
       const data = {
           ...values,
           doctor: {
               ...values.doctor,
               appointmentFee: parseFloat(values.doctor.appointmentFee)
           }
       };

    try {
        const modifyData = modifyPayload(data);
        const response = await createDoctor(modifyData).unwrap();
        if(response.id){
            toast.success("Doctor Created Successfully !")
        }

    } catch (error:any) {
        toast.error(error.message)
    }

    
   }
    return <FullScreenModal open={open} setOpen={setOpen}>
        <FabForm resolver={zodResolver(doctorValidationSchema)} defaultValues={DoctorDefaultValues} onSubmit={handleDoctorSubmit}>
            <Grid container spacing={5} >
                <Grid item md={4}>
                    <FabInput name='doctor.name' size='small' label='doctor Name' type='text'  fullWidth={true} />
                </Grid>
                <Grid item md={4}>
                    <FabInput name='doctor.email' size='small' label='Email' type='email'  fullWidth={true} />
                </Grid>
                <Grid item md={4}>
                    <FabInput name='password' size='small' label='Password' type='password'  fullWidth={true} />
                </Grid>
                <Grid item md={4}>
                    <FabInput name='doctor.contactNumber' size='small' label='Contact Number' type='tel'  fullWidth={true} />
                </Grid>
                <Grid item md={4}>
                    <FabInput name='doctor.address' size='small' label='Address' type='text'  fullWidth={true} />
                </Grid>
                <Grid item md={4}>
                    <FabInput name='doctor.registrationNumber' size='small' label='Registration Number' type='tel'  fullWidth={true} />
                </Grid>
                <Grid item md={4}>
                    <FabInput name='doctor.experience' size='small' label='Experience' type='number'  fullWidth={true} />
                </Grid>
                <Grid item md={4}>
                    <FabSelect name="doctor.gender" size='small' fullWidth={true} label='Select Gender'  items={Gender} />
                </Grid>
                <Grid item md={4}>
                    <FabInput name='doctor.appointmentFee' size='small' label='Apointment Fee' type='number'  fullWidth={true} />
                </Grid>
                <Grid item md={4}>
                    <FabInput name='doctor.qualification' size='small' label='Qualtification' type='text'  fullWidth={true} />
                </Grid>
                <Grid item md={4}>
                    <FabInput name='doctor.currentWorkPlace' size='small' label='Current work place' type='text'  fullWidth={true} />
                </Grid>
                <Grid item md={4}>
                    <FabInput name='doctor.designation' size='small' label='Designation' type='text'  fullWidth={true} />
                </Grid>
            </Grid>
           
                <Button type="submit" size='large' sx={{
                    textAlign: "center",
                }}>Create Doctor</Button>

        </FabForm>
    </FullScreenModal>;
};

export default DoctorsModal;
