import React from 'react'
import AboutUsComponents from "../../components/AboutUsComponents"
export const metadata = {
  title: "About Us: Catalyst Foundation Institutional Ethics Committee Team",
  description: "Meet the committee’s passionate members working to ensure the practice of ethical research methods in the social sector.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us: Catalyst Foundation Institutional Ethics Committee Team",
    description: "Meet the committee’s passionate members working to ensure the practice of ethical research methods in the social sector.",
    url: "",
    images: "/what-we-do.png",
  },
};
const page = () => {
  
  return (
    <div>
        <AboutUsComponents/>
    </div>
  )
}

export default page