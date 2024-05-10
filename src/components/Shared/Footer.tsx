import { Box, Container, Link, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";

import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return <Box bgcolor="rgb(17,26,34)" >
  <Container>
          <Stack
              direction="row"
              py={5}
          
              gap={4}
              justifyContent="center"
              >

              <Typography color="white" component={Link} href="/consulations">Consulations</Typography>
              <Typography color="white" component={Link} href="/healthPlans">Health plans</Typography>
              <Typography color="white" component={Link} href="/medicine">Medicince</Typography>
              <Typography color="white" component={Link} href="/diagnostics">Diagnostics</Typography>
              <Typography color="white" component={Link} href="/ngos">NGOs</Typography>
          </Stack>

      <Stack
        direction="row"
        py={5}

        gap={4}
        justifyContent="center"
      >
       <Image src={facebookIcon} width={30} height={30} alt="facebook Image" />
       <Image src={instagramIcon} width={30} height={30} alt="instagram Image" />
       <Image src={twitterIcon} width={30} height={30} alt="twitter Image" />
       <Image src={linkedinIcon} width={30} height={30} alt="linkedin Image" />
      </Stack>
      <div className='border-b-[1px] border'></div>
      <Stack direction="row" justifyContent="space-between" py={5}>
             <Typography color="whitesmoke" variant='subtitle2'>
              &copy; 2024 Fab Health Care all right reserved
             </Typography>

        <Typography color="whitesmoke" variant='h3' component="h1" fontWeight="650" >Fa<Box color="primary.main" component="span">B</Box> Health Care</Typography>

        <Typography color="whitesmoke" variant='subtitle2' component="h1" fontWeight="650" >Privacy Policy! Terms & conditions</Typography>

      </Stack>
  </Container>
  
  </Box>;
};

export default Footer;
