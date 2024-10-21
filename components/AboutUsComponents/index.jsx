import React from 'react'
import Banner from './Banner'
import Header from '../Header/Header'
import OurValues from '../HomeComponents/OurValues'
import FlowChart from '../HomeComponents/Flowchart'
import MeetTheCommittee from './MeetTheCommittee'

const index = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        {/* <OurValues/>
        <FlowChart/> */}
        <MeetTheCommittee/>
    </div>
  )
}

export default index