import React from 'react'
import Banner from './Banner'
import Header from '../Header/Header'
import OurValues from './OurValues'
import FlowChart from './Flowchart'
import MeetTheCommittee from './MeetTheCommittee'

const index = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <OurValues/>
        <FlowChart/>
        <MeetTheCommittee/>
    </div>
  )
}

export default index