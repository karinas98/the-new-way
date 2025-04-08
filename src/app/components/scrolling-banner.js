"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import carousel from "@/app/assets/what-we-offer-carousel-graphic.png";

export default function CarouselWithBanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    if (banner) {
      banner.innerHTML += banner.innerHTML;
    }
  }, []);

  return (
    <section className="relative bg-lightblue flex justify-center items-center py-20">
      <div className="relative overflow-hidden w-full flex justify-center">
        <Image
          src={carousel}
          alt=""
          className="w-full max-w-[3500px] min-w-[768px] object-cover"
          priority
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <div className="w-full overflow-hidden py-4">
            <div
              ref={bannerRef}
              className="flex whitespace-nowrap animate-scroll text-lightblue text-xl md:text-3xl 2xl:text-5xl font-semibold"
            >
              <span className="mx-10">Tailored AI Solutions</span>
              <span className="mx-10">Human-Centered Approach</span>
              <span className="mx-10">Vendor-Agnostic Guidance</span>
              <span className="mx-10">Simplifying Complexity</span>
              <span className="mx-10">Ethical and Regulatory Focus</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
