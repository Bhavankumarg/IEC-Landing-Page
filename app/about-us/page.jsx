import React from "react";
import AboutUsComponents from "../../components/AboutUsComponents";
import Seo from "@/components/Seo/Seo";
const seoField = {
  title: "About Us: Catalyst Foundation Institutional Ethics Committee Team",
  description:
    "Meet the committee’s passionate members working to ensure the practice of ethical research methods in the social sector.",
  path: "about-us",
  metaImage: "/what-we-do.png",
  pageType: "WebSite",
};
const page = () => {
  return (
    <>
      <Seo {...seoField} />
      <div>
        <AboutUsComponents />
      </div>
    </>
  );
};

export default page;
