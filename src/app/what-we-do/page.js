"use client";
import GetInTouch from "../components/get-in-touch";
import Nav from "../components/nav";
import Link from "next/link";
import CarouselWithBanner from "../components/scrolling-banner";
import CalendlyButton from "../components/calendly-link";

export default function WhatWeDo() {
  return (
    <main>
      <div className="relative bg-[url('./assets/graphic3.png')] bg-cover bg-center-top h-screen ">
        <Nav />
        <section className="h-screen flex flex-col justify-center px-[45px] md:px-[120px]">
          <div className="flex flex-col">
            <h1 className="text-[45px] md:text-title font-light text-orange xl:text-[60px]">
              WHAT WE DO
            </h1>
            <p className="pt-12 md:w-[75%] xl:w-[45%] text-black">
              The New Way is your partner for navigating your way around AI &
              automation towards making your operations smoother, your processes
              smarter, and your growth unstoppable. We’re all about giving your
              business the tools and strategies to not just keep up, but stand
              out in a fast-moving world.
            </p>
            <CalendlyButton />
          </div>
        </section>
        <section className="flex flex-col items-center relative -mt-[300px] md:-mt-52">
          <div className="bg-lightblue hidden md:w-[800px] h-[80px] rounded-full absolute opacity-90" />

          <div className="md:flex md:gap-10 md:justify-center md:p-10 md:relative hidden">
            <Link href="#ignition">
              <button
                type="button"
                className="w-[220px] bg-white text-[14px] text-orange py-4 px-4 rounded-full shadow-sm hover:before:bg-orange relative overflow-hidden  shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange before:transition-all before:duration-500  hover:text-white hover:shadow-orange hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10 font-semibold">THE STARTER</span>
              </button>
            </Link>
            <Link href="#navigator">
              <button
                type="button"
                className="w-[220px]  bg-white text-[14px] text-orange py-4 px-4 rounded-full shadow-sm hover:before:bg-orange relative overflow-hidden  shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange before:transition-all before:duration-500  hover:text-white hover:shadow-orange hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10 font-semibold">
                  THE OPERATOR
                </span>
              </button>
            </Link>
            <Link href="#integrator">
              <button
                type="button"
                className="w-[220px] bg-white text-[14px] text-orange py-4 px-4 rounded-full shadow-sm hover:before:bg-orange relative overflow-hidden  shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange before:transition-all before:duration-500  hover:text-white hover:shadow-orange hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10 font-semibold">THE LEADER</span>
              </button>
            </Link>
            <Link href="#agent">
              <button
                type="button"
                className="w-[220px] bg-white text-[14px] text-orange py-4 px-4 rounded-full shadow-sm hover:before:bg-orange relative overflow-hidden  shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange before:transition-all before:duration-500  hover:text-white hover:shadow-orange hover:before:left-0 hover:before:w-full"
              >
                <span className="relative z-10 font-semibold">THE AGENT</span>
              </button>
            </Link>
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
            <h3 className="text-[45px] text-black lg:text-[60px] mb-10 font-extrabold leading-[55px]">
              THE <br /> STARTER
            </h3>
            <p className="xl:w-[40%] text-black 2xl:w-[30%]">
              <span className="font-bold">
                Get clarity. Take action. Start your AI journey.
              </span>
              <br /> <br />
              Designed for founders and leaders who are curious about AI but
              unsure where to begin. We’ll assess where you’re spending time,
              map where AI can help, and give you clear, personalized next steps
              to go from curiosity to confidence — no jargon, just practical
              ideas.
            </p>
          </div>
          <div className="bg-lightblue lg:gap-10 xl:gap-20 lg:flex mt-20 p-10 lg:p-16 rounded-[20px]">
            <div className="lg:w-[55%] xl:w-[40%]">
              <h4 className="text-lg font-extrabold text-orange">
                WHAT TO EXPECT
              </h4>
              <ul className="mt-5 text-black">
                <li>
                  <span className="font-bold">Quick-Impact Discovery</span>
                  <br /> We explore how you currently operate and where you’re
                  spending the most time.
                </li>
                <li className="mt-6">
                  <span className="font-bold">
                    Foundational Workflow Mapping
                  </span>
                  <br /> We break down your day-to-day processes to find areas
                  where AI can immediately help.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Strategic Planning</span>
                  <br /> We pinpoint quick-win opportunities and provide you
                  with the right tools and steps to get started
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
                  <span className="font-bold">Opportunity Snapshot</span>
                  <br />A clear picture of where AI can make a difference for
                  yourself or in your business.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Tailored Roadmaps</span>
                  <br /> Recommended use cases tailored to your needs and
                  priorities.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Starter Toolkit</span>
                  <br /> Prompts, tools, and resources to help you test and
                  start using AI right away.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-center md:justify-end">
            <Link href="/contact">
              <button
                type="button"
                className=" flex  mt-10 bg-orange text-[14px] text-lightblue hover:bg-white hover:border-2 hover:border-orange hover:text-orange font-bold py-4 px-10 rounded-full shadow-sm"
              >
                BOOK A CALL
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
                THE <br /> OPERATOR
              </h3>
              <p className="xl:w-[40%] text-black 2xl:w-[30%]">
                <span className="font-bold">
                  Turn strategy into systems. Build AI into your day-to-day.
                </span>
                <br /> <br />
                The Operator package is built for founders and teams ready to go
                beyond ideas and start putting AI to work. We help you redesign
                key workflows, introduce the right tools, and build practical
                systems that improve how you operate — all without the
                overwhelm. This is where strategy meets execution.
              </p>
            </div>
          </div>
          <div className="bg-lightblue lg:gap-10 xl:gap-20 lg:flex mt-20 p-10 lg:p-16 rounded-[20px]">
            <div className="lg:w-[55%] xl:w-[40%]">
              <h4 className="text-lg font-extrabold text-orange">
                WHAT TO EXPECT
              </h4>
              <ul className="mt-5 text-black">
                <li className="mt-6">
                  <span className="font-bold">
                    In-Depth Workflow Assessments
                  </span>
                  <br /> We evaluate how your current processes run, from
                  internal ops to outreach.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Collaborative Sessions</span>
                  <br /> We work directly with you (or your team) to define
                  high-impact improvements.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Applied Strategy</span>
                  <br /> We don’t just suggest tools — we show how they’ll
                  actually work for you.
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
                  actionable steps forward. A visual plan showing how your new
                  AI-optimized workflows will run.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Custom Systems & Setup</span>
                  <br /> Built or guided implementation of AI workflows (e.g.
                  automations, prompts, tools).
                </li>
                <li className="mt-6">
                  <span className="font-bold">Time Savings Playbook</span>
                  <br /> Simple systems and documentation to keep your new
                  workflows running smoothly.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-full justify-center md:justify-end">
            <Link href="/contact">
              <button
                type="button"
                className=" flex hover:bg-white hover:border-2 hover:border-orange hover:text-orange  mt-10 bg-orange text-[14px] text-lightblue font-bold py-4 px-10 rounded-full shadow-sm"
              >
                BOOK A CALL
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
                THE <br /> LEADER
              </h3>
              <p className="xl:w-[40%] text-black 2xl:w-[30%]">
                <span className="font-bold">
                  Scale smarter. Lead with AI strategy and confidence.
                </span>
                <br /> <br />
                The Leader package is designed for founders and leadership teams
                ready to embed AI across their business with clarity, structure,
                and long-term vision. From strategy to systems to team
                enablement, we work with you to scale AI adoption sustainably —
                turning you into a confident, AI-capable leader who drives real
                change.
              </p>
            </div>
          </div>
          <div className="bg-lightblue lg:gap-10 xl:gap-20 lg:flex mt-20 p-10 lg:p-16 rounded-[20px]">
            <div className="lg:w-[55%] xl:w-[40%]">
              <h4 className="text-lg font-extrabold text-orange">
                WHAT TO EXPECT
              </h4>
              <ul className="mt-5 text-black">
                <li className="mt-6">
                  <span className="font-bold">Long-Term Strategy Building</span>
                  <br /> We co-create a scalable AI vision aligned with your
                  growth and leadership goals.
                </li>
                <li className="mt-6">
                  <span className="font-bold">
                    Capability & Governance Planning
                  </span>
                  <br />
                  We help you think beyond tools — into mindset, systems, team
                  enablement, and ethical use.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Guided Execution</span>
                  <br />
                  From team workshops to internal systems, we’re with you
                  through rollout and scaling.
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
                  <span className="font-bold">AI Strategy Roadmap</span>
                  <br /> A forward-looking plan covering immediate use cases and
                  long-term adoption goals.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Prompt + SOP Libraries</span>
                  <br /> Reusable tools and guidance to keep your business
                  AI-enabled across content, ops, and more.
                </li>
                <li className="mt-6">
                  <span className="font-bold">Leadership Confidence</span>
                  <br /> You’ll walk away with clarity, capability, and the
                  ability to scale & lead AI internally.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full justify-center md:justify-end">
            <Link href="/contact">
              <button
                type="button"
                className=" flex hover:bg-white hover:border-2 hover:border-orange hover:text-orange  mt-10 bg-orange text-[14px] text-lightblue font-bold py-4 px-10 rounded-full shadow-sm"
              >
                BOOK A CALL
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
              <button
                type="button"
                className=" flex hover:bg-white hover:border-2 hover:border-orange hover:text-orange  mt-10 bg-orange text-[14px] text-lightblue font-bold py-4 px-10 rounded-full shadow-sm"
              >
                BOOK A CALL
              </button>
            </Link>
          </div>
        </div>
      </section>
      <GetInTouch />
    </main>
  );
}
