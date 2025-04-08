"use client";
import Nav from "./components/nav";
import Image from "next/image";
import Link from "next/link";
import GetInTouch from "./components/get-in-touch";
import FAQSection from "./components/faq-home-section";
import ClientReviews from "./components/client-reviews";
import arrow from "@/app/assets/arrow.png";

export default function Home() {
  return (
    <main>
      <div className="relative bg-[url('./assets/home-hero.jpeg')] bg-cover bg-center lg:bg-left h-screen">
        <Nav />
        <div className="flex flex-col ">
          <section className="h-screen flex flex-col bg-black bg-opacity-35 lg:bg-transparent justify-center px-[45px] md:pl-[85px]  ">
            <h1 className=" text-[52px] text-white  leading-[60px] md:text-title font-normal lg:text-black w-full md:w-[90%] lg:w-[50%] xl:w-[35%] 2xl:w-[40%] xl:text-[55px] xl:leading-[70px]">
              Use AI & Automation to Save Time, Work Smarter, and Lead Better
            </h1>
          </section>
          <section className="flex flex-col items-center relative -mt-[300px] md:-mt-52">
            <div className="bg-lightblue hidden md:w-[800px] h-[80px] rounded-full absolute opacity-90" />

            <div className="md:flex md:gap-10 md:justify-center md:p-10 md:relative hidden">
              <Link href="/#what-we-offer">
                <button
                  type="button"
                  className="w-[220px] bg-white text-[14px] text-orange py-2 px-4 rounded-full shadow-sm hover:before:bg-orange relative overflow-hidden  shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange before:transition-all before:duration-500  hover:text-white hover:shadow-orange hover:before:left-0 hover:before:w-full"
                >
                  <span className="relative z-10 font-semibold">
                    IMPLEMENTATION & STRATEGY SUPPORT
                  </span>
                </button>
              </Link>
              <Link href="/#what-we-offer">
                <button
                  type="button"
                  className="w-[220px]  bg-white text-[14px] text-orange py-2 px-4 rounded-full shadow-sm hover:before:bg-orange relative overflow-hidden  shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange before:transition-all before:duration-500  hover:text-white hover:shadow-orange hover:before:left-0 hover:before:w-full"
                >
                  <span className="relative z-10 font-semibold">
                    RESULTS FOCUSED SOLUTIONS
                  </span>
                </button>
              </Link>
              <Link href="/#what-we-offer">
                <button
                  type="button"
                  className="w-[220px] bg-white text-[14px] text-orange py-2 px-4 rounded-full shadow-sm hover:before:bg-orange relative overflow-hidden  shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange before:transition-all before:duration-500  hover:text-white hover:shadow-orange hover:before:left-0 hover:before:w-full"
                >
                  <span className="relative z-10 font-semibold">
                    ETHICAL AI <br /> ADVISORY
                  </span>
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <section className=" pl-[40px] md:pl-[90px] pr-[30px] md:pr-[80px] lg:w-[55%]  h-full w-[90%] pt-32 pb-32 md:pb-10  ">
        <div>
          <h2 className="text-secondaryheadline font-extrabold text-orange">
            WHO WE ARE
          </h2>
          <p className="pt-5 text-black">
            We’re a forward-thinking AI consultancy dedicated to helping leaders
            navigate the complexities of AI adoption with clarity and
            confidence.
            <br /> <br /> And yes — we help businesses and teams too. <br />
            <br />
            We specialize in equipping founders and SME leaders with the
            knowledge, strategies, and tools to harness AI effectively —
            empowering them to lead their organizations into the future with
            confidence. <br />
            <br /> Our focus is on practical solutions that drive real results:
            saving time, increasing efficiency, and enhancing productivity in
            the day-to-day.
          </p>
        </div>
        <div className="mt-[100px]">
          <h2 className="text-secondaryheadline font-extrabold text-orange">
            WHY WE DO THIS
          </h2>
          <p className="pt-5 text-black">
            We believe AI shouldn’t be reserved for big tech or complex
            enterprise teams.
            <br /> <br /> Our mission is to put AI into the hands of SME leaders
            — not just as a tool, but as a way to lead smarter, work better, and
            create more space for what truly matters.
            <br />
            <br /> We’ve seen firsthand how overwhelming AI can feel from the
            outside — all the tools, jargon, and promises. That’s why we focus
            on cutting through the noise, simplifying what works, and helping
            leaders build confidence through meaningful wins.
            <br />
            <br /> Because when leaders understand and use AI themselves, they
            don’t just transform workflows — they can transform their
            businesses.
          </p>
        </div>
        <Link href="/contact">
          <button
            type="button"
            className=" mt-10 bg-orange text-[14px] text-lightblue font-bold py-4 px-10 hover:bg-white hover:border-2 hover:border-orange hover:text-orange rounded-full shadow-sm"
          >
            GET IN TOUCH
          </button>
        </Link>
      </section>
      <section
        id="what-we-offer"
        className=" bg-lightblue pr-[80px] pt-32 md:mt-32"
      >
        <h2 className=" pl-[40px] md:pl-[90px] text-secondaryheadline font-extrabold text-orange">
          THE NEW WAY METHOD{" "}
        </h2>
        <div className=" pl-[40px] md:pl-[90px] flex flex-col md:flex-row md:gap-20 items-start">
          <div className="md:mb-10 w-full  md:w-[50%] lg:w-full ">
            <div className=" mt-7 ">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                Practical AI Support Designed for Founders & SME Leaders
              </h3>

              <p className="text-black">
                We design strategies that align with your unique goals,
                industry, and operational needs, ensuring AI enhances your your
                day to day without disrupting it.
              </p>
              <hr className="mt-3" />
            </div>
            <div className=" mt-3">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                AI-Assisted Content & Communication
              </h3>
              <p className="text-black">
                Build better, faster content with AI-driven prompts, templates,
                and support tools tailored to your voice, brand, and audience.
              </p>
              <hr className="mt-5" />
            </div>
            <div className=" mt-3">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                AI Strategy & Use Case Mapping
              </h3>
              <p className="text-black">
                Uncover where AI fits into your business and leadership
                workflow. We help you identify high-impact areas for automation,
                delegation, and decision support.
              </p>
              <hr className="mt-3" />
            </div>
          </div>
          <div className="w-full md:w-[50%] lg:w-full">
            <div className=" mt-3 md:mt-7">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                Workflow Optimization & Automation
              </h3>
              <p className="text-black">
                Streamline internal processes, outreach, and reporting using the
                right AI tools — designed to save time and reduce manual work
                for yourself or across the team.
              </p>
              <hr className="mt-3" />
            </div>
            <div className=" mt-3">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                Readiness Audits & Hands-On Guidance
              </h3>
              <p className="text-black">
                Not sure where to start? We’ll assess your current setup and
                walk you through simple steps to adopt and scale AI efficiently
                — leader-first, not tech-first.
              </p>
              <hr className="mt-3" />
            </div>
            <div className=" mt-3">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                Ethical and Regulatory Focus
              </h3>
              <p className="text-black">
                We ensure responsible AI integration by addressing governance,
                compliance, and ethical standards upfront. Adhering to GDPR,
                CCPA, HIPPA and more, we help businesses adopt AI confidently
                and sustainably.
              </p>
            </div>
          </div>
        </div>
        <Link href="/what-we-do">
          <button
            type="button"
            className="ml-[90px] mt-20 bg-orange text-[14px] text-lightblue font-bold py-4 px-10 hover:bg-white hover:border-2 hover:border-orange hover:text-orange rounded-full shadow-sm"
          >
            LEARN MORE
          </button>
        </Link>
        <div className=" bg-[url('./assets/ways-graphic.png')] bg-cover bg-center h-[500px] w-screen" />
      </section>
      <section className=" flex flex-col justify-center ">
        <div className="flex flex-col md:flex-row justify-between pt-20  lg:pr-[150px] md:pr-[40px] ">
          <h2 className="pl-[40px] md:pl-[90px] text-secondaryheadline font-extrabold text-orange">
            OUR PACKAGES
          </h2>
          <p className="md:w-[60%] w-[85%] pl-[40px] md:pl-0 text-black">
            We offer practical, tailored packages to help SME leaders adopt and
            apply AI with confidence — whether you’re exploring your first use
            case or ready to scale smarter systems across your business. From
            quick-start audits to hands-on workflow builds and leadership
            enablement, each package is built to solve real challenges, save
            time, and support better decision-making.
          </p>
        </div>
        <div className="xl:pl-[80px] pl-[20px] pr-[20px] gap-5 mt-32 text-center flex flex-col md:flex-row justify-center items-center gap-10 pb-[100px]">
          <div className="w-[300px] h-[450px] md:h-[470px] lg:h-[450px] flex flex-col justify-between text-white rounded-lg bg-orange p-5">
            <div>
              <h3 className="font-bold my-4 ">THE STARTER</h3>
              <h4 className="font-light text-[15px] pb-[25px]">
                Founders who are curious about AI but need help getting from 0
                to 1
              </h4>
              <p className="font-light">Readiness Assessment</p>
              <hr className="my-2" />
              <p className="font-light">Starter Use Case Plan</p>
              <hr className="my-2" />
              <p className="font-light">
                Recommendations & Implementation Guidance
              </p>
            </div>
            <div className="flex justify-end">
              <Link
                className=" flex items-center gap-5 text-sm font-light "
                href="/what-we-do#ignition"
              >
                MORE DETAILS
                <Image
                  alt="more details"
                  src={arrow}
                  width={20}
                  height={20}
                  className="w-[20px] lg:w-[30px]"
                />
              </Link>
            </div>
          </div>
          <div className="w-[300px] h-[450px] md:h-[470px] lg:h-[450px] flex flex-col justify-between text-white rounded-lg bg-orange p-5">
            <div>
              <h3 className="font-bold my-4 ">THE OPERATOR</h3>
              <h4 className="font-light text-[15px] pb-[25px]">
                Leaders who want to streamline internal ops, client processes,
                or outreach.
              </h4>
              <p className="font-light">Full AI Workflow Audit</p>
              <hr className="my-2" />
              <p className="font-light">Strategy & Design</p>
              <hr className="my-2" />
              <p className="font-light">Training & Toolkit</p>
            </div>
            <div className="flex justify-end">
              <Link
                className="flex items-center gap-5 text-sm font-light"
                href="/what-we-do#navigator"
              >
                MORE DETAILS
                <Image
                  alt="more details"
                  src={arrow}
                  className="w-[20px] lg:w-[30px]"
                />
              </Link>
            </div>
          </div>
          <div className="w-[300px] h-[450px] md:h-[470px] lg:h-[450px] flex flex-col justify-between text-white rounded-lg bg-orange p-5">
            <div>
              <h3 className="font-bold my-4 ">THE LEADER</h3>
              <h4 className="font-light text-[15px] pb-[25px]">
                Founders ready to scale AI across more of their business — and
                want a strategic partner
              </h4>
              <p className="font-light">AI Readiness Assessment</p>
              <hr className="my-2" />
              <p className="font-light">Implementation support </p>
              <hr className="my-2" />
              <p className="font-light">
                Workshops, Libraries & Long-Term Guidance
              </p>
              <hr className="my-2" />
              <p className="font-light">Tailored reporting and Optimisation</p>
            </div>
            <div className="flex justify-end">
              <Link
                className="flex items-center gap-5 text-sm font-light "
                href="/what-we-do#integrator"
              >
                MORE DETAILS
                <Image alt="more details" src={arrow} className="w-[30px]" />
              </Link>
            </div>
          </div>
          <div className="w-[300px] h-[450px] md:h-[470px] lg:h-[450px] flex flex-col justify-between text-white rounded-lg bg-orange p-5">
            <div>
              <h3 className="font-bold my-4 ">THE AGENT</h3>
              <p className="font-light">
                End-to-end project management and bespoke AI agents tailored to
                unique business needs
              </p>
            </div>
            <div className="flex justify-end">
              <Link
                className="flex items-center gap-5 text-sm font-light "
                href="/what-we-do#agent"
              >
                MORE DETAILS
                <Image
                  alt="more details"
                  src={arrow}
                  className="w-[20px] lg:w-[30px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-20 bg-lightblue md:mt-[80px] ">
        <h2 className="text-orange text-secondaryheadline font-extrabold text-center md:text-left md:pl-[90px] ">
          WHAT OUR CLIENTS SAY
        </h2>
        <ClientReviews />
      </section>
      <section>
        <FAQSection />
      </section>
      <section>
        <GetInTouch />
      </section>
    </main>
  );
}
