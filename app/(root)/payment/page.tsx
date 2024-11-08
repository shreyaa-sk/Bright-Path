'use client'

import React from 'react';
import HeaderBox from '@/components/HeaderBox';
import { loadStripe } from '@stripe/stripe-js';

const apiURL = 'http://localhost:3000/api/stripe'; // Make sure this matches the backend route

const page = () => {
  // Function to handle payment
  const makePayment = async () => {
    try {
      // Load Stripe with your public key
      const stripe = await loadStripe('pk_test_51QIxzPJaBpFJDuoGRTam2TjAOjZCZuVfDpbBFF3bkOvKnjOtP5xxIxVECKaOj50hEApz9t5ajdGSXbPY6t3G6pLn0056BTOqBE');

      // Payment amount to be hardcoded as Rs. 45,500 for this example
      const body = {
        amount: 45500, // This is in paise: Rs. 45,500 = 4550000 paise
      };

      // Set up the request headers
      const headers = {
        'Content-Type': 'application/json',
      };

      // Make the POST request to your API to create a checkout session
      const response = await fetch(`${apiURL}/create-checkout-session`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body),
      });

      // Handle the response and redirect to Stripe checkout
      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const session = await response.json();

      if (!session.id) {
        throw new Error('No session ID returned from Stripe API');
      }

      // Redirect to Stripe checkout
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      if (result?.error) {
        console.error('Error during Stripe Checkout redirect:', result.error.message);
      }
    } catch (error) {
      console.error('Payment request failed:', error);
    }
  };

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox title="Credit Card Payment Due" subtext="Clear your bills before the due date." />
      </div>

      {/* Due Payment 1 */}
      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">Plaid Checking</h2>
            <p className="text-14 text-orange-25">Plaid Gold Standard 0% Interest Checking</p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● 0000
            </p>
          </div>

          <div className="transactions-account-balance">
            <p className="text-14">Due Amount</p>
            <p className="text-24 text-center font-bold">Rs. 45,500</p>
          </div>
        </div>
      </div>

      {/* Pay Now Button */}
      <div className="transactions-account-balance">
        <button onClick={makePayment} className="text-24 text-[#000000] text-center font-bold hover:underline">
          Pay Now ↑↑↑
        </button>
      </div>

      {/* Due Payment 2 */}
      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">Plaid Saving</h2>
            <p className="text-14 text-orange-25">Plaid Silver Standard Saving</p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● 1111
            </p>
          </div>

          <div className="transactions-account-balance">
            <p className="text-14">Due Amount</p>
            <p className="text-24 text-center font-bold">Rs. 30,000</p>
          </div>
        </div>

        <div className="transactions-account-balance">
          <button onClick={makePayment} className="text-24 text-[#000000] text-center font-bold hover:underline">
            Pay Now ↑↑↑
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
