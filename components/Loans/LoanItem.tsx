import React, { useState } from 'react';
import LoanSection from './LoansPage'; // Import the LoanSection component

type LoanType = 'personal' | 'home' | 'gold' | 'education';

interface LoanItemProps {
  title: string;
  description: string;
  imageUrl: string;
  loanType: LoanType;
}

const LoanItem: React.FC<LoanItemProps> = ({ loanType, title, description, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-4 bg-white rounded-lg shadow-lg overflow-hidden">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100 transition"
        onClick={toggleDetails}
      >
        <img src={imageUrl} alt={title} className='w-32 h-32 rounded-lg' />
        <div className="flex-1 mx-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
        <button className="text-blue-600 font-bold">{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && (
        <div className="p-4 border-t border-gray-200">
        </div>
      )}
    </div>
  );
};

export default LoanItem;
