import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';

interface ISpecialistProps {
}

const Specialist: React.FunctionComponent<ISpecialistProps> = async(props) => {

  const res = await fetch("http://localhost:5000/api/v1/speclites",{
    next:{
      revalidate:30
    }
  });
  const {data:specialities} = await res.json();
  return <div>


    <Container>
      <Box sx={{
        margin:"40px 0px",
        textAlign:"center"
      }}>
        <Box
        sx={{
          textAlign:"left"
        }}>
          <Typography fontWeight={600} variant='h3'>  Explore treatments Across Specialities</Typography>
          <Typography fontWeight={400} component="p">  Experience Doctors Across All Specialities</Typography>
        </Box>

        <Stack direction="row"  gap={4} mt={5}>
          {
            specialities.map((speciality:any) => (
              <Box sx={{
                flex:1,
                width:"150px",
                backgroundColor:"rgba(245,245,245,1)",
                border:"1px solid rgba(250,250,250,1)",
                borderRadius:"10px",
                textAlign:"center",
                padding:"24px 10px",
                "& img":{
                      width:"50px",
                      height:"50px",
                      margin:"0 auto"
                },
                "&:hover":{
                  border:"1px solid blue",
                  borderRadius:"20px"
                }
              }} key={speciality.id}>

                <Image width={100} height={100} src={speciality?.icon} alt="spacility icon" />
                <Box
                  >
                
                  <Typography fontWeight={400} component="p">{speciality.title}</Typography>
                </Box>
              </Box>

            ))
          }


        </Stack>
      <Button sx={{
        marginTop:"20px"
      }} variant='outlined'  >View All</Button>
      </Box>
    </Container>
  </div>;
};

export default Specialist;
