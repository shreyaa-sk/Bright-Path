'use client';

import React, { useState } from 'react';
import CreditCard from '@/components/CreditCard';
import HeaderBox from '@/components/HeaderBox';
import ContactForm from '@/components/features/contact-form';

// Hardcoded card options
const cardOptions = [
  {
    id: '1',
    name: 'Travel Rewards Card',
    benefits: 'Earn unlimited 1.5 points for every $1 you spend.',
    annualFee: '$0',
    interestRate: '15.24% - 25.24% Variable APR',
    colorScheme: 'bg-blue-500 text-white',
    mask: '1234',
  },
  {
    id: '2',
    name: 'Cash Rewards Card',
    benefits: 'Earn 3% cash back in the category of your choice.',
    annualFee: '$0',
    interestRate: '13.99% - 23.99% Variable APR',
    colorScheme: 'bg-green-500 text-white',
    mask: '5678',
  },
  {
    id: '3',
    name: 'Premium Rewards Card',
    benefits: 'Earn 2 points for every $1 spent on travel and dining.',
    annualFee: '$95',
    interestRate: '16.99% - 24.99% Variable APR',
    colorScheme: 'bg-purple-500 text-white',
    mask: '9876',
  },
];

const CreditCardPage = () => {
  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox
          title="Apply for a New Credit Card Today!"
          subtext="Choose from a variety of options that suit your needs."
        />

        <div className="space-y-4">
          <h2 className="header-2">Available Cards</h2>
          <div className="flex flex-wrap gap-6">
            {cardOptions.map((card) => (
              <CreditCard
                key={card.id}
                card={card}
                userName="Guest User"
              />
            ))}
          </div>
        </div>

        <ContactForm/>
      </div>
    </section>
  );
};

export default CreditCardPage;
