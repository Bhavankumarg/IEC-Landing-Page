import React from 'react'
import Faqs from "../../components/FaqsComponents"
import Seo from '@/components/Seo/Seo';
const seoField = {
  title: "FAQs about IEC protecting human research participants",
  description: "Find the answers to the FAQs about how the IEC is ensuring ethics in social and behavioural research, it’s application and review process and exclusions.Find the answers to the FAQs about how the IEC is ensuring ethics in social and behavioural research, it’s application and review process and exclusions.",
  path: "",
  metaImage: "/what-we-do.png",
  pageType: "WebSite",
};


const page = () => {
  return (
    <div>
      <Seo {...seoField}/>
        <Faqs/>
    </div>
  )
}

export default page