import React from 'react'
import Banner from './Banner'
import IECGuidelines from './IecGuideline'
import Header from '../Header/Header'
import CardSection from './card'
const index = () => {
  return (
    <div>
      <Header/>
        <Banner/>
        <IECGuidelines/>
        {/* <CardSection/> */}
        
    </div>
  )
}

export default index