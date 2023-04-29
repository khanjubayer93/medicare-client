import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Components/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_key);
console.log(stripePromise);

const Payment = () => {
    const paymentData = useLoaderData();
    const { serviceName, appointmentDate, price, appointmentTime } = paymentData;
    const navigation = useNavigation();
    if (navigation.state === "loading"){
        return <Loading></Loading>
    }
    // console.log(data);
    return (
        <div className='my-5 mx-5'>
            <h2 className="text-2xl font-bold text-slate">Payment</h2>
            <div>
                <p className='text-xl'>Please pay <span className='font-bold text-red-500'>${price}</span> for <span className='font-bold'>{serviceName}</span> on <span className='font-bold'>{appointmentDate}</span><span> at {appointmentTime}</span></p>
            </div>
            <div className=''>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        paymentData={paymentData}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;