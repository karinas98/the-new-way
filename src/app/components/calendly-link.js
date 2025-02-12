import Link from "next/link";

import { useEffect } from "react";

export default function CalendlyButton() {
  useEffect(() => {
    // Load Calendly script dynamically
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="pt-5">
      {/* Load Calendly Stylesheet */}
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />

      <button
        onClick={() =>
          Calendly.initPopupWidget({
            url: "https://calendly.com/karina-savoie-new-way/30min?hide_event_type_details=1&primary_color=db4a2b",
          })
        }
        className="text-orange text-lg  font-bold cursor-pointer"
      >
        FREE 30-MIN CONSULTATION
      </button>
    </section>
  );
}
