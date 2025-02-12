"use client";

import Nav from "../components/nav";
import Image from "next/image";
import Link from "next/link";
import keyIcon from "@/app/assets/key-icon.png";
import lockIcon from "@/app/assets/lock-icon.png";
import resultsIcon from "@/app/assets/results-icons.png";
import profilePic from "@/app/assets/profile-karina.png";
import linkedinBlack from "@/app/assets/linkedin-black.png";
import GetInTouch from "../components/get-in-touch";
import ClientReviews from "../components/client-reviews";

export default function WhoWeAre() {
  return (
    <main>
      <div className="relative bg-[url('./assets/graphic2.png')] bg-cover bg-center md:bg-right-bottom h-screen">
        <Nav />
        <section className="h-screen flex flex-col justify-end px-[45px] md:px-[80px]">
          <div className="flex  flex-col lg:flex-row lg:items-center lg:justify-evenly ">
            <h1 className=" text-[45px]  md:text-title font-light text-orange xl:text-[60px] ">
              WHO WE ARE
            </h1>
            <p className="pt-10 pb-32 md:w-[75%] xl:w-[35%] text-black">
              We’re a committed team focused on helping businesses make sense of
              AI in a rapidly evolving technological landscape. We understand
              that navigating the possibilities and challenges of AI requires
              the right guidance and a clear path forward. <br />
              <br />
              We want you to feel confident in keeping up with the evolution of
              AI while staying at the forefront of innovation. <br /> <br />
              Our mission is to help businesses explore AI with clarity and
              control, ensuring you’re always driving your organisation in the
              direction you envision.
            </p>
          </div>
        </section>
      </div>
      <section className="bg-lightblue h-full pr-[80px] pt-20 md:mt-32 pb-20">
        <h2 className=" pl-[45px] md:pl-[90px] text-secondaryheadline font-extrabold text-orange 2xl:text-[35px]">
          HOW WE WORK
        </h2>
        <div className=" pl-[45px] md:pl-[90px] pt-10 ">
          <div className=" w-full  flex flex-col md:flex-row md:gap-20 lg:w-full  items-start md:pb-20 ">
            <div className=" mt-7 mb-10 md:flex md:flex-col md:items-center md:text-center ">
              <Image
                alt="transparency is key"
                src={keyIcon}
                className="w-[60px] pb-5"
              />
              <h3 className="text-orange text-[20px] font-semibold pb-5 2xl:text-[25px]">
                Transparency is Key
              </h3>

              <p className="lg:w-[80%] 2xl:text-[20px] text-black">
                We believe AI doesn’t have to be complicated. We break it down,
                keep it straightforward, and focus on what actually works for
                you.
              </p>
            </div>
            <div className=" mt-7 mb-10 md:flex md:flex-col md:items-center md:text-center ">
              <Image
                src={lockIcon}
                alt="Ethics & Privacy Always"
                className="w-[60px] pb-5"
              />
              <h3 className="text-orange text-[20px] font-semibold pb-5 2xl:text-[25px]">
                Ethics & Privacy Always
              </h3>
              <p className="  lg:w-[80%] 2xl:text-[20px] text-black">
                AI should help, not harm. We’re committed to solutions that are
                responsible, fair, and built with integrity at every step.
              </p>
            </div>
            <div className="mt-7 mb-10 md:flex md:flex-col md:items-center md:text-center">
              <Image
                src={resultsIcon}
                alt="Results matter"
                className="w-[60px] pb-5"
              />
              <h3 className="text-orange text-[20px] font-semibold pb-5 2xl:text-[25px]">
                Results Matter
              </h3>
              <p className=" lg:w-[80%] 2xl:text-[20px] text-black">
                It’s not about using tech for the sake of it—it’s about
                meaningful improvements that keep your business competitive and
                ready for what’s next.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[500px] bg-orange flex justify-center text-white py-32 px-10 flex items-center ">
        <h2 className="text-[28px] font-extralight text-center md:w-[75%] md:text-[32px] lg:w-[60%] lg:text-[38px] lg:w-[40%] 2xl:text-[42px]">
          “AI is the future, and those who embrace it today will shape the
          future of business and success tomorrow.”
        </h2>
      </section>
      <section className="flex flex-col p-20 md:flex-row md:gap-10 lg:gap-20 md:items-center lg:justify-center">
        <div className="flex flex-col">
          <Image
            src={profilePic}
            alt="Image of Karina"
            className=" rounded-[6px]"
          />
        </div>
        <div className="md:w-[90%] lg:w-[70%]">
          <div className="flex mt-10 gap-5 items-center md:mt-0 ">
            <h2 className="text-orange font-semibold text-[26px] lg:text-[32px]">
              Karina Savoie
            </h2>
            <Link href="https://www.linkedin.com/in/karina-savoie/">
              <Image
                src={linkedinBlack}
                width={30}
                alt=" Karina Savoie Linkedin Profile "
              />
            </Link>
          </div>
          <h3 className="font-light mb-10 text-[18px] lg:text-[20px]">
            Founder & CEO
          </h3>
          <p className="md:text-[14px] lg:text-[18px] lg:w-[70%] 2xl:w-[50%]">
            She is a software engineer at the forefront of AI and emerging
            technologies, dedicated to bridging the gap between innovation and
            real-world application. With a strong technical background and a
            talent for communication, She excels at making complex AI concepts
            accessible and actionable for businesses and individuals. <br />
            <br />
            Driven by a deep understanding of people’s unique challenges and
            needs, She combines technical expertise with a human-centered
            approach, specializing in translating the possibilities of AI into
            practical solutions that help organisations navigate and embrace
            change with confidence.
          </p>
        </div>
      </section>
      <section className="pt-20 bg-lightblue md:mt-[80px] ">
        <h2 className="text-orange text-secondaryheadline font-extrabold pl-[90px] ">
          WHAT OUR CLIENTS SAY
        </h2>
        <ClientReviews />
      </section>
      <GetInTouch />
    </main>
  );
}
