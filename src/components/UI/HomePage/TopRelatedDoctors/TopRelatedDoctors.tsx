import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import * as React from 'react';
import AddLocationIcon from '@mui/icons-material/AddLocation';

interface ITopRelatedDoctorsProps {
}

const TopRelatedDoctors: React.FunctionComponent<ITopRelatedDoctorsProps> = async (props) => {
  const response = await fetch("http://localhost:5000/api/v1/doctor?limit=3&page=1");
  const { data: doctors } = await response.json();

  return <Box sx={{
    my: 30,
    py: 30,
    backgroundColor: "rgba(20,20,20,0.1)",
    clipPath: "polygon(0 0,100% 25%,100% 100%,0 75%)"
  }}>
    <Typography textAlign="center" variant='h4' component="h1">Our Top Rated Doctors</Typography>
    <Typography textAlign="center" variant='subtitle1' component="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est.</Typography>

    <Container sx={{
      margin: "40px auto"
    }}>
      <Grid container spacing={12}>
        {
          doctors.map((doctor: any) => (
            <Grid container key={doctor.id} md={4}>
              <Card   sx={{
                maxWidth:"400px",
                mt:15
               
                }} >
                <Box>
                  <Image src={doctor.profilePhoto} alt="doctor profile photo" width={500} height={500} />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {doctor.qualification},{doctor.designation}
                  </Typography>
                  <Typography sx={{
                    py: 2
                  }} variant="body2" color="text.secondary">
                    <AddLocationIcon />
                    {doctor.address}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={
                    {
                      justifyContent: "space-between",
                      px: 1,
                      paddingBottom: "10px"
                    }
                  }
                >
                  <Button
                    size="small">Book Now</Button>
                  <Button variant='outlined' size="small">View Profile</Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        }

        <Box sx={{
          margin:"0 auto"
        }}>
          <Button  sx={{
            marginTop:"30px"
          }}
            variant='outlined'
            size="small">Book Now</Button>
        </Box>

      </Grid>
    </Container>

  </Box>;
};

export default TopRelatedDoctors;
