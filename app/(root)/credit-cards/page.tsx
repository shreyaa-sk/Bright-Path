'use client';

import React, { useState } from 'react';
import CreditCard from '@/components/CreditCard';
import HeaderBox from '@/components/HeaderBox';

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

const ApplyForm = () => {
  const [selectedCard, setSelectedCard] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    income: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', { selectedCard, ...formData });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 p-6 border rounded-md">
      <h3 className="header-3 mb-4">Apply for a Credit Card</h3>
      <div className="mb-4">
        <label htmlFor="card" className="block text-sm font-medium text-gray-700">Select Card</label>
        <select
          id="card"
          name="card"
          value={selectedCard}
          onChange={(e) => setSelectedCard(e.target.value)}
          className="block w-full mt-1 border-gray-300 rounded-md"
          required
        >
          <option value="">Choose a card...</option>
          {cardOptions.map((card) => (
            <option key={card.id} value={card.name}>{card.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="block w-full mt-1 border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="block w-full mt-1 border-gray-300 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="block w-full mt-1 border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="income" className="block text-sm font-medium text-gray-700">Annual Income</label>
        <input
          type="number"
          id="income"
          name="income"
          value={formData.income}
          onChange={handleInputChange}
          className="block w-full mt-1 border-gray-300 rounded-md"
          required
        />
      </div>
      <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
        Apply Now
      </button>
    </form>
  );
};

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

        <ApplyForm />
      </div>
    </section>
  );
};

export default CreditCardPage;
