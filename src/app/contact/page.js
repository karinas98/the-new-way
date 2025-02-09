"use client";
import Nav from "../components/nav";
import { useState } from "react";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatusMessage("Submitted, Thank you for your interest!");
        setStatusType("success");
        e.target.reset();
      } else {
        const errorData = await response.json();
        setStatusMessage(`Error: ${errorData.error || "Submission failed"}`);
        setStatusType("error");
      }
    } catch (error) {
      setStatusMessage("Network error. Please try again.");
      setStatusType("error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-lightblue">
      <Nav />
      <div className="lg:w-screen mt-[200px] lg:mt-[20px] flex flex-col lg:items-center xl:justify-center lg:flex-row w-full px-20 lg:px-32 lg:gap-20 xl:gap-40">
        <h1 className="text-3xl md:w-[70%] lg:text-4xl xl:w-[40%] 2xl:w-[30%] font-normal text-orange mb-6">
          LET’S GET THE CONVERSATION STARTED
        </h1>
        <div className="flex mt-20 lg:w-[90%] xl:w-[40%] 2xl:w-[30%] flex-col">
          <form onSubmit={handleSubmit} className=" space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="first_name"
                onChange={handleChange}
                placeholder="FIRST NAME*"
                className="w-1/2 p-3 rounded-lg placeholder:text-orange text-[14px] text-orange focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
              <input
                type="text"
                name="last_name"
                onChange={handleChange}
                placeholder="LAST NAME*"
                className="w-1/2 p-3  rounded-lg placeholder:text-orange text-[14px] text-orange focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
            </div>
            <input
              type="text"
              name="company"
              onChange={handleChange}
              placeholder="COMPANY NAME"
              className="w-full p-3 rounded-lg placeholder:text-orange text-[14px] text-orange focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="EMAIL*"
              className="w-full p-3 rounded-lg placeholder:text-orange text-[14px] text-orange focus:outline-none focus:ring-2 focus:ring-orange"
              required
            />
            <textarea
              placeholder="HOW CAN WE HELP?*"
              onChange={handleChange}
              name="message"
              className="w-full p-3  rounded-lg focus:outline-none text-[14px] text-orange  placeholder:text-orange focus:ring-2 focus:ring-orange h-32"
            ></textarea>
            <div className="flex gap-10 items-center">
              <button
                type="submit"
                className="flex items-center justify-center w-12 h-12 bg-orange text-white rounded-full hover:bg-red-800 transition"
              >
                →
              </button>
              {statusMessage && (
                <p
                  className={
                    statusType === "success" ? "text-grey" : "text-orange"
                  }
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
