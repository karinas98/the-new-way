import Image from "next/image";
import Link from "next/link";
import OrangeArrow from "@/app/assets/orange-arrow.png";

export default function GetInTouch() {
  return (
    <section className="md:h-[420px] lg:pt-32 mb-32 pt-[100px] ">
      <div className="lg:w-[48%] XL:w-[42%] md:w-[50%] bg-lightblue flex flex-col mx-[20px] md:ml-[90px] p-10 rounded-lg  ">
        <div>
          <h2 className="text-orange text-secondaryheadline font-extrabold ">
            DISCOVER WHAT'S POSSIBLE
          </h2>
          <p>
            Got questions about AI or ideas you want to bring to life? Let’s
            chat! <br />
            <br />
            Whether you’re exploring options or ready to dive in, we’re here to
            help make AI simple, approachable, and impactful for your business.
          </p>
        </div>
        <div className="flex justify-end pt-10">
          <Link href="/contact">
            <Image
              alt="Go to contact page"
              src={OrangeArrow}
              className="w-[40px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
