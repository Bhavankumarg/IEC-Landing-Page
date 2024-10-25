import React from 'react'
import Banner from './Banner'
import Header from '../Header/Header'
import WhatWeDo from './WhatWeDo'
import KeyElements from './KeyElements'
import ReachOut from './ReachOut'

const index = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <WhatWeDo/>
        <ReachOut />
        <KeyElements/>
    </div>
  )
}

export default index