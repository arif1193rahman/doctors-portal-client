import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("https://boiling-sands-16373.herokuapp.com/doctors")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div>
      Our doctors {doctors.length}
      <Container>
        <Grid container spacing={3}>
          {doctors.map(doctor =>
           <Doctor
           key={doctor._id}
           doctor={doctor}
           ></Doctor>
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Doctors;
