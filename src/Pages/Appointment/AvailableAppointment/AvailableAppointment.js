import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Alert, Container, Typography } from "@mui/material";
import Booking from "../Booking/Booking";

const bookings = [
  {
    id: 1,
    name: "Teeth Orthodonics",
    time: "08.00 AM - 09.00 AM",
    space: 10,
    price:10
  },
  {
    id: 2,
    name: "Cosmetic Dentistry",
    time: "09.00 AM - 10.00 AM",
    space: 6,
    price:18
  },
  {
    id: 3,
    name: "teeth Cleaning",
    time: "10.00 AM - 11.00 AM",
    space: 8,
    price:13
  },
];

const AvailableAppointment = ({ date }) => {
  const [bookingSuccess, setBookingSuccess] = useState(false)
  return (
    <Container>
      <Typography variant="h4" sx={{ color: "info.main",mb:3}}>
        Appoint Available on {date.toDateString()}
      </Typography>
      {bookingSuccess && 
              <Alert severity="success">
                Appointment book successfully
              </Alert>
            }

      <Grid container spacing={2}>
        {bookings.map((booking) => (
          <Booking
           key={booking.id} 
           booking={booking} 
           date={date}
           setBookingSuccess={setBookingSuccess}
           ></Booking>
        ))}
      </Grid>
    </Container>
  );
};

export default AvailableAppointment;
