import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import { Button, Typography, Container } from "@mui/material";

const bannerBg = {
  background: `url(${bg})`,
};
const verticalCenter = {
  display: "flex",
  alignItem: "center",
  height: 400,
//   border: "5px solid yellow",
};

const Banner = () => {
  return (
    <Container style={{ bannerBg }} sx={{ flexGrow: 1 , mt:5}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{ ...verticalCenter,textAlign: "left" }}>
          <Box>
            <Typography variant="h3">
              Your new Smaile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{my:3, fontSize: 13, fontWeight: 300, color: "gray" }}
            >
              kjdhgkdjfhgfdhg fgldjhgkj dljgdkgj dlghdk gjhlg ljgjlgblk dgblbij{" "}
              <br />
            </Typography>
            <Button variant="contained" style={{ backGroundColor: "#5CE7ED" }}>
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "400px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
