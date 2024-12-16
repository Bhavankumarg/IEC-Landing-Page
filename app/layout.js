import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Importing the CSS file
import Script from "next/script";

// const seoField = {
//     title: "Integrated solutions to shape social equity | CMS",
//     description:
//       "We devise integrated solutions for complex problems to achieve social equity for vulnerable groups through partner collaboration.",    path: "",
//     metaImage: "/social.png",
//     pageType: "WebSite"
//   };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-DJZ93DKLRP"
        ></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-DJZ93DKLRP');`}
        </Script>
      </head>
      <body>
        {/* <Header/> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
