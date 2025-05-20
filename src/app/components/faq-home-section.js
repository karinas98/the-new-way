"use client";
import { useState } from "react";

const featuredCategory = {
  category: "YOU MAY ASK YOURSELF",
  faqs: [
    {
      question: "What makes The New Way different from other AI consultancies?",
      answer:
        "We focus on practical, tailored AI guidance—not hype. Instead of pushing generic solutions, we evaluate the best AI tools for your needs and provide clear, strategic implementation support.",
    },
    {
      question:
        "Do you build AI tools or help businesses implement existing solutions?",
      answer:
        "We can build AI workflows & systems but our primary focus is to help you understand, choose, and integrate the best solutions for your business, ensuring they align with your goals and processes first. Then we can look at what is already available or if a built solution is needed",
    },
    {
      question: "How do you help businesses choose the right AI tools?",
      answer:
        "We assess your business goals, workflow challenges, and pain points, then evaluate potential AI solutions based on functionality, scalability, and cost to ensure the best fit.",
    },
    {
      question:
        "Can you help with AI strategy even if we’re not ready to implement AI yet?",
      answer:
        "Absolutely. AI success starts with a solid strategy, not just implementation. We help businesses map opportunities, define realistic use cases, and create a phased AI roadmap.",
    },
  ],
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto mx-12 my-10 px-6 pt-20">
      <h2 className="text-3xl font-bold text-center text-orange mb-10">
        {featuredCategory.category}
      </h2>

      <div className="space-y-4">
        {featuredCategory.faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left py-4 flex justify-between items-center text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="text-orange ml-5 text-[25px]">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 pb-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Link to Full FAQ Page */}
      <div className="text-center mt-12">
        <a href="/faq" className="text-orange  font-medium hover:underline">
          View All FAQs →
        </a>
      </div>
    </section>
  );
}
