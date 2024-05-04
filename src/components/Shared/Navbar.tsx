import { Box, Button, Container, Link, Stack, Typography } from '@mui/material';
import * as React from 'react';

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
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

            <Button LinkComponent={Link} href="/login" >Login</Button>
        </Stack>

    </Container>;
};

export default Navbar;
