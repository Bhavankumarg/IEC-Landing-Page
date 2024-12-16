import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Importing the CSS file
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="LysyG3zJq4ZnwfQvPHoHcXwGWE6KeUAc7f3e9aGBtW8"
        />

        {/* Google Analytics */}
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
