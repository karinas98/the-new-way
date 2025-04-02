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
            <h1 className=" text-[52px] text-white  leading-[60px] md:text-title font-normal lg:text-orange w-full md:w-[90%] lg:w-[50%] xl:w-[35%] 2xl:w-[40%] xl:text-[55px] xl:leading-[70px]">
              Better AI choices start with better guidance
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
            We’re a forward-thinking AI consultancy dedicated to helping
            businesses navigate the complexities of AI adoption with clarity and
            confidence. <br /> <br />
            Our mission is to help you approach AI’s potential with practical
            solutions and strategies that drive results, saves time, and
            enhances efficiency and productivity across your business
            operations.
          </p>
        </div>
        <div className="mt-[100px]">
          <h2 className="text-secondaryheadline font-extrabold text-orange">
            WHY WE DO THIS
          </h2>
          <p className="pt-5 text-black">
            AI has the potential to transform industries, but knowing where to
            begin and how to integrate it into your organisation can be a
            challenge. Every business, regardless of technical expertise, should
            have the opportunity to explore what AI can offer.
            <br />
            <br /> We focus on providing ethical, vendor-agnostic guidance to
            help overcome the common challenges—whether it’s understanding
            regulations, managing data complexities, training teams, clarifying
            ROI, or creating a thoughtful plan to get started. <br />
            <br />
            Our aim is to make AI practical and meaningful, helping
            organisations keep pace in a rapidly evolving technological world.
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
          WHAT WE OFFER
        </h2>
        <div className=" pl-[40px] md:pl-[90px] flex flex-col md:flex-row md:gap-20 items-start">
          <div className="md:mb-10 w-full  md:w-[50%] lg:w-full ">
            <div className=" mt-7 ">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                Tailored AI Solutions
              </h3>

              <p className="text-black">
                We design strategies that align with your unique goals,
                industry, and operational needs, ensuring AI enhances your
                business without disrupting it.
              </p>
              <hr className="mt-3" />
            </div>
            <div className=" mt-3">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                Human-Centered Approach
              </h3>
              <p className="text-black">
                Our solutions prioritise people, balancing technological
                advancements with ethical considerations and change management
                to foster trust and adoption.
              </p>
              <hr className="mt-5" />
            </div>
            <div className=" mt-3">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                Vendor-Agnostic Guidance
              </h3>
              <p className="text-black">
                We recommend the best tools and platforms for your needs, done
                by throughout research and eval, to deliver maximum value and
                ROI.
              </p>
              <hr className="mt-3" />
            </div>
          </div>
          <div className="w-full md:w-[50%] lg:w-full">
            <div className=" mt-3 md:mt-7">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                Simplifying Complexity
              </h3>
              <p className="text-black">
                We simplify AI with clear, actionable insights and step-by-step
                support, making advanced technology accessible and
                understandable.
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
            We offer tailored packages designed to guide businesses through
            every stage of AI adoption—whether you're just starting or ready to
            scale. From quick-win assessments to comprehensive implementation
            and governance strategies, our solutions address your unique
            challenges.
          </p>
        </div>
        <div className="xl:pl-[80px] pl-[20px] pr-[20px] gap-5 mt-32 text-center flex flex-col md:flex-row justify-center items-center gap-10 pb-[100px]">
          <div className="w-[300px] h-[400px] md:h-[430px] lg:h-[400px] flex flex-col justify-between text-white rounded-lg bg-orange p-5">
            <div>
              <h3 className="font-bold my-4 ">THE IGNITION</h3>
              <p className="font-light">AI Readiness Assessment</p>
              <hr className="my-2" />
              <p className="font-light">
                Tailored recommendations for quick wins
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
          <div className="w-[300px] h-[400px] md:h-[430px] lg:h-[400px] flex flex-col justify-between text-white rounded-lg bg-orange p-5">
            <div>
              <h3 className="font-bold my-4 ">THE NAVIGATOR</h3>
              <p className="font-light">AI Readiness Assessment</p>
              <hr className="my-2" />
              <p className="font-light">Vendor-Agnostic Solution Guidance </p>
              <hr className="my-2" />
              <p className="font-light">Change Management Strategy </p>
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
          <div className="w-[300px] h-[400px] md:h-[430px] lg:h-[400px] flex flex-col justify-between text-white rounded-lg bg-orange p-5">
            <div>
              <h3 className="font-bold my-4 ">THE INTEGRATOR</h3>
              <p className="font-light">AI Readiness Assessment</p>
              <hr className="my-2" />
              <p className="font-light">Vendor-Agnostic Solution Guidance </p>
              <hr className="my-2" />
              <p className="font-light">Change Management Strategy </p>
              <hr className="my-2" />
              <p className="font-light">
                Governance & Ethical AI Advisory and Training
              </p>
            </div>
            <div className="flex justify-end">
              <Link
                className="flex items-center gap-5 text-sm font-light "
                href="/what-we-do#integrator"
              >
                MORE DETAILS
                <Image
                  alt="more details"
                  src="./assets/arrow.png"
                  className="w-[30px]"
                />
              </Link>
            </div>
          </div>
          <div className="w-[300px] h-[400px] md:h-[430px] lg:h-[400px] flex flex-col justify-between text-white rounded-lg bg-orange p-5">
            <div>
              <h3 className="font-bold my-4 ">THE AGENT</h3>
              <p className="font-light">
                End-to-end project management and bespoke AI solutions tailored
                to unique business needs
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
