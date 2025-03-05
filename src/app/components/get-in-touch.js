import ContactBanner from "./contact-form";

export default function GetInTouch() {
  return (
    <section className="lg:px-32 mb-32 w-full pt-[100px]  ">
      <div className=" bg-lightblue items-center flex justify-evenly  p-10 rounded-lg  ">
        <div>
          <h2 className="text-orange text-secondaryheadline leading-8 mb-10 font-extrabold ">
            DISCOVER WHAT'S POSSIBLE
          </h2>
          <p className="text-black mt-4 text-sm md:text-md lg:text-lg w-full max-w-lg">
            Got questions about AI or ideas you want to bring to life? Let’s
            chat! <br />
            <br />
            Whether you’re exploring options or ready to dive in, we’re here to
            help make AI simple, approachable, and impactful for your business.
          </p>
        </div>
        <div className="flex justify-end pt-10">
          <ContactBanner />
        </div>
      </div>
    </section>
  );
}
