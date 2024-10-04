import Footer from "@/components/Footer/Footer"
// import Header from "@/components/Header/Header"
import "@/styles/globals.css"
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importing the CSS file

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "IEC",
  description: "Generated by create next app ",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Header/> */}
      <body>{children}</body>
      <Footer/>
    </html>
  )
}
