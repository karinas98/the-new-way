"use client";
import { useState } from "react";

const faqCategories = [
  {
    category: "General AI & Business",
    faqs: [
      {
        question: "How can AI actually benefit my business?",
        answer:
          "AI can help businesses automate repetitive tasks, improve decision-making, and uncover insights from data that might otherwise be missed. It enhances efficiency, optimizes workflows, and drives business growth when applied strategically.",
      },
      {
        question: "How do I know if AI is the right fit for my company?",
        answer:
          "AI is a great fit if your business deals with large amounts of data, repetitive processes, or decision-making bottlenecks. We help businesses assess whether AI aligns with their goals and identify high-impact use cases.",
      },
      {
        question: "What’s the difference between automation and AI?",
        answer:
          "Automation follows pre-set rules to perform tasks, while AI learns from data, adapts, and makes intelligent decisions. While automation streamlines tasks, AI makes them smarter.",
      },
    ],
  },
  {
    category: "The New Way’s Approach & Services",
    faqs: [
      {
        question:
          "What makes The New Way different from other AI consultancies?",
        answer:
          "We focus on practical, tailored AI guidance—not hype. Instead of pushing generic solutions, we evaluate the best AI tools for your needs and provide clear, strategic implementation support.",
      },
      {
        question:
          "Do you build AI tools or help businesses implement existing solutions?",
        answer:
          "We don’t build AI software—we help you understand, choose, and integrate the best AI solutions for your business, ensuring they align with your goals and processes.",
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
  },
  {
    category: "Ongoing Support & Scaling",
    faqs: [
      {
        question: "Do you provide ongoing AI support after implementation?",
        answer:
          "Yes! AI evolves with your business. We offer ongoing support, optimization, and strategic guidance to ensure your AI solutions continue delivering value.",
      },
      {
        question: "How do we scale AI solutions as our business grows?",
        answer:
          "Scaling AI starts with a strong foundation. We help businesses adopt AI in phases, expanding capabilities and optimizing performance as they grow.",
      },
      {
        question: "Can we start small with AI and expand later?",
        answer:
          "Definitely. Many businesses start with a single AI-powered process before scaling. We guide you through low-risk, high-impact starting points and help expand AI use cases as you see results.",
      },
    ],
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto my-10 px-6 pt-[200px]">
      <h1 className="text-4xl font-semibold text-center text-orange mb-20">
        Frequently Asked Questions
      </h1>

      {faqCategories.map((category, catIndex) => (
        <div key={catIndex} className="mb-32 mt-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {category.category}
          </h2>

          <div className="space-y-6">
            {category.faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="w-full text-left py-4 flex justify-between items-center text-lg font-medium text-gray-800 focus:outline-none"
                  onClick={() => toggleAccordion(catIndex + "-" + index)}
                >
                  {faq.question}
                  <span className="text-orange text-[30px] font-light">
                    {openIndex === catIndex + "-" + index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === catIndex + "-" + index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 pb-4">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
