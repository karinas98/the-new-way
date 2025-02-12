"use client";
import Nav from "../components/nav";
import { useState, useEffect } from "react";

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
  const [hasMounted, setHasMounted] = useState(false); // ✅ Fix hydration error

  // ✅ Ensure status messages only appear after hydration
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("🚀 API Response:", response);

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
        const errorData = await response.json();
        console.error("❌ API Error:", errorData);
        setStatusMessage(`Error: ${errorData.error || "Submission failed"}`);
        setStatusType("error");
      }
    } catch (error) {
      console.error("❌ Network error:", error);
      setStatusMessage("Network error. Please try again.");
      setStatusType("error");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-lightblue">
      <Nav />
      <div className="lg:w-screen mt-[200px] lg:mt-[20px] flex flex-col lg:items-center xl:justify-center lg:flex-row w-full px-20 lg:px-32 lg:gap-20 xl:gap-40">
        <h1 className="text-3xl md:w-[70%] lg:text-4xl xl:w-[40%] 2xl:w-[30%] font-normal text-orange mb-6">
          LET’S GET THE CONVERSATION STARTED
        </h1>

        <div className="flex mt-10 lg:w-[90%] xl:w-[40%] 2xl:w-[30%] flex-col">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="FIRST NAME*"
                className="w-full md:w-1/2 p-3 rounded-lg placeholder:text-orange text-[14px] text-orange focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="LAST NAME*"
                className="w-full md:w-1/2 p-3 rounded-lg placeholder:text-orange text-[14px] text-orange focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
            </div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="COMPANY NAME"
              className="w-full p-3 rounded-lg placeholder:text-orange text-[14px] text-orange focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="EMAIL*"
              className="w-full p-3 rounded-lg placeholder:text-orange text-[14px] text-orange focus:outline-none focus:ring-2 focus:ring-orange"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="HOW CAN WE HELP?*"
              className="w-full p-3 rounded-lg focus:outline-none text-[14px] text-orange placeholder:text-orange focus:ring-2 focus:ring-orange h-32"
              required
            ></textarea>

            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center w-12 h-12 rounded-full transition ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange text-white hover:bg-red-800"
                }`}
              >
                →
              </button>

              {/* ✅ Only render status messages after hydration */}
              {hasMounted && statusMessage && (
                <p
                  className={`mt-4 md:mt-0 ${
                    statusType === "success" ? "text-gray-700" : "text-orange"
                  } text-sm`}
                >
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
