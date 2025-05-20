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
            <h1 className=" text-[52px] text-white  leading-[60px] md:text-title font-normal lg:text-black w-full md:w-[90%] lg:w-[70%] xl:w-[40%] 2xl:w-[50%] xl:text-[55px] xl:leading-[70px]">
              WE BRING CLARITY TO THE USE OF AI & WORKFLOW AUTOMATION FOR BETTER
              RESULTS
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
                    STRATEGY FIRST & TECH SECOND
                  </span>
                </button>
              </Link>
              <Link href="/#what-we-offer">
                <button
                  type="button"
                  className="w-[220px]  bg-white text-[14px] text-orange py-2 px-4 rounded-full shadow-sm hover:before:bg-orange relative overflow-hidden  shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange before:transition-all before:duration-500  hover:text-white hover:shadow-orange hover:before:left-0 hover:before:w-full"
                >
                  <span className="relative z-10 font-semibold">
                    BESPOKE SOLUTIONS <br /> FOR YOUR GOALS
                  </span>
                </button>
              </Link>
              <Link href="/#what-we-offer">
                <button
                  type="button"
                  className="w-[220px] bg-white text-[14px] text-orange py-2 px-4 rounded-full shadow-sm hover:before:bg-orange relative overflow-hidden  shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange before:transition-all before:duration-500  hover:text-white hover:shadow-orange hover:before:left-0 hover:before:w-full"
                >
                  <span className="relative z-10 font-semibold">
                    ETHICS & SECURITY <br /> IN MIND
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
            organisations navigate the complexities of AI & Automation adoption
            with clarity and confidence.
            <br /> <br />
            We help identify opportunities, define realistic use cases, create a
            phased AI and automation roadmap and guide you through the process
            of implementation and training.
            <br />
            <br />
            We specialize in equipping businesses with the knowledge,
            strategies, and tools to harness AI & Automation effectively
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
            Our mission is to use AI effectively and strategically where it
            brings value — and show you where AI & workflow automation can truly
            help.
            <br />
            <br /> We’ve seen firsthand how overwhelming AI can feel from the
            outside — all the tools, jargon, and promises. That’s why we focus
            on cutting through the noise, simplifying what works, and helping
            businesses build confidence through meaningful wins.
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
          THE NEW WAY METHOD
        </h2>
        <div className=" pl-[40px] md:pl-[90px] flex flex-col md:flex-row md:gap-20 items-start">
          <div className="md:mb-10 w-full  md:w-[50%] lg:w-full ">
            <div className=" mt-7 ">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                Personalised Practical AI Support
              </h3>

              <p className="text-black">
                We design strategies that align with your unique goals,
                industry, and operational needs.
              </p>
              <hr className="mt-3" />
            </div>
            <div className=" mt-3">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                Assisted Content Creation & Communication
              </h3>
              <p className="text-black">
                We help educate on building better, faster content through
                prompt engineering by delivering templates, training and support
                tools to get back the accurate and quality outputs.
              </p>
              <hr className="mt-5" />
            </div>
            <div className=" mt-3">
              <h3 className="text-orange mb-2 text-[18px] font-semibold">
                AI Strategy & Use Case Mapping
              </h3>
              <p className="text-black">
                Uncover where AI & automation fits into your business and your
                leadership workflow. We help you identify high-impact areas for
                automation, delegation, and decision support.
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
            We offer practical, tailored packages to help businesses adopt and
            apply AI with confidence — whether you’re ready to scale smarter
            systems across your business or need help fixing systems that are
            creating more problems than solutions. From quick-start audits to
            hands-on workflow builds and leadership enablement, each package is
            built to solve real challenges, create better efficiency, and
            support better decision-making.
          </p>
        </div>
        <div className="xl:pl-[80px] pl-[20px] pr-[20px] gap-5 mt-32 text-center flex flex-col md:flex-row justify-center items-center gap-10 pb-[100px]">
          <div className="w-[300px] h-[450px] md:h-[470px] lg:h-[450px] flex flex-col justify-between text-white rounded-lg bg-orange p-5">
            <div>
              <h3 className="font-bold my-4 ">THE STARTER</h3>
              <h4 className="font-light text-[15px] pb-[25px]">
                You are curious about AI but need help getting from 0 to 1
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
                You an SME and want to streamline internal ops, client
                processes, or outreach.
              </h4>
              <p className="font-light">Full Workflow Audit</p>
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
                You are ready to scale and want to be more efficiency and
                organised about how you tailor your systems — and want a
                strategic partner
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
                You are an established organisation and need bespoke solutions
                tailored to fixing your current workflows & systems and want to
                adapt new strategies based on your unique business needs
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
