"use client";
import { useState, useEffect } from "react";
import NavTwo from "../components/nav-two";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // Load reCAPTCHA script only once
  useEffect(() => {
    if (!isClient) return;

    const scriptId = "recaptcha-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src =
        "https://www.google.com/recaptcha/api.js?render=6LfJBdgqAAAAAFEi3u_lxGFRfpQLo5oqa4le7OKU";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onerror = () => {
        console.error("reCAPTCHA failed to load");
        setStatusMessage("reCAPTCHA failed to load. Please refresh the page.");
        setStatusType("error");
      };
    }
  }, [isClient]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (typeof window.grecaptcha === "undefined" || !window.grecaptcha) {
      setStatusMessage("reCAPTCHA failed to load. Please refresh the page.");
      setStatusType("error");
      setIsSubmitting(false);
      return;
    }

    try {
      // Check if grecaptcha is loaded and wait for it to be ready
      if (typeof window.grecaptcha === "undefined" || !window.grecaptcha) {
        throw new Error("reCAPTCHA failed to load. Please refresh the page.");
      }

      // Wait for grecaptcha to be ready
      await new Promise((resolve) => {
        if (window.grecaptcha.ready) {
          window.grecaptcha.ready(resolve);
        } else {
          resolve();
        }
      });

      // Get token
      const recaptchaToken = await window.grecaptcha.execute(
        "6LfJBdgqAAAAAFEi3u_lxGFRfpQLo5oqa4le7OKU",
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

      const responseData = await response.json();

      if (response.ok) {
        setStatusMessage("Submitted! Thank you for your interest.");
        setStatusType("success");
        setFormData({
          first_name: "",
          last_name: "",
          company: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error(responseData.error || "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatusMessage(error.message || "Network error. Please try again.");
      setStatusType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-lightblue">
      {isClient ? (
        <div className="w-full px-6 py-20 lg:px-32 flex flex-col items-center justify-center">
          <NavTwo />
          <h1 className="text-2xl sm:text-3xl mt-20 lg:text-4xl font-normal text-orange mb-8 text-center max-w-2xl">
            LET'S GET THE CONVERSATION STARTED
          </h1>

          <form onSubmit={handleSubmit} className="w-full max-w-xl space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="FIRST NAME*"
                required
                className="w-full md:w-1/2 p-3 rounded-lg placeholder:text-orange text-orange text-sm focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="LAST NAME*"
                required
                className="w-full md:w-1/2 p-3 mt-5 rounded-lg placeholder:text-orange text-orange text-sm focus:outline-none focus:ring-2 focus:ring-orange"
              />
            </div>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="COMPANY NAME"
              className="w-full p-3 rounded-lg placeholder:text-orange text-orange text-sm focus:outline-none focus:ring-2 focus:ring-orange"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="EMAIL*"
              required
              className="w-full p-3 rounded-lg placeholder:text-orange text-orange text-sm focus:outline-none focus:ring-2 focus:ring-orange"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="HOW CAN WE HELP?*"
              required
              className="w-full p-3 rounded-lg placeholder:text-orange text-orange text-sm focus:outline-none focus:ring-2 focus:ring-orange h-32"
            />

            <input
              type="hidden"
              name="g-recaptcha-response"
              id="g-recaptcha-response"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-1/2 h-12 rounded-full transition ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange text-white hover:bg-red-800"
              }`}
            >
              SUBMIT
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
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      )}
    </div>
  );
}
