"use client";
import logo from "@/app/assets/logo-orange.png";
import Image from "next/image";

import { useState } from "react";

const packages = [
  {
    name: "AI Ignition",
    description:
      "Understand where your business stands in terms of AI readiness. We analyze your technology, data, and processes to identify gaps and opportunities for AI adoption.",
    features: [
      "AI Readiness Assessment",
      "Gap Analysis",
      "Tailored recommendations",
    ],
  },
  {
    name: "AI Navigator",
    description:
      "Take the next step in your AI journey with vendor-agnostic guidance and change management strategies for effective implementation.",
    features: [
      "AI Readiness Assessment",
      "Vendor-Agnostic Solution Guidance",
      "Change Management Strategy",
    ],
  },
  {
    name: "AI Integrator",
    description:
      "Fully embrace AI integration at an enterprise level with our comprehensive solution including implementation and governance advisory.",
    features: [
      "Complete Navigator Package",
      "Implementation Facilitation",
      "Governance & Ethical AI Advisory",
    ],
  },
  {
    name: "AI Agent",
    description:
      "A premium, end-to-end solution for businesses with distinct AI challenges, transforming operations through bespoke solutions.",
    features: [
      "Custom Project Management",
      "Bespoke AI Solutions",
      "Strategic Implementation",
    ],
  },
];

export default function LandingPage() {
  const [formData, setFormData] = useState({
    email: "",
    companySize: "",
    package: "",
    aiExperience: "",
    goal: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Thank you for your interest!");
        setFormData({
          email: "",
          companySize: "",
          package: "",
          aiExperience: "",
          goal: "",
        });
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <nav className="h-[100px] bg-lightblue  w-full top-0 z-50">
        <section className="flex items-center  justify-between">
          <Image
            src={logo}
            href="/"
            alt="The New Way Logo"
            className="w-[330px] p-[15px] pl-[50px]"
          />
        </section>
      </nav>
      <div className="min-h-screen pt-40 bg-lightblue">
        <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-5xl text-orange w-[400px] font-bold text-left mb-8">
            Transform Your Business with AI
          </h1>
          <p className="mb-20 w-[50%] font-light">
            We’re currently fully booked, but we’d love to learn more about your
            goals! Join our waiting list to stay updated and be the first to
            know when spots open up.
          </p>
          <section className="flex flex-row-reverse gap-10">
            <div className="flex flex-col mb-12 gap-5 w-[50%] ">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="rounded-lg bg-orange   shadow-sm p-6 text-white"
                >
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {pkg.name}
                  </h2>
                  <p className="text-white mb-4 font-light">
                    {pkg.description}
                  </p>
                  <div>
                    <h3 className="font-semibold mb-2">What's Included:</h3>
                    <ul className="list-disc pl-4 space-y-2">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="text-white font-light">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-[50%] mx-auto ">
              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-lightblue p-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What best describe your current AI experience level
                  </label>
                  {["Beginner", "Intermediate", "Advanced"].map((level) => (
                    <label key={level} className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="aiExperience"
                        value={level}
                        checked={formData.aiExperience === level}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            aiExperience: e.target.value,
                          })
                        }
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-600">{level}</span>
                    </label>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What best describes the outcome that you are looking for
                    with AI?
                  </label>
                  {[
                    "Improve Efficiency",
                    "Drive Innovation",
                    "Reduce Costs",
                    "Competitive Advantage",
                    "Scale my business",
                  ].map((goal) => (
                    <label key={goal} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        name="goal"
                        value={goal}
                        checked={formData.goal.includes(goal)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData({
                              ...formData,
                              goal: [...formData.goal, goal],
                            });
                          } else {
                            setFormData({
                              ...formData,
                              goal: formData.goal.filter((g) => g !== goal),
                            });
                          }
                        }}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-600">{goal}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Which package best descrbes what you are looking for?
                  </label>
                  {packages.map((pkg) => (
                    <label key={pkg.name} className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="package"
                        value={pkg.name}
                        checked={formData.package === pkg.name}
                        onChange={(e) =>
                          setFormData({ ...formData, package: e.target.value })
                        }
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-600">{pkg.name}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What budget range best reflects your plans for AI
                    implementation?
                  </label>
                  {["$1000-$5000$", "$8000-$15 000", "$15 000+"].map((size) => (
                    <label key={size} className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="companySize"
                        value={size}
                        checked={formData.companySize === size}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companySize: e.target.value,
                          })
                        }
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-600">{size}</span>
                    </label>
                  ))}
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange text-white py-2 px-4 rounded-full hover:bg-white hover:text-orange hover:border hover:border-orange transition duration-150"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </section>
          <hr />
        </main>
      </div>
    </div>
  );
}
