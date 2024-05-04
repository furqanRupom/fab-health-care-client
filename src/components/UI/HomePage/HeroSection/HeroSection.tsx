import { Box, Button, Container, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import assets from "@/assets"

interface IHeroSectionProps {
}

const HeroSection: React.FunctionComponent<IHeroSectionProps> = (props) => {
    return <Container  sx={{
        display: "flex",
        direction: "row",
        my: "120px",

    }}>

        <Box sx={{
            flex: 1,
            position: "relative"
        }}>
            <Box sx={{
                position: "absolute",
                width: "700px",
                top: "-90px",
                left: "-120px"
            }}>

                <Image src={assets.svgs.grid} alt="Hero image" />
            </Box>
            <Box>
                <Typography variant="h3" component="h1" fontWeight={600}>Healtheir Hearts</Typography>
                <Typography variant="h3" component="h1" fontWeight={600} >Come From</Typography>
                <Typography color="primary.main" variant="h3" component="h1" fontWeight={600}>Preventive Care</Typography>
                <Typography py={2}  variant='subtitle2'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quas ipsa repellendus, modi debitis distinctio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, quis?
                </Typography>

                <Button>Make Appointment</Button>
                <Button sx={{marginLeft:"6px"}} variant="outlined">Contact US</Button>

            </Box>
        </Box>
        <Box sx={{
            flex:1,
            p:1,
            display:'flex',
            position:'relative',
            justifyContent:'center',
            mt:0
        }}>
            <Box sx={{
                position:"absolute",
                left:"200px",
                top:"-30px"

            }}>

                <Image src={assets.svgs.arrow} width={100} height={100} alt='hero image' />
            </Box>
                <Box sx={{
                    display:"flex",
                    gap:2,

                }}>

                    <Box mt={4}>
                        <Image src={assets.images.doctor1} width={240} height={380} alt="doctor 1" />
                    </Box>
                <Box>
                    <Image src={assets.images.doctor2} width={240} height={350} alt="doctor 2" />
                </Box>

                </Box>

                <Box sx={{
                    position:"absolute",
                    bottom:"0"
                }}>
                    <Image src={assets.images.doctor3} width={200} height={300} alt="doctor 3"/>
                </Box>
            <Box sx={{
                position: "absolute",
                bottom: "-50px",
                right:"0",
                zIndex:"-1"
            }}>
                <Image src={assets.images.stethoscope} width={180} height={240} alt="doctor 3" />
            </Box>
        </Box>

    </Container>;
};

export default HeroSection;
