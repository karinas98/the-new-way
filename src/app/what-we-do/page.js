"use client";
import GetInTouch from "../components/get-in-touch";
import Nav from "../components/nav";
import Link from "next/link";
import CarouselWithBanner from "../components/scrolling-banner";
import CalendlyButton from "../components/calendly-link";

export default function WhatWeDo() {
  return (
    <main>
      <div className="relative bg-[url('./assets/graphic3.png')] bg-cover bg-center-top ">
        <Nav />
        <section className="h-screen flex flex-col justify-center px-[45px] md:px-[120px]">
          <div className="flex flex-col">
            <h1 className="text-[45px] md:text-title font-light text-orange xl:text-[60px]">
              WHAT WE DO
            </h1>
            <p className="pt-12 md:w-[75%] xl:w-[45%] text-black">
              The New Way is your partner for navigating the AI journey—making
              your operations smoother, your processes smarter, and your growth
              unstoppable. We’re all about giving your business the tools and
              strategies to not just keep up, but stand out in a fast-moving
              world.
            </p>
            <CalendlyButton />
          </div>
        </section>
      </div>

      <section>
        <CarouselWithBanner />
      </section>
      <section
        id="ignition"
        className="pl-[40px] md:pl-[90px] pr-[40px] md:pr-[90px]   h-full w-[100%] pt-12 md:pt-32 pb-32 md:pb-10"
      >
        <div>
          <h2 className="text-secondaryheadline font-extrabold text-orange">
            OUR PACKAGES
          </h2>
          <div>
            <div className="flex mt-10 flex-col md:flex-row md:gap-20 lg:gap-40  md:justify-between">
              <h3 className="text-[45px] text-black lg:text-[60px] mb-10 font-extrabold leading-[55px]">
                THE <br /> IGNITION
              </h3>
              <p className="xl:w-[40%] text-black 2xl:w-[30%]">
                The "AI Ignition" package is designed to help you understand
                where your business stands in terms of AI readiness. We analyze
                the current state of your technology, data, and processes to
                identify gaps and opportunities for AI adoption. This is the
                perfect starting point for businesses looking to explore AI with
                clarity and direction.
              </p>
            </div>
          </div>
          <div className="bg-lightblue lg:gap-10 xl:gap-20 lg:flex mt-20 p-10 lg:p-16 rounded-[20px]">
            <div className="lg:w-[55%] xl:w-[40%]">
              <h4 className="text-lg font-extrabold text-orange">
                WHAT TO EXPECT
              </h4>
              <ul className="mt-5 text-black">
                <li>
                  <span className="font-bold">In-Depth Assessments</span>
                  <br /> We evaluate your organisation’s existing
                  infrastructure, data quality, and workflow efficiency.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Collaborative Workshops</span>
                  <br /> Through structured sessions, we work closely with your
                  team to uncover key needs and priorities for AI
                  implementation.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Expert Analysis</span>
                  <br /> Using proven methodologies, we pinpoint quick-win
                  opportunities and map out areas where AI can make the most
                  immediate impact
                </li>
              </ul>
            </div>
            <hr className="my-10 border-grey " />
            <div className="lg:w-[55%] xl:w-[40%]">
              <h4 className="text-lg font-extrabold text-orange">
                WHAT YOU’LL GET
              </h4>
              <ul className="mt-5 text-black">
                <li>
                  <span className="font-bold">Comprehensive Reports</span>
                  <br /> Detailed insights into your current capabilities and
                  recommendations for improvement.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Tailored Roadmaps</span>
                  <br /> A step-by-step plan outlining actionable strategies for
                  adopting AI in your operations.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Starter Toolkit</span>
                  <br /> Resources and tools to help you take the first steps
                  toward implementation with confidence.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-center md:justify-end">
            <Link href="/contact">
              <button className=" flex  mt-10 bg-orange text-[14px] text-lightblue hover:bg-white hover:border-2 hover:border-orange hover:text-orange font-bold py-4 px-10 rounded-full shadow-sm">
                BOOK A SPOT
              </button>
            </Link>
          </div>
          <div
            id="navigator"
            className="flex mt-[180px] flex-col md:flex-row md:gap-20 lg:gap-40  md:justify-between"
          >
            <div>
              <h2 className="text-secondaryheadline font-extrabold text-orange">
                OUR PACKAGES
              </h2>
              <h3 className="text-[45px] text-black lg:text-[60px] mb-10 mt-20 font-extrabold leading-[55px]">
                THE <br /> NAVIGATOR
              </h3>
              <p className="xl:w-[40%] text-black 2xl:w-[30%]">
                The "AI Navigator" package is designed for businesses ready to
                take the next step in their AI journey. Beyond understanding
                readiness, this package provides vendor-agnostic guidance and
                change management strategies to help you implement AI
                effectively and ensure team alignment.
              </p>
            </div>
          </div>
          <div className="bg-lightblue lg:gap-10 xl:gap-20 lg:flex mt-20 p-10 lg:p-16 rounded-[20px]">
            <div className="lg:w-[55%] xl:w-[40%]">
              <h4 className="text-lg font-extrabold text-orange">
                WHAT TO EXPECT
              </h4>
              <ul className="mt-5 text-black">
                <li>
                  Everything included in the
                  <span className="font-bold text-orange">
                    <br /> IGNITION PACKAGE +
                  </span>
                </li>
                <li className="mt-6">
                  <span className="font-bold">Guide Your Choices</span>
                  <br /> Using extensive market research, we provide unbiased
                  recommendations for the best AI tools and platforms aligned
                  with your business goals, ensuring you choose solutions that
                  deliver real impact.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Enable Your Team</span>
                  <br /> We develop and deliver change management strategies,
                  including leadership workshops and hands-on training, to
                  ensure your team is equipped and confident in embracing new AI
                  tools and processes.
                </li>
              </ul>
            </div>
            <hr className="my-10 border-grey " />
            <div className="lg:w-[55%] xl:w-[40%]">
              <h4 className="text-lg font-extrabold text-orange">
                WHAT YOU’LL GET
              </h4>
              <ul className="mt-5 text-black">
                <li>
                  <span className="font-bold">Clear Insights</span>
                  <br /> A clear understanding of your AI readiness and
                  actionable steps forward.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Expert Guidance</span>
                  <br /> Trusted recommendations for the right tools and
                  vendors, tailored to your goals.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Team Readiness</span>
                  <br /> Change management strategies and training to prepare
                  your team for successful AI integration. Change management
                  strategies and training to prepare your team for successful AI
                  integration.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-full justify-center md:justify-end">
            <Link href="/contact">
              <button className=" flex hover:bg-white hover:border-2 hover:border-orange hover:text-orange  mt-10 bg-orange text-[14px] text-lightblue font-bold py-4 px-10 rounded-full shadow-sm">
                BOOK A SPOT
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div
            id="integrator"
            className="flex mt-[180px] flex-col md:flex-row md:gap-20 lg:gap-40  md:justify-between"
          >
            <div>
              <h2 className="text-secondaryheadline font-extrabold text-orange">
                OUR PACKAGES
              </h2>
              <h3 className="text-[45px] text-black lg:text-[60px] mb-10 font-extrabold mt-20 leading-[55px]">
                THE <br /> INTEGRATOR
              </h3>
              <p className="xl:w-[40%] text-black 2xl:w-[30%]">
                The "AI Integrator" package is designed for businesses ready to
                fully embrace AI integration at an enterprise level. Building on
                the Navigator Package, this comprehensive solution adds
                implementation facilitation and governance advisory to ensure a
                seamless and ethical adoption process.
              </p>
            </div>
          </div>
          <div className="bg-lightblue lg:gap-10 xl:gap-20 lg:flex mt-20 p-10 lg:p-16 rounded-[20px]">
            <div className="lg:w-[55%] xl:w-[40%]">
              <h4 className="text-lg font-extrabold text-orange">
                WHAT TO EXPECT
              </h4>
              <ul className="mt-5 text-black">
                <li>
                  Everything included in the
                  <span className="font-bold text-orange">
                    <br />
                    NAVIGATOR PACKAGE +
                  </span>
                </li>
                <li className="mt-6">
                  <span className="font-bold">Facilitate Integration</span>
                  <br /> Partner with certified developers and vendors to manage
                  the implementation process. Act as project coordinators,
                  overseeing milestones and ensuring post-integration success.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Ensure Ethical Governance</span>
                  <br /> Navigate AI’s legal, ethical, and regulatory landscape
                  with confidence. Develop governance frameworks, compliance
                  strategies, and provide team training for sustainable
                  implementation.
                </li>
              </ul>
            </div>
            <hr className="my-10 border-grey " />
            <div className="lg:w-[55%] xl:w-[40%]">
              <h4 className="text-lg font-extrabold text-orange">
                WHAT YOU’LL GET
              </h4>
              <ul className="mt-5 text-black">
                <li>
                  <span className="font-bold">
                    Comprehensive Integration Support
                  </span>
                  <br /> Hands-on guidance to ensure seamless implementation and
                  measurable outcomes.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Ethical AI Governance</span>
                  <br /> Strategies, policies, and training to meet legal and
                  ethical standards.
                </li>
                <li className="mt-6">
                  <span className="font-bold">
                    Optional Add-On: Quarterly Review
                  </span>
                  <br /> Quarterly review sessions to monitor performance and
                  refine strategies.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-center md:justify-end">
            <Link href="/contact">
              <button className=" flex hover:bg-white hover:border-2 hover:border-orange hover:text-orange  mt-10 bg-orange text-[14px] text-lightblue font-bold py-4 px-10 rounded-full shadow-sm">
                BOOK A SPOT
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div
            id="agent"
            className="flex mt-[180px] flex-col md:flex-row md:gap-20 lg:gap-40  md:justify-between"
          >
            <div>
              <h2 className="text-secondaryheadline font-extrabold text-orange">
                OUR PACKAGES
              </h2>
              <h3 className="text-[45px] text-black lg:text-[60px] mb-10 font-extrabold mt-20 leading-[55px]">
                THE <br /> AGENT
              </h3>
              <p className="xl:w-[40%] text-black 2xl:w-[30%]">
                The "AI Agent" package is a premium, end-to-end solution for
                businesses with distinct AI challenges or bold visions. It’s
                your entry point into the field of AI agents, exploring their
                potential to transform your operations and align with your
                goals. Whether it’s designing innovative AI models or managing
                intricate projects, this package delivers bespoke solutions
                tailored to your exact needs.
              </p>
            </div>
          </div>
          <div className="bg-lightblue lg:gap-10 xl:gap-20 lg:flex mt-20 p-10 lg:p-16 rounded-[20px]">
            <div className="lg:w-[55%] xl:w-[40%]">
              <h4 className="text-lg font-extrabold text-orange">
                WHAT TO EXPECT
              </h4>
              <ul className="mt-5 text-black">
                <li>
                  <span className="font-bold">
                    Enter the Field of AI Agents
                  </span>
                  <br />
                  Partner with industry experts to explore and define the
                  potential of AI agents for your business, including their
                  scope and capabilities.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Understand Your Vision</span>
                  <br /> Conduct discovery sessions to understand your unique
                  challenges, goals, and desired outcomes.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Design Custom Solutions</span>
                  <br /> Craft bespoke AI strategies and models to align with
                  your specific objectives.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Process Management</span>
                  <br /> Oversee the entire project lifecycle, coordinating with
                  expert developers and vendors to ensure seamless execution.
                </li>
              </ul>
            </div>
            <hr className="my-10 border-grey " />
            <div className="lg:w-[55%] xl:w-[40%]">
              <h4 className="text-lg font-extrabold text-orange">
                WHAT YOU’LL GET
              </h4>
              <ul className="mt-5 text-black">
                <li>
                  <span className="font-bold">Bespoke AI Solutions </span>
                  <br />
                  Fully customised models and strategies designed to solve your
                  unique challenges.
                </li>
                <li className="mt-6">
                  <span className="font-bold">
                    End-to-End Project Oversight
                  </span>
                  <br /> Comprehensive management of the AI development process,
                  ensuring milestones are met and goals are achieved.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Expert Collaboration</span>
                  <br /> Access to top-tier AI developers and industry
                  specialists, handpicked for your project.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-center md:justify-end">
            <Link href="/contact">
              <button className=" flex hover:bg-white hover:border-2 hover:border-orange hover:text-orange  mt-10 bg-orange text-[14px] text-lightblue font-bold py-4 px-10 rounded-full shadow-sm">
                BOOK A SPOT
              </button>
            </Link>
          </div>
        </div>
      </section>
      <GetInTouch />
    </main>
  );
}
