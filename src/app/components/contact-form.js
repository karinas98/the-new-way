"use client";
import { useState, useEffect } from "react";

export default function ContactBanner() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load reCAPTCHA script only once
  useEffect(() => {
    const scriptId = "recaptcha-script";

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://www.google.com/recaptcha/api.js?render=6Le0ItgqAAAAAKpUrmAweoPpkn8PBHV_2fjaviSD";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!window.grecaptcha) {
      setStatusMessage("reCAPTCHA failed to load. Please refresh the page.");
      setStatusType("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const recaptchaToken = await window.grecaptcha.execute(
        "6Le0ItgqAAAAAKpUrmAweoPpkn8PBHV_2fjaviSD",
        { action: "submit" }
      );

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          "g-recaptcha-response": recaptchaToken,
        }),
      });

      if (response.ok) {
        setStatusMessage("Submitted! Thank you for your interest.");
        setStatusType("success");
        setFormData({
          full_name: "",
          email: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setStatusMessage(`Error: ${errorData.error || "Submission failed"}`);
        setStatusType("error");
      }
    } catch (error) {
      setStatusMessage("Network error. Please try again.");
      setStatusType("error");
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <div className="flex mt-10  flex-col">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="FULL NAME*"
              required
              className="w-full md:w-1/2 p-3 rounded-lg placeholder:text-orange text-[14px] text-orange focus:outline-none focus:ring-2 focus:ring-orange"
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL*"
            required
            className="w-full p-3 rounded-lg placeholder:text-orange text-[14px] text-orange focus:outline-none focus:ring-2 focus:ring-orange"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="HOW CAN WE HELP?*"
            required
            className="w-full p-3 rounded-lg text-[14px] text-orange placeholder:text-orange focus:outline-none focus:ring-2 focus:ring-orange h-32"
          ></textarea>

          <input
            type="hidden"
            name="g-recaptcha-response"
            id="g-recaptcha-response"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-12 h-12 rounded-full transition ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-orange text-white hover:bg-red-800"
            }`}
          >
            →
          </button>
          {statusMessage && (
            <p
              className={
                statusType === "success" ? "text-gray-700" : "text-orange"
              }
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
