import HeaderBox from '@/components/HeaderBox'
import LoansPage from '@/components/Loans/LoansPage'
import React from 'react'

const page = () => {
  return (
    <>
<section>
  <div className='my-banks'>
 
    <HeaderBox 
      title="Loan EMI Calculators"
      subtext="Effortlessly manage your banking activites."
      />
    <LoansPage />
    </div>
    </section>
    
    </>
  )
}

export default page