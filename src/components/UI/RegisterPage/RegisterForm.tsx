"use client"
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import Link from "next/link"
import assets from '@/assets';
import { SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { modifyPayload } from '@/utils/modifyFormData';
import { registerPatient } from '@/services/actions/registerPatient';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { userLogin } from '@/services/actions/userLogin';
import FabForm from '@/components/Forms/FabForm';
import FabInput from '@/components/Forms/FabInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


interface IRegisterFormProps {
}

interface IRegisterField {
  password: string;
  patient: {
    name: string;
    email: string;
    contactNumber: string;
    profilePhto: string;
    address: string;
  }
}
export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: ""
  }
}

const patientSchema = z.object({
  name: z.string({ required_error: "password is required" }).min(1, "Name is required"),
  email: z.string({ required_error: "email is required" }).min(1, "Email is required"),
  contactNumber: z.string({ required_error: "contact number is required" }).min(1, "contact number is required"),
  address: z.string({ required_error: "address is required" }).min(1, "address is required"),
})
const registerValidationSchema = z.object({
  password: z.string({ required_error: "password is required" }).min(6, 'password should at least six characters'),
  patinet: patientSchema
})

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = (props) => {
  const { register, handleSubmit } = useForm<IRegisterField>();
  const router = useRouter();
  const handleRegister = async (values: FieldValues) => {
    const getModifyData = modifyPayload(values);
    try {
      const res = await registerPatient(getModifyData);
      console.log(res)
      console.log(res.success)
      if (res.success) {
        toast.success(res.message);
        const loggedInUser = await userLogin({
          email: values.patient.email,
          password: values.password
        });
        if (loggedInUser) {
          localStorage.setItem('accessToken', loggedInUser.data.accessToken)
          router.push('/dashboard');
        }
      }
    } catch (error: any) {
      toast.error(error.message)
    }

  }
  return <Container >
    <Stack sx={{
      justifyContent: "center",
      height: "100vh",
      alignItems: "center",
      textAlign: "center"
    }}>
      <Box sx={{
        maxWidth: "600px",
        boxShadow: 1,
        width: "100%",
        borderRadius: 1,
        p: 4
      }}>
        <Stack sx={{
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Box>
            <Image src={assets.svgs.logo
            } width={50} height={50} alt="register images" />
          </Box>
          <Box>
            <Typography variant="h6" fontWeight={900}>
              Patient Register
            </Typography>
          </Box>
        </Stack>
        <Box>
          <FabForm defaultValues={defaultValues} onSubmit={handleRegister} resolver={zodResolver(registerValidationSchema)}>
            <Grid container spacing={3} my={1}>
              <Grid item md={12}>
                <FabInput name="patient.name" type='text' label="Enter Your Name" variant="outlined" size="small" fullWidth={true} />
              </Grid>
              <Grid item md={6}>
                <FabInput name="patient.email" type='email' label="Enter Your Email" variant="outlined" size="small" fullWidth={true} />
              </Grid>
              <Grid item md={6}>
                <FabInput name="password" type='password' label="Enter Your Password" variant="outlined" size="small" fullWidth={true} />
              </Grid>
              <Grid item md={6}>
                <FabInput name="patient.contactNumber" type='tel' label="Enter Your Contact Number" variant="outlined" size="small" fullWidth={true} />
              </Grid>
              <Grid item md={6}>
                <FabInput name="address" type='text' label="Enter Your Adress" variant="outlined" size="small" fullWidth={true} />
              </Grid>
            </Grid>
            <Button type="submit" sx={{
              margin: "10px auto"
            }} fullWidth={true}>Register </Button>
            <Typography fontWeight={300} variant='subtitle1' component="p">Already have an account? <Link href="/login">Login now</Link></Typography>
          </FabForm>
        </Box>
      </Box>
    </Stack>
  </Container>;
};

export default RegisterForm;
