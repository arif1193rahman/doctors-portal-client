import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';


const stripePromise = loadStripe('pk_test_51JxmRlGHJtTmXcd4ehcnqD6yyxg92EnJmzLhhyxaEZ4lnKobzrqeAfvtETKQcehnJHWNXFmh6sUL3sE5qQSGCrRs00s2RykFQj')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://boiling-sands-16373.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);
    return (
        <div>
            <h2>Please Pay for: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;


// 1. Install stripe and stripe-react
// 2. set publishable key
// 3. make Elements
// 4. Check from
// 5. Create payment method
// 6. server: create payment Intent api
// 7. Load client secret
// 8. ConfirmCard payment
// 9. handle user error
