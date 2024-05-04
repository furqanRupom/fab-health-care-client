import assets from '@/assets';
import { Box, Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import ChooseUs from "@/assets/choose-us.png"
import Image from 'next/image';

interface IWhyUsProps {
}

const WhyUs: React.FunctionComponent<IWhyUsProps> = (props) => {
    const doctorServices = [
        {
            image: assets.svgs.award,
            title: "General Checkup",
            description: "Get a comprehensive checkup from experienced doctors to monitor your overall health."
        },
        {
            image: assets.svgs.dna,
            title: "Pediatric Care",
            description: "Specialized medical care for infants, children, and adolescents provided by pediatricians."
        },
        {
            image: assets.svgs.kidney,
            title: "Dental Care",
            description: "Maintain your oral health with a range of dental services including cleanings, fillings, and extractions."
        },
        {
            image: assets.svgs.calender,
            title: "Orthopedic Surgery",
            description: "Consult with orthopedic surgeons for treatment of musculoskeletal injuries and conditions."
        },
        {
            image: assets.svgs.award,
            title: "Cardiology Services",
            description: "Receive advanced cardiac care including diagnosis, treatment, and management of heart conditions."
        },
        {
            image: assets.svgs.dna,
            title: "Mental Health Counseling",
            description: "Access counseling and therapy services to address mental health issues and improve well-being."
        }
    ];

    return <Container>
        <Box>
            <Box sx={{ textAlign: "center" }}>
                <Typography color="primary" fontWeight={700} component="h4" variant='h6'>
                    Why US
                </Typography>
                <Typography fontWeight={700} component="h1" variant='h5'>
                    Why Choose US
                </Typography>

            </Box>

            <Grid mt={5} container spacing={2}>
                <Grid item md={6}>
                    <Box sx={{
                        display: "flex",
                        gap: "15px",
                        backgroundColor: "rgba(245,245,245,1)",
                        alignItems: "center",
                        padding: "15px",
                        borderRadius: "10px 10px 100px 10px",
                        margin: "10px 0px"
                    }}>
                        <Box sx={{
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            padding: "10px"
                        }}>
                            <Image width={50} src={doctorServices[0].image} alt="award" />
                        </Box>
                        <Box>
                            <Typography fontWeight={700} component="h4" variant='h5'>
                                {doctorServices[0].title}
                            </Typography>
                            <Typography fontWeight={400} color="primary.body2" component="p" variant='subtitle1'>
                                {doctorServices[0].description}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        gap: "15px",
                        backgroundColor: "rgba(245,245,245,1)",
                        alignItems: "center",
                        padding: "15px",
                        borderRadius: "10px 10px 100px 10px",
                        margin: "10px 0px"
                    }}>
                        <Box sx={{
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            padding: "10px"
                        }}>
                            <Image width={50} src={doctorServices[1].image} alt="award" />
                        </Box>
                        <Box>
                            <Typography fontWeight={700} component="h4" variant='h5'>
                                {doctorServices[1].title}
                            </Typography>
                            <Typography fontWeight={400} color="primary.body2" component="p" variant='subtitle1'>
                                {doctorServices[1].description}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        gap: "15px",
                        backgroundColor: "rgba(245,245,245,1)",
                        alignItems: "center",
                        padding: "15px",
                        borderRadius: "10px 10px 100px 10px",
                        margin: "10px 0px"
                    }}>
                        <Box sx={{
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            padding: "10px"
                        }}>
                            <Image width={50} src={doctorServices[2].image} alt="award" />
                        </Box>
                        <Box>
                            <Typography fontWeight={700} component="h4" variant='h5'>
                                {doctorServices[2].title}
                            </Typography>
                            <Typography fontWeight={400} color="primary.body2" component="p" variant='subtitle1'>
                                {doctorServices[2].description}
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        gap: "15px",
                        backgroundColor: "rgba(245,245,245,1)",
                        alignItems: "center",
                        padding: "15px",
                        borderRadius: "10px 10px 100px 10px",
                        margin: "10px 0px"
                    }}>
                        <Box sx={{
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            padding: "10px"
                        }}>
                            <Image width={50} src={doctorServices[3].image} alt="award" />
                        </Box>
                        <Box>
                            <Typography fontWeight={700} component="h4" variant='h5'>
                                {doctorServices[3].title}
                            </Typography>
                            <Typography fontWeight={400} color="primary.body2" component="p" variant='subtitle1'>
                                {doctorServices[3].description}
                            </Typography>
                        </Box>
                    </Box>
                    
             
                </Grid>
                <Grid item md={6}>
                    <Image src={ChooseUs} width={400} height={400} alt="why choose us image" />
                </Grid>
            </Grid>


        </Box>

    </Container>;
};

export default WhyUs;
