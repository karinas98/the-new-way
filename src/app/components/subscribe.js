import Image from "next/image";
import OrangeArrow from "@/app/assets/orange-arrow.png";
import cutGraphic from "@/app/assets/ways-graphic-cut.png";

export default function Subscribe() {
  return (
    <section className="h-[470px] flex bg-lightblue ">
      <div className="lg:w-[30%] md:w-[50%] w-[80%] pt-24 flex flex-col ml-[50px] md:ml-[130px]">
        <h2 className="text-orange text-secondaryheadline font-extrabold">
          STAY IN THE LOOP
        </h2>
        <p>
          Subscribe to get the latest updates on AI news, tips, and tools
          straight to your inbox. <br /> <br />
          Be the first to know when we release free templates, resources, and
          exclusive offers to help you navigate the world of AI with ease. Don’t
          miss out—sign up today!
        </p>
        <div className="relative w-[400px] h-[50px]">
          <input placeholder="EMAIL" className="mt-8  p-4 w-full " />
          <Image
            src={OrangeArrow}
            alt="Submit and Subscribe"
            className="w-[30px] absolute right-5 top-11"
          />
        </div>
      </div>
      <Image src={cutGraphic} alt="" />
    </section>
  );
}
