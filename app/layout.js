import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';  // Importing the CSS file

export const metadata = {
  title: "Catalyst Foundation Institutional Ethics Committee",
  description: "Learn how Catalyst Foundation’s Institutional ethics review committee is committed to ensuring ethical research while working with vulnerable communities.",
  alternates: {
    canonical: "",
  },
  openGraph: {
    title: "Catalyst Foundation Institutional Ethics Committee",
    description: "Learn how Catalyst Foundation’s Institutional ethics review committee is committed to ensuring ethical research while working with vulnerable communities.",
    url: "",
    images: "/what-we-do.png",
  },
};
const seoField = {
    title: "Integrated solutions to shape social equity | CMS",
    description:
      "We devise integrated solutions for complex problems to achieve social equity for vulnerable groups through partner collaboration.",    path: "",
    metaImage: "/social.png",
    pageType: "WebSite"
  };

const HomePageSchema = {
  "@context": "https://schema.org",
  "@type": "Website",
  "name": metadata.title,
  "description": metadata.description,
  "url": metadata.alternates.canonical,
  "publisher": {
    "@type": "Organization",
    "name": "Your Company Name",
    "logo": "https://www.example.com/logo.png"
  },
  "image": metadata.openGraph.images
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.alternates.canonical} />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(HomePageSchema) }}
        />
      </head>
      <body>
        {/* <Header/> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
