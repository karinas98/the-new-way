import Image from "next/image";
import Link from "next/link";
import kalroLogo from "@/app/assets/kalro-logo.png";
import entLogo from "@/app/assets/london-ent-clinic.png";

export default function ClientReviews() {
  const reviews = [
    {
      quote:
        "AI-powered automation has completely changed how we source sites. What used to take hours of manual research is now streamlined into minutes, giving us more time to focus on high-value decisions. With The New Way, we’ve built an automated outreach process that not only reduces repetitive tasks but also improves accuracy and speeds up deal flow. The impact was immediate—better insights, faster results, and a smarter way to scale.",
      logo: kalroLogo,
      clientLink: "https://www.kalrocapital.com/",
    },
    {
      quote:
        "The New Way helped us stay organized and efficient. Keeping track of patient information and managing schedules is now seamless. With AI-powered transcription and insights, we can automatically capture key details, determine next steps, and streamline meetings. This allows us to focus more on our patients while reducing administrative workload and improving overall accuracy.",
      logo: entLogo,
      clientLink: "https://londonentclinic.com/",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 lg:px-32 pb-32 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center lg:items-stretch w-full max-w-6xl">
        {reviews.map((review) => (
          <div
            key={review.clientLink}
            className="bg-lightblue p-12 rounded-[30px] border-[1px] border-orange shadow-xl flex flex-col items-center text-center w-full lg:w-1/2 h-full md:h-[500px] transition-all duration-300 ease-in-out hover:-translate-y-2"
          >
            <p className="text-md md:text-lg font-light text-orange w-full mx-auto flex-1 flex items-center justify-center">
              "{review.quote}"
            </p>
            <div>
              <Link href={review.clientLink}>
                <Image
                  src={review.logo}
                  alt="Client Logo"
                  width={180}
                  height={60}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
