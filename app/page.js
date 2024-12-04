import Header from "@/components/Header/Header";
import Image from "next/image";
import Homecomponents from "../components/HomeComponents";
import Footer from "@/components/Footer/Footer";
import Seo from "@/components/Seo/Seo";
export default function Home() {
  const seoField = {
    title: "Catalyst Foundation Institutional Ethics Committee",
    description:
      "Learn how Catalyst Foundation’s Institutional ethics review committee is committed to ensuring ethical research while working with vulnerable communities.",
    path: "",
    metaImage: "/what-we-do.png",
    pageType: "WebSite",
  };
  return (
    <>
     <Seo {...seoField}/>
      <Header />
      <Homecomponents />
      {/* <Footer/> */}
    </>
  );
}
