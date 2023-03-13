import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ paymentData }) => {
    const { price, email, patient, _id } = paymentData;
    const stripe = useStripe();
    const elements = useElements();
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState('');
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        fetch("https://medicare-server-ivory.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message)
        }
        else {
            setCardError('')
        }
        setSuccess('')
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email

                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === "succeeded") {

            const payment = {
                price,
                email,
                transectionId: paymentIntent.id,
                bookingId: _id,


            }


            fetch('https://medicare-server-ivory.vercel.app/payment', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('medicareToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setSuccess("Cograst for payment");
                    setTransectionId(paymentIntent.id);
                    navigate('/dashboard')
                    toast.success('Congratulation for payment successfully')
                })
        }
        setProcessing(false)
        console.log(paymentIntent);
    }

    return (
        <>
            <form
                className='text-end w-2/5 border-2 border-green-400 p-5 rounded-md mt-10'
                onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='bg-green-500 font-bold py-1 px-3 text-white rounded-md mt-5'
                    type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay now
                </button>
                <p className='text-red-500 text-sm'>{cardError}</p>
            </form>
            {
                success && <div>
                    <p className="text-green-500 font-bold">{success}</p>
                    <p>Your transectionId: <span className='font-bold text-slate-500'>{transectionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;