"use client";
import { useState } from "react";

const faqCategories = [
  {
    category: "General AI & Business",
    faqs: [
      {
        question: "How can AI actually benefit my business?",
        answer:
          "AI helps you work smarter, not harder. Whether it’s automating repetitive tasks, improving efficiency, or providing deeper insights, AI can have a powerful impact when used strategically and consistently. The key isn’t just adopting AI—it’s choosing the right tools that truly align with your business needs rather than following trends. From AI chatbots that enhance customer support to transcription tools that streamline documentation, inventory optimization that prevents stock issues, and personalized product recommendations that drive sales, AI offers endless possibilities to improve how you operate and grow. 🚀",
      },
      {
        question: "How do I know if AI is the right fit for my company?",
        answer:
          "AI isn’t just a nice-to-have anymore—it’s the world we live in now. If you want to grow, scale, and stay competitive, ignoring AI isn’t really an option. You don’t need to be ahead of your time, but you can’t afford to fall behind either. The key isn’t about jumping on the AI bandwagon just because everyone else is. It’s about figuring out where AI can actually help. Are you drowning in repetitive tasks? Struggling to keep up with customer demands? Wishing you had better insights to make smarter decisions? AI isn’t here to replace the human side of business—it’s here to free up your time, sharpen your strategy, and help you move faster. The real question isn’t if AI is the right fit, but how can it best support what you’re already building? ",
      },
      {
        question: "What’s the difference between automation and AI?",
        answer:
          "Think of automation as following a set of rules—it takes repetitive tasks off your plate but doesn’t adapt or learn. It’s like setting up an email auto-responder or scheduling social media posts—it does what you tell it to do, the same way, every time. AI, on the other hand, goes beyond just following instructions—it learns, adapts, and makes decisions. Instead of just sending a pre-written email, AI can analyze customer behavior and tailor responses based on past interactions. Instead of just organizing data, AI can find patterns, predict trends, and suggest actions. The real magic happens when AI and automation work together—automation handles the routine, while AI adds intelligence, making processes smarter, faster, and more impactful. ",
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
          "Most AI consultancies either push their own software or leave you drowning in complicated language and a tool that you'll loose interest in using overtime without real guidance. We do things differently, we utilize the human-centered approach with the technology of today. At The New Way, we don’t just throw AI at a problem and hope it sticks. We help you understand what’s possible, what’s useful, and what actually moves the needle for your business. Instead of overwhelming you with complicated solutions, we simplify AI, making it accessible, practical, and provide solutions that will fit to your specific needs & budget. We evaluate what’s out there, what fits your business, and what will deliver real results. At the end of the day, AI isn’t about hype—it’s about impact. And our job is to make sure AI works for you, not the other way around. ",
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
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-black pb-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
