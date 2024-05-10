
"use client"
import { getUserInfo, isLoggedIn, loggedOut } from '@/services/auth.services';
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

interface INavbarProps {
}


const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    const user = getUserInfo();
    console.log(user);
    const AuthButton = dynamic(() => import('../UI/AuthButton/AuthButton'), { ssr: false })


   
    return <Container>
        <Stack
            py={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <Typography variant='h5' component="h1" fontWeight="650" >Fa<Box color="primary.main" component="span">B</Box> Health Care</Typography>
            <Stack
                direction="row"
                gap={4}
                justifyContent="space-between">
                <Typography component={Link} href="/consulations">Consulations</Typography>
                <Typography component={Link} href="/healthPlans">Health plans</Typography>
                <Typography component={Link} href="/medicine">Medicince</Typography>
                <Typography component={Link} href="/diagnostics">Diagnostics</Typography>
                <Typography component={Link} href="/ngos">NGOs</Typography>
            </Stack>
            <AuthButton />
         
        </Stack>
    </Container>;
};

export default Navbar;
