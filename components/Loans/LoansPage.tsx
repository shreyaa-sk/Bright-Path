'use client';

import React, { useState } from 'react';
import LoanCalculator from './HomeLoanCalculator';
import GoldLoanCalculator from './GoldLoanCalculator';

type LoanType = 'personal' | 'home' | 'gold' | 'education';
type PaginationTab = 'features' | 'eligibility' | 'interestRates' | 'calculator';

interface LoanSectionProps {
  loanType: LoanType;
  title: string;
  description: string;
  features: React.ReactNode;
  eligibility: React.ReactNode;
  interestRates: React.ReactNode;
  calculator: React.ReactNode;
  imageUrl: string; // Added imageUrl prop for loan image
}

const LoanSection: React.FC<LoanSectionProps> = ({
  loanType,
  title,
  description,
  features,
  eligibility,
  interestRates,
  calculator,
  imageUrl,
}) => {
  const [activeTab, setActiveTab] = useState<PaginationTab>('features');
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`loan-section my-8 p-6 bg-white shadow-lg rounded-lg transition-all duration-300 ${isOpen ? 'shadow-xl' : 'shadow-lg'}`}>
      <div className="flex items-center justify-between cursor-pointer" onClick={toggleDetails}>
        <img src={imageUrl} alt={title} className="w-32 h-32 rounded-lg" />
        <div className="flex-1 mx-4">
          <h2 className="text-2xl font-semibold text-[#E66B2D] mb-2">{title}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
        <button className="text-blue-600 font-bold">{isOpen ? '-' : '+'}</button>
      </div>

      {isOpen && (
        <>
          {/* Pagination Tabs */}
          <div className="pagination-tabs flex space-x-4 mb-4 border-b-2 border-gray-200 pb-2">
            {['features', 'eligibility', 'interestRates', 'calculator'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium text-sm ${
                  activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'
                }`}
                onClick={() => setActiveTab(tab as PaginationTab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace(/([A-Z])/g, ' $1')}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === 'features' && (
              <div className="text-gray-700">
                <h3 className="text-lg font-medium mb-2">Features</h3>
                {features}
              </div>
            )}
            {activeTab === 'eligibility' && (
              <div className="text-gray-700">
                <h3 className="text-lg font-medium mb-2">Eligibility</h3>
                {eligibility}
              </div>
            )}
            {activeTab === 'interestRates' && (
              <div className="text-gray-700">
                <h3 className="text-lg font-medium mb-2">Interest Rates and Charges</h3>
                {interestRates}
              </div>
            )}
            {activeTab === 'calculator' && (
              <div className="text-gray-700">
                <h3 className="text-lg font-medium mb-2">Loan Parameters Calculator</h3>
                {calculator}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

const LoansPage: React.FC = () => {
  return (
    <main className="loans-page container mx-auto px-4 py-8">
      <LoanSection
        loanType="personal"
        title="Personal Loan"
        description="Get access to funds for personal needs with our flexible personal loan options."
        features={<p>Details about personal loan features...</p>}
        eligibility={<p>Eligibility criteria for personal loans...</p>}
        interestRates={<p>Interest rates for personal loans...</p>}
        calculator={<p>Loan calculator for personal loans...</p>}
        imageUrl="/icons/loans/icons8-car-sale-96.png"
      />
      <LoanSection
        loanType="home"
        title="Home Loan"
        description="Make your dream home a reality with our customized home loan plans."
        features={
            <ul className="list-disc pl-5">
                <li>Maximum repayment tenure up to 360 months</li>
                <li>Holiday/Moratorium period up to 36 months</li>
                <li>EMI starts @ Rs.755/- per Lakh</li>
                <li>Income of co-applicant (close relative) considered for eligibility</li>
                <li>Smart Home Loan (OD facility) for entire limit/outstanding balance @ ROI of Home Loan</li>
                <li>For purchase of plot (house to be constructed within 5 years)</li>
                <li>Loan facility for addition/extension/renovation of existing property</li>
                <li>Loan facility for furnishing of house @ ROI Home Loan</li>
                <li>Takeover/Balance Transfer facility with additional loan amount</li>
                <li>Instant Top Up Loan Available</li>
                <li>Loan facility for purchasing Solar PV @ ROI Home Loan</li>
                <li>Insurance premium considered under Project Cost (treated as Home Loan component)</li>
                <li>Step up/Step Down EMI facility</li>
            </ul>
        }
        eligibility={
            <ul className="list-disc pl-5">
            <li>Resident Indian/NRI/PIO are eligible</li>
            <li>Individuals: Salaried/Self-employed/Professionals</li>
            <li>Non-individuals: Group/Association of Individuals, HUF, Corporates</li>
            <li>Trust is not eligible under the scheme</li>
            <li>Age: Minimum 18 years to maximum age 70 years at the time of final repayment</li>
            <li><strong>Documents</strong></li>
            <ul className="list-disc pl-5">
              <li><strong>For Individuals:</strong></li>
              <ul className="list-disc pl-5">
                <li>Proof of identity (any one): PAN/Passport/Driver Licence/Voter ID</li>
                <li>Proof of Address (any one): Passport/Driver Licence/Aadhar Card/ Latest Electricity Bill/Latest Telephone Bill/Latest Piped gas bill</li>
                <li>Proof of Income (any one):</li>
                <ul className="list-disc pl-5">
                  <li>For salaried: Latest 6 Month Salary/Pay Slip and One year ITR/Form16</li>
                  <li>For Self-employed: Last 3 years ITR with Computation of Income/Profit & Loss Account/Balance Sheet/Capital Account Statement</li>
                </ul>
              </ul>
              <li><strong>For Other than Individuals:</strong></li>
              <ul className="list-disc pl-5">
                <li>KYC of Partners/Directors</li>
                <li>PAN Card copy of Company/Firm</li>
                <li>Regd. Partnership Deed/MOA/AOA</li>
                <li>Certificate of incorporation as applicable</li>
                <li>Account statement for last 12 months</li>
                <li>Firm’s Audited Financials for last 3 years</li>
              </ul>
            </ul>
          </ul>
        }
        interestRates={
            <ul className="list-disc pl-5">
            <li><strong>Rate of Interest (ROI)</strong></li>
            <ul className="list-disc pl-5">
              <li>Starting from 8.35%</li>
              <li>ROI is linked with CIBIL Personal Score (in case of individuals)</li>
              <li>ROI is calculated on daily reducing balance</li>
            </ul>
            <li><strong>Charges</strong></li>
            <ul className="list-disc pl-5">
              <li>PPC For Individuals: One time @0.25% of Loan amount: Min. Rs. 1500/- to Max. Rs. 20000/-</li>
              <li>PPC For Other than individuals: One time @0.50% of Loan amount: Min. Rs. 3000/- to Max. Rs. 40000/-</li>
            </ul>
          </ul>
        }
        calculator={<LoanCalculator/>}
        imageUrl="/icons/loans/icons8-mortgage-96.png" // Example image path
      />
      <LoanSection
        loanType="gold"
        title="Gold Loan"
        description="The most convenient way to fulfil all your credit needs!"
        features={
            <ul className="list-disc pl-5">
                <li>Loan available up to 85% of Gold value</li>
                <li>Nominal processing charge</li>
                <li>Express credit delivery</li>
                <li>Easy repayment terms</li>
                <li>Overdraft facility available</li>
                <li>No pre-closure charges</li>
                <li>Attractive rate of interest</li>
                <li>Special concession in ROI for hallmarked jewellery*</li>
                <li>TAT - 25 Minutes</li>
            </ul>
        }
        eligibility={
            <ul className="list-disc pl-5">
            <li>Any individual who is the lawful owner of gold jewellery, ornaments, or coins.</li>
            <li><strong>QUANTUM OF FINANCE:</strong></li>
            <ul className="list-disc pl-5">
                <li>KYC documents (identity proof and address proof)</li>
          </ul>
            For Agricultural, MSME, Retail, and other personal needs: Maximum Rs. 50 Lakh
            <li><strong>Before applying you must have:</strong>
              <ul className="list-disc pl-5">
                <li>KYC documents (identity proof and address proof)</li>
                <li>Gold jewellery/coin that can be pledged</li>
                <li>Land holding particulars if the purpose is agriculture and loan amount is greater than Rs. 2.00 Lakh</li>
              </ul>
            </li>
          </ul>
        }
        interestRates={
          <ul className="list-disc pl-5">
            <li>Interest rates vary based on the loan amount and tenure.</li>
            {/* Add other interest rates here */}
          </ul>
        }
        calculator={<GoldLoanCalculator/>}
        imageUrl="/icons/loans/icons8-loan-96.png" // Example image path
      />
      <LoanSection
        loanType="education"
        title="Education Loan"
        description="Invest in education with our student-friendly education loan packages."
        features={
          <ul className="list-disc pl-5">
            <li>Flexible repayment options</li>
            {/* Add other features here */}
          </ul>
        }
        eligibility={
          <ul className="list-disc pl-5">
            <li>Must be enrolled in an accredited institution</li>
            {/* Add other eligibility criteria here */}
          </ul>
        }
        interestRates={<p>Interest rates for education loans...</p>}
        calculator={<p>Loan calculator for education loans...</p>}
        imageUrl="/icons/loans/icons8-tuition-fees-96.png" // Example image path
      />
    </main>
  );
};

export default LoansPage;
