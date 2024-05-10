import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import worksImage from "@/assets/how-it-works-img.png"

import seacrchIcon from "@/assets/icons/search-icon.png"
import doctorIcon from "@/assets/icons/doctor-icon.png"
import appointmentIcon from "@/assets/icons/appointment-icon.png"
import charityIcon from "@/assets/icons/charity-icon.png"

interface IHowWorksProps {
}

const HowWorks: React.FunctionComponent<IHowWorksProps> = (props) => {
    const howItWorksData =
        [
            {
                title: "Book an Appointment",
                icon: seacrchIcon,
                description: "Choose a convenient date and time for your appointment using our online booking system or by contacting our clinic directly."
            },
            {
                title: "Complete Patient Forms",
                icon: doctorIcon,
                description: "Before your appointment, fill out any necessary patient forms online or arrive a few minutes early to complete them in person."
            },
            {
                title: "Consultation with Doctor",
                icon: appointmentIcon,
                description: "Meet with one of our experienced doctors who will listen to your concerns, assess your condition, and recommend the appropriate treatment plan."
            },
            {
                title: "Follow-Up Care",
                icon: charityIcon,
                description: "If necessary, schedule any follow-up appointments or procedures to ensure continuity of care and monitor your progress."
            }
        ]


    return <Container sx={{
        margin:"100px auto"
    }}>

        <Box sx={{
            margin: "50px 0px"
        }}>
            <Typography color="primary" fontWeight={700} component="h4" variant='h6'>
                How it works
            </Typography>
            <Typography fontWeight={700} component="h1" variant='h5'>
                Four Easy Steps to Get your solution
            </Typography>
            <Typography fontWeight={400} color="gray" component="p" variant='subtitle1'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis aliquid voluptate quas deserunt.
            </Typography>
        </Box>

        <Grid mt={5} container spacing={2}>

            <Grid item md={6}>
                <Image src={worksImage} alt="why work us" />
            </Grid>
            <Grid item md={6}>
                <Box sx={{
                    display:"grid",
                    gridTemplateColumns:"1fr 1fr",
                    gap:"20px"
                }}>
                    {
                        howItWorksData.map((works) => (
                            <Card sx={{
                                padding:"12px"
                            }} key={works.title}>
                                <Image src={works.icon} alt={works.title} width={50} height={50} />
                                <Typography py={1} variant='subtitle2' color="item.body1" component="h4">{works.title}</Typography>
                                <Typography fontWeight={400} color="gray" component="p" variant='subtitle1'>
                                    {works.description}
                                </Typography>

                            </Card>
                        ))
                    }
                </Box>
            </Grid>


        </Grid>

        <Box  sx={{
            marginTop:"50px",
            background:"linear-gradient(90deg, rgba(85,139,203,1) 0%, rgba(85,139,203,1) 35%, rgba(14,111,219,1) 100%)",
            borderRadius:"2rem",
            padding:"4rem"
        }}>
            <Stack direction="row" justifyContent="space-between"  spacing={3}>
              <Card sx={{
                backgroundColor:"transparent",
                boxShadow:"none"
              }}>
                    <Typography color="#fff" fontWeight={700} component="h1" variant='h3'>
                      180+
                    </Typography>
                    <Typography color="#fff" fontWeight={400} component="p" variant='subtitle1'>
                      Expert Doctors
                    </Typography>
                
              </Card>
              <Card sx={{
                backgroundColor:"transparent",
                boxShadow:"none"
              }}>
                    <Typography color="#fff" fontWeight={700} component="h1" variant='h3'>
                      26+
                    </Typography>
                    <Typography color="#fff" fontWeight={400} component="p" variant='subtitle1'>
                      Expert Services
                    </Typography>
                
              </Card>
              <Card sx={{
                backgroundColor:"transparent",
                boxShadow:"none"
              }}>
                    <Typography color="#fff" fontWeight={700} component="h1" variant='h3'>
                      10k
                    </Typography>
                    <Typography color="#fff" fontWeight={400} component="p" variant='subtitle1'>
                      Happy patients
                    </Typography>
                
              </Card>
              <Card sx={{
                backgroundColor:"transparent",
                boxShadow:"none"
              }}>
                    <Typography color="#fff" fontWeight={700} component="h1" variant='h3'>
                      180+
                    </Typography>
                    <Typography color="#fff" fontWeight={400} component="p" variant='subtitle1'>
                      Best award Winners 
                    </Typography>
                
              </Card>
            </Stack>
        </Box>
    </Container>;
};

export default HowWorks;
