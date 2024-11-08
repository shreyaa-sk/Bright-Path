'use client';

import React, { useState, useEffect } from 'react';

// Helper function to format numbers in Indian numeric system
const formatIndianCurrency = (val: number): string => {
  return val.toLocaleString('en-IN', { maximumFractionDigits: 2 });
};

const LoanCalculator: React.FC = () => {
  // State for inputs and outputs
  const [amount, setAmount] = useState<number>(100000); // Default value
  const [periodYears, setPeriodYears] = useState<number>(1);
  const [income, setIncome] = useState<number>(0);
  const [deduction, setDeduction] = useState<number>(0);
  const [interest, setInterest] = useState<number>(10);
  
  const [monthlyEMI, setMonthlyEMI] = useState<number>(0);
  const [maturityValue, setMaturityValue] = useState<number>(0);
  const [maxAmount, setMaxAmount] = useState<number>(0);
  const [maxEMI, setMaxEMI] = useState<number>(0);

  useEffect(() => {
    calculateIt();
  }, [amount, periodYears, income, deduction, interest]);

  const calculateIt = () => {
    const A = amount;
    const Y = periodYears;
    
    let R = interest / 100 / 12;
    if (interest < 0.1) {
      R = 0.001 / 12;
      setInterest(0.1);
    } else if (interest > 20) {
      R = 0.2 / 12;
      setInterest(20);
    }
    
    const G = income;
    const D = deduction;

    let foir = 0;
    if (G < 100001) {
      foir = 0.6;
    } else if (G > 500000) {
      foir = 0.75;
    } else {
      foir = 0.7;
    }

    const P = Y * 12;
    let maxEMIValue = Math.max(0, (G * foir) - D);
    const maxMultiplierAmount = G * 72;
    const maxEMIAmount = (((1 + R) ** P - 1) * maxEMIValue) / (R * ((1 + R) ** P));
    const maxAmountValue = Math.min(maxMultiplierAmount, maxEMIAmount);

    let cappedMaxAmount = maxAmountValue;
    if (cappedMaxAmount > 75000000) {
      cappedMaxAmount = 75000000;
      maxEMIValue = (cappedMaxAmount * R * ((1 + R) ** P)) / (((1 + R) ** P) - 1);
    } else if (cappedMaxAmount === maxMultiplierAmount) {
      maxEMIValue = (cappedMaxAmount * R * ((1 + R) ** P)) / (((1 + R) ** P) - 1);
    }

    const calculatedMonthlyEMI = (A * R * ((1 + R) ** P)) / (((1 + R) ** P) - 1);

    setMonthlyEMI(calculatedMonthlyEMI);
    setMaturityValue(calculatedMonthlyEMI * P);
    setMaxAmount(cappedMaxAmount);
    setMaxEMI(maxEMIValue);
  };

// Calculate donut chart values
const donutPercentage = (amount / (monthlyEMI * periodYears * 12)) * 100;
const donutStrokeDasharray = `${donutPercentage} ${100 - donutPercentage}`;

  return (
    <div className='flex'>
        {/* Flex 1 */}
        <div className="flex-1 max-w-lg mx-auto bg-gray-200 p-6 rounded-lg shadow-lg mt-4">
      <h3 className="text-xl font-bold text-center mb-6">Loan Calculator</h3>

      <div className='flex'>
      <div className="mb-4 mx-2">
        <label className="block text-gray-700 font-semibold mb-2 mx-2">Gross Monthly Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4 mx-2">
        <label className="block text-gray-700 font-semibold mb-2 mx-2">Gross Monthly Deduction:</label>
        <input
          type="number"
          value={deduction}
          onChange={(e) => setDeduction(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      </div>

<div className='flex'>
<div className="mb-4 mx-2">
        <label className="block text-gray-700 font-semibold mb-2 mx-2">Loan Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4 mx-2">
        <label className="block text-gray-700 font-semibold mb-2 mx-2">Tenure (Years):</label>
        <input
          type="number"
          value={periodYears}
          onChange={(e) => setPeriodYears(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
</div>
      
      
      <div className="mb-4 mx-1">
        <label className="block text-gray-700 font-semibold mb-2">Rate of Interest (%):</label>
        <input
          type="number"
          step="0.1"
          value={interest}
          onChange={(e) => setInterest(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      {/* Output Fields */}
      <div className="mt-6">
        <p className="text-gray-800 font-semibold mb-2">Monthly EMI: <span className="text-blue-600">₹ {formatIndianCurrency(monthlyEMI)}</span></p>
        <p className="text-gray-800 font-semibold mb-2">Maturity Value: <span className="text-blue-600">₹ {formatIndianCurrency(maturityValue)}</span></p>
        <p className="text-gray-800 font-semibold mb-2">Maximum Eligible Loan Amount: <span className="text-blue-600">₹ {formatIndianCurrency(maxAmount)}</span></p>
        <p className="text-gray-800 font-semibold mb-2">Maximum Monthly EMI: <span className="text-blue-600">₹ {formatIndianCurrency(maxEMI)}</span></p>
      </div>
    </div>

        {/* Flex 2 */}
        <div className="flex-1 max-w-lg mx-auto bg-gray-200 rounded-lg shadow-lg mt-4 p-6 flex flex-col items-center">
            <svg width="250" height="250" viewBox="0 0 40 40" className="donut mt-16">
                <circle className="donut-hole" cx="20" cy="20" r="15" fill="#E5E7EB"></circle>
                <circle className="donut-ring" cx="20" cy="20" r="15" fill="transparent" stroke="#FFFFFF" strokeWidth="5"></circle>
                <circle
                className="donut-segment"
                cx="20"
                cy="20"
                r="15"
                fill="transparent"
                stroke="#e66b2d"
                strokeWidth="5"
                strokeDasharray={donutStrokeDasharray}
                strokeDashoffset="25"
                ></circle>
                <g className="donut-text">
                <text 
                    x="50%" 
                    y="50%" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    fontSize="2.5" 
                    fill="#000000" 
                    fontWeight="bold"
                >
                    TOTAL REPAYMENT
                </text>
                </g>
            </svg>
            <div className="mt-4 text-center">
                <span className="donut-value text-3xl font-bold text-[#E66B2D]">
                ₹ {formatIndianCurrency(maturityValue)}
                </span>
            </div>
            </div>

    </div>
  );
};

export default LoanCalculator;
