import React from 'react'
import Faqs from "../../components/FaqsComponents"

export const metadata = {
  title: "FAQs about IEC protecting human research participants",
  description: "Find the answers to the FAQs about how the IEC is ensuring ethics in social and behavioural research, it’s application and review process and exclusions.Find the answers to the FAQs about how the IEC is ensuring ethics in social and behavioural research, it’s application and review process and exclusions.",
  alternates: {
    canonical: "",
  },
  openGraph: {
    title: "FAQs about IEC protecting human research participants",
    description: "Find the answers to the FAQs about how the IEC is ensuring ethics in social and behavioural research, it’s application and review process and exclusions.",
    url: "",
    images: "/what-we-do.png",
  },
};

const page = () => {
  return (
    <div>
        <Faqs/>
    </div>
  )
}

export default page