"use client";
import Nav from "../components/nav";

export default function PrivacyPolicy() {
  return (
    <main>
      <Nav />
      <div className="h-full mt-52 mb-20 mx-20 w-[65%]">
        <h1 className="text-title pb-12">Privacy Policy</h1>
        <p className="mb-5">
          <strong>Effective Date:</strong> 02/08/25
        </p>

        <h2 className="text-secondaryheadline text-orange font-bold">
          Introduction
        </h2>
        <p>
          Welcome to <strong>The New Way</strong>. We are a B2B AI consulting
          firm dedicated to helping organizations understand AI processes and
          find tailored AI solutions. This Privacy Policy outlines how we
          collect, use, and protect your information when you visit our website
          and engage with our services.
        </p>

        <h2 className="text-secondaryheadline mt-10 text-orange font-bold">
          Information We Collect
        </h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, email address, company
            name, phone number, and any details you provide when contacting us.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, operating
            system, and usage data collected through cookies and analytics
            tools.
          </li>
          <li>
            <strong>Client Information:</strong> Business-related data necessary
            to provide AI solutions.
          </li>
        </ul>

        <h2 className="text-secondaryheadline mt-10 text-orange font-bold">
          How We Use Your Information
        </h2>
        <p>We use the information collected for the following purposes:</p>
        <ul>
          <li>To provide and improve our AI consulting services.</li>
          <li>
            To respond to inquiries and communicate with potential and existing
            clients.
          </li>
          <li>To analyze website usage and improve user experience.</li>
          <li>To comply with legal obligations and ensure website security.</li>
        </ul>

        <h2 className="text-secondaryheadline mt-10 text-orange font-bold">
          Sharing Your Information
        </h2>
        <p>
          We do not sell or rent personal information. We may share data in the
          following circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Providers:</strong> Third-party partners assisting
            in website hosting, analytics, and communication.
          </li>
          <li>
            <strong>Legal Compliance:</strong> If required by law or in response
            to lawful requests.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of assets.
          </li>
        </ul>

        <h2 className="text-secondaryheadline mt-10 text-orange font-bold">
          Data Security
        </h2>
        <p>
          We implement industry-standard security measures to protect your
          information from unauthorized access, disclosure, or alteration.
          However, no method of transmission over the internet is completely
          secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-secondaryheadline mt-10 text-orange font-bold">
          Your Rights and Choices
        </h2>
        <p>
          Depending on your location, you may have rights to access, update, or
          delete your personal data. To exercise these rights, contact us at{" "}
          <strong>karina.savoie@new-way.ai</strong>.
        </p>

        <h2 className="text-secondaryheadline mt-10 text-orange font-bold">
          Cookies and Tracking Technologies
        </h2>
        <p>
          We use cookies and similar technologies to enhance website
          functionality and analyze traffic. You can control cookie preferences
          through your browser settings.
        </p>

        <h2 className="text-secondaryheadline mt-10 text-orange font-bold">
          Third-Party Links
        </h2>
        <p>
          Our website may contain links to external sites. We are not
          responsible for the privacy practices of third-party websites and
          encourage you to review their policies.
        </p>

        <h2 className="text-secondaryheadline mt-10 text-orange font-bold">
          Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date.
        </p>

        <h2 className="text-secondaryheadline mt-10 text-orange font-bold">
          Contact Us
        </h2>
        <p>
          For any questions about this Privacy Policy, please contact us at{" "}
          <strong>karina.savoie@new-way.ai</strong>.
        </p>
      </div>
    </main>
  );
}
