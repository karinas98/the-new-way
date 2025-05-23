import Image from "next/image";
import Link from "next/link";
import logoBeige from "@/app/assets/logo-beige.png";
import linkedin from "@/app/assets/linkedin-logo.png";
import x from "@/app/assets/twitter-icon.png";
import email from "@/app/assets/email-icon.png";

export default function Footer() {
  return (
    <footer className=" h-[430px] bg-orange p-[40px] pl-[40px] md:pl-[80px] flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src={logoBeige}
            alt="New Way logo"
            href="/"
            className="w-[250px]"
          />
        </Link>
        <div
          className="flex  gap-2 md:gap-4 md:pr-10
         "
        >
          <Link href="https://www.linkedin.com/in/karina-savoie/">
            <Image
              src={linkedin}
              className="w-[40px] h-[40px]"
              width={10}
              height={10}
              alt="linkedin profile"
            />
          </Link>
          <Link href="https://x.com/TheAIWhisperer_">
            <Image
              src={x}
              className="w-[40px] h-[40px]"
              width={10}
              height={10}
              alt="Twitter profile"
            />
          </Link>
          <a href="mailto:karina.savoie@new-way.ai">
            <Image
              src={email}
              className="w-[40px] h-[40px]"
              alt="Email"
              width={10}
              height={10}
            />
          </a>
        </div>
      </div>

      <div>
        <div className=" flex gap-[50px] text-white font-bold md:text-[14px] text-[11px] pb-5 ">
          <Link className="hover:text-grey" href="/who-we-are">
            WHO WE ARE
          </Link>
          <Link className="hover:text-grey" href="/contact">
            CONTACT
          </Link>
        </div>
        <hr className="bg-white" />
        <div className="flex justify-between items-center pt-5 text-[14px]">
          <p className="font-light  text-white">THE NEW WAY CONSULTANCY</p>
          <div className="flex gap-5 text-white font-semibold">
            <Link className="hover:text-grey" href="/privacy-policy">
              PRIVACY POLICY
            </Link>
            <Link className="hover:text-grey" href="/faq">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
