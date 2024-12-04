import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importing the CSS file

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
     
      <body>
        {/* <Header/> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
