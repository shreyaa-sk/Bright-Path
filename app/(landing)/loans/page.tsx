import LandingFooter from '@/components/LandingFooter'
import LandingNav from '@/components/LandingNav'
import LoansPage from '@/components/Loans/LoansPage'
import React from 'react'

const page = () => {
  return (
    <>

    <LandingNav />

    <LoansPage />

    <LandingFooter />
    
    </>
  )
}

export default page