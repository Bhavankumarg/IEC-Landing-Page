import React from 'react'
import Banner from './Banner'
import WhoWeAre from './WhoWeAre'
import WhyDoWe from './WhyDoWe'
import WhatWeDo from './WhatWeDo'
import Review from './Review'
import Scope from './Scope'
import OurValues from '../AboutUsComponents/OurValues'
import Flowchart from "../AboutUsComponents/Flowchart"

const index = () => {
  return (
    <div>
        <Banner/>
        {/* <WhoWeAre/>
        <WhyDoWe/> */}
        <OurValues/>
        <Flowchart/>
        <WhatWeDo/>
        <Review/>
        <Scope/>
    </div>
  )
}

export default index