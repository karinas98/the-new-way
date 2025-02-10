import Image from "next/image";
import OrangeArrow from "@/app/assets/orange-arrow.png";
import cutGraphic from "@/app/assets/ways-graphic-cut.png";

export default function Subscribe() {
  return (
    <section className="bg-lightblue flex flex-col md:flex-row items-center justify-between py-10 px-6 md:px-16 lg:px-32">
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left">
        <h2 className="text-orange text-2xl md:text-secondaryheadline font-extrabold">
          STAY IN THE LOOP
        </h2>
        <p className="mt-4 text-sm md:text-base  lg:text-lg w-full max-w-lg">
          Subscribe to get the latest updates on AI news, tips, and tools
          straight to your inbox. <br /> <br />
          Be the first to know when we release free templates, resources, and
          exclusive offers to help you navigate the world of AI with ease. Don’t
          miss out—sign up today!
        </p>

        {/* Input Field & Button */}
        <div className="relative w-full max-w-md mt-6">
          <input
            type="email"
            placeholder="EMAIL"
            className="p-4 w-full border border-orange rounded-md focus:outline-none focus:ring-2 focus:ring-orange"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Image
              src={OrangeArrow}
              alt="Submit and Subscribe"
              width={30}
              height={30}
            />
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Image
          src={cutGraphic}
          alt="Graphic"
          className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] object-contain"
        />
      </div>
    </section>
  );
}
