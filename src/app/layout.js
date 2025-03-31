import Footer from "./components/footer";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "The New Way Consultancy",
  description:
    "We're a forward-thinking AI consultancy dedicated to helping businesses navigate the complexities of AI adoption with clarity and confidence. ",
  icons: {
    icon: "/favicon-new-way.ico",
    shortcut: "/favicon-new-way.ico",
    apple: "/favicon-new-way.png",
  },
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
        <script
          type="text/javascript"
          charset="UTF-8"
          src="//cdn.cookie-script.com/s/e8084cc963c6b0057ae051522dda83b4.js"
        />
        <script src="https://www.google.com/recaptcha/enterprise.js?render=6LfJBdgqAAAAAFEi3u_lxGFRfpQLo5oqa4le7OKU" />
        {/* Google Tag Manager */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8NBEMHH5EW"
        />

        <link rel="icon" href="/favicon-new-way.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon-new-way.png" />
      </head>
      <body className="font-sans">
        <noscript>
          <iframe
            title="google-tag"
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJXHVWXN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Footer />
      </body>
    </html>
  );
}
