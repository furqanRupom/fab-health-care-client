"use client";
import assets from '@/assets';
import { Grid,Box,Stack,Button,Typography,Container } from '@mui/material';
import Link from "next/link"
import Image from 'next/image';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from 'sonner';
import { userLogin } from '@/services/actions/userLogin';
import FabForm from '@/components/Forms/FabForm';
import FabInput from '@/components/Forms/FabInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface ILoginFormProps {

}


 export interface ILoginData {
    email: string;
    password: string;
}


export const loginSchemaValidation = z.object({
    email:z.string({required_error:"Pleave provide your email"}),
    password:z.string({required_error:"Pleave provide your password"}).min(6,"Password should at least 6 characters")
})

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
    const router = useRouter();
    const handleLogin = async(data:FieldValues) => {
        try {
            console.log(data)
           const loggedInUser = await userLogin(data);
           if(loggedInUser.success){
               toast.success(loggedInUser.message);
               localStorage.setItem('accessToken',loggedInUser.data.accessToken);
               router.push('/');
           }
        } catch (error: any) {
            toast.error(error.message);
            router.push('/login');
        }
    }


   

    return <Container >
        <Stack sx={{
            height: "100vh",
            justifyContent: "center",
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
                            Patient Login
                        </Typography>
                    </Box>
                </Stack>
                <Box>
                    {/* login form  */}
                    <FabForm onSubmit={handleLogin} resolver={zodResolver(loginSchemaValidation)}>
                        <Grid container spacing={3} my={1}>
                            <Grid item md={6}>
                                <FabInput required={true}  name="email" type='email' label="Enter Your Email" variant="outlined" size="small" fullWidth={true} />
                            </Grid>
                            <Grid item md={6}>
                                <FabInput required={true}  name="password" type='password' label="Enter Your Password" variant="outlined" size="small" fullWidth={true} />
                            </Grid>
                        </Grid>
                        <Typography textAlign="end" fontWeight={300} variant='subtitle1' component="p"> <Link href="/register">Forget password?</Link></Typography>
                        <Button type="submit" sx={{
                            margin: "10px auto"
                        }} fullWidth={true}>Login </Button>
                        <Typography fontWeight={300} variant='subtitle1' component="p">New to Fab Healt Care <Link href="/register">Register now</Link></Typography>
                    </FabForm>
                </Box>
            </Box>
        </Stack>
    </Container>;;
};

export default LoginForm;
