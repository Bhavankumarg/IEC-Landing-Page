import React from 'react'
import ResourceComponents from "../../components/ResourcesComponents"
import Seo from '@/components/Seo/Seo';
const seoField = {
  title: "IEC adhering to ethical principles to ensure human rights",
  description: "Find the Catalyst Foundation Institutional Ethics Committee’s guiding principles, adhering to ethical principles to ensure human safety.",
  path: "resources",
  metaImage: "/what-we-do.png",
  pageType: "WebSite",
};

const page = () => {
  return (
    <div>
      <Seo {...seoField} />
        <ResourceComponents/>
    </div>
  )
}

export default page