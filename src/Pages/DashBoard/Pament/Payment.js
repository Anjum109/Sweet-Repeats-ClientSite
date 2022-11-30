import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK)
// console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    console.log('bookingd', booking)
    const { title, price } = booking;
    return (
        <div>
            <h3 className='text-3xl m-5 bg-red-800 p-5 text-center mt-16 text-white'>Payment for {title}</h3>
            <p className="text-4xl  m-6 text-center">Please pay <strong>{price}$</strong></p>

            <div className='w-96 my-12 mx-12'>
                <Elements
                    stripe={stripePromise}
                >
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;