import Footer from "./components/footer";
import Subscribe from "./components/subscribe";

import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "The New Way Consultancy",
  description:
    "We’re a forward-thinking AI consultancy dedicated to helping businesses navigate the complexities of AI adoption with clarity and confidence. ",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8NBEMHH5EW"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8NBEMHH5EW');
            `,
          }}
        />
        {/* Google Tag Manager - Loads asynchronously */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MJXHVWXN');
            `,
          }}
        />
      </head>
      <body className="font-sans">
        {children}
        <Subscribe />
        <Footer />
      </body>
    </html>
  );
}
