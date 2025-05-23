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
          <section className="h-screen flex flex-col bg-black bg-opacity-60 items-center justify-center px-[45px] md:pl-[85px]  ">
            <div className="relative rounded-full px-10 mb-5 font-light py-2 text-sm/6 md:text-md/6 text-white ring-1 ring-[#ABD2FA]/30 hover:ring-white/20">
              DISCOVER THE NEW WAY
              <a
                href="#what-we-offer"
                className="font-semibold hover:text-white text-[#ABD2FA] ml-6 "
              >
                <span className="absolute inset-0" aria-hidden="true" />
                LEARN MORE <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <h1 className=" text-[52px] text-white  leading-[60px] md:text-title text-center font-bold w-full md:w-[90%] lg:w-[70%] xl:w-[65%] 2xl:w-[50%] xl:text-[55px] xl:leading-[70px]">
              Get Ready For What's To Come
            </h1>
            <h2 className=" text-[25px] text-white text-center  font-extralight w-full md:w-[90%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] xl:text-[30px]">
              We help you clean up your operations and build the clarity you
              need to scale.
            </h2>
          </section>
        </div>
      </div>
      <section className=" pl-[40px] md:pl-[90px] pr-[30px] md:pr-[80px] lg:w-[55%]  h-full w-[90%] pt-60 pb-32 md:pb-10  ">
        <div>
          <h2 className="text-secondaryheadline font-extrabold text-orange">
            WHO WE ARE
          </h2>
          <p className="pt-5 text-black">
            We’re a consultancy built to help businesses get ready for AI and
            automation — by starting with the foundations that matter most:{" "}
            <span className="font-bold">
              your data, your internal knowledge, and your systems.
            </span>
            <br /> <br />
            Our mission is simple <br />
            <span className="font-semibold">
              Get your core systems in order and help you think strategically
              about growth{" "}
            </span>{" "}
            — so when it comes time to integrate AI and automation, you’re ready
            to do it with intention, not impulse.
            <br />
            <br />
            We focus on what your business actually needs: clean data, clear
            workflows, aligned teams, and a roadmap that supports long-term
            growth
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
        className=" bg-lightblue md:pr-[20px] pt-32 md:mt-32"
      >
        <div className="flex flex-col md:flex-row justify-between pt-20  lg:pr-[150px] md:pr-[40px] ">
          <h2 className=" pl-[40px] md:pl-[90px] text-secondaryheadline font-extrabold text-orange">
            THE NEW WAY METHOD
          </h2>
          <p className="md:w-[60%] w-[85%] pl-[40px] md:pl-0 text-black">
            We focus of 3 main stages of growth -{" "}
            <span className="font-bold">
              Data & Systems Readiness, Workflow Optimisation & Automation,
              Strategy & AI Road Mapping
            </span>{" "}
            <br />
            <br />
            Our structured approach to help businesses clean up operations,
            align teams, and prepare for real growth — with or without AI.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 px-5 mt-32 text-center pb-[100px]">
          <div className=" w-[350px] md:w-[450px] h-[500px] md:h-[470px] lg:h-[450px] flex flex-col justify-between text-white rounded-2xl bg-orange p-5">
            <div>
              <h3 className="font-bold my-4 ">Data & Systems Readiness</h3>
              <h4 className="font-light text-[15px] pb-[25px]">
                We organize the messy middle: scattered data, outdated CRMs, and
                undocumented processes — so you can make clear decisions and
                scale without chaos.
              </h4>
              <p className="font-light">Data audits & integrations</p>
              <hr className="my-2" />
              <p className="font-light">
                Field mapping, duplication cleanup, system handover
              </p>
              <hr className="my-2" />
              <p className="font-light">SOP & documentation framework setup</p>
            </div>
            <div className="flex justify-center">
              <Link
                className="flex items-center rounded-full bg-white text-orange px-5 py-3 gap-5 text-md font-light "
                href="#contact"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
          <div className="w-[350px] md:w-[450px] h-[500px] md:h-[470px] lg:h-[450px] flex flex-col justify-between text-white rounded-2xl bg-orange p-5">
            <div>
              <h3 className="font-bold my-4 ">
                Workflow Optimisation & Automation
              </h3>
              <h4 className="font-light text-[15px] pb-[25px]">
                We streamline the tasks, handoffs, and recurring processes — and
                turn them into workflows that run with minimal effort.
              </h4>
              <p className="font-light">Workflow mapping + SOP creation</p>
              <hr className="my-2" />
              <p className="font-light">
                Automation design using existing tools or custom workflows
              </p>
              <hr className="my-2" />
              <p className="font-light">AI agent integration if needed</p>
            </div>
            <div className="flex justify-center">
              <Link
                className="flex items-center rounded-full bg-white text-orange px-5 py-3 gap-5 text-md font-light "
                href="#contact"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
          <div className="w-[350px] md:w-[450px] h-[500px] md:h-[470px] lg:h-[450px] flex flex-col justify-between text-white rounded-2xl bg-orange p-5">
            <div>
              <h3 className="font-bold my-4 ">Strategy & Road Mapping</h3>
              <h4 className="font-light text-[15px] pb-[25px]">
                Once your systems are solid, we shift the focus to strategy —
                defining where automation and AI will drive the most impact, and
                guiding you through implementation, rollout, and performance
                tracking.{" "}
              </h4>
              <p className="font-light">Leadership-level use case mapping</p>
              <hr className="my-2" />
              <p className="font-light">AI governance and team enablement</p>
              <hr className="my-2" />
              <p className="font-light">
                Prompt libraries, training, and internal playbooks
              </p>
              <hr className="my-2" />
              <p className="font-light">
                Implementation Guidance & Performance Tracking
              </p>
            </div>
            <div className="flex justify-center ">
              <Link
                className="flex items-center rounded-full bg-white text-orange px-5 py-3 gap-5 text-md font-light "
                href="#contact"
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-[url('./assets/ways-graphic.png')] bg-cover bg-center h-[500px] w-screen" />
      </section>

      <section className=" bg-white md:mt-[80px] ">
        <h2 className="text-orange text-secondaryheadline font-extrabold text-center md:text-left md:pl-[90px] ">
          WHAT OUR CLIENTS SAY
        </h2>
        <ClientReviews />
      </section>
      <section>
        <FAQSection />
      </section>
      <section id="contact">
        <GetInTouch />
      </section>
    </main>
  );
}
