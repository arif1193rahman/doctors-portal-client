import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import Typography from "@mui/material/Typography";

const services = [
  {
    name: "fluorride Tratment 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laudantium laboriosam modi nemo sint et, ipsum dignissimos. Quidem, minus provident.",
    img:fluoride
    },
  {
    name: "cavity Tratment 12",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laudantium laboriosam modi nemo sint et, ipsum dignissimos. Quidem, minus provident.",
    img:cavity
    },
  {
    name: "whitening Tratment 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. In laudantium laboriosam modi nemo sint et, ipsum dignissimos. Quidem, minus provident.",
    img:whitening
    }
];

const Services = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{ fontWeight: 500, color: 'success.main', m: 2  }} variant="h6" component="div">
            OUR SERVICES
            </Typography>
      <Typography sx={{ fontWeight: 600, m: 5  }} variant="h6" component="div">
            Services we provide
            </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {
          services.map(service=><Service
          service={service}
          ></Service>)
          }
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
