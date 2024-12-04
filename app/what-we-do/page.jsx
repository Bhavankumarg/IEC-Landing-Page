import React from 'react'
import WhatWeDoComponents from "../../components/WhatWeDoComponents"
import Seo from "@/components/Seo/Seo";
const seoField = {
  title: "The IEC Review Process to Ensure Adherance and Compliance",
  description: "Learn more about the review process followed by the Institutional Ethics Committee to ensure to adherence and compliance to social research protocols.",
  path: "",
  metaImage: "/what-we-do.png",
  pageType: "WebSite",
};
const page = () => {
  return (
    <div>
      <Seo {...seoField}/>
        <WhatWeDoComponents/>
    </div>
  )
}

export default page