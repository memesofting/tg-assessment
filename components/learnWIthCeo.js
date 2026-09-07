import Image from "next/image";
import Link from "next/link";
import LearnMore from "./learnMore";

const LearnWithCeo = () => {
  return (
    <section className="bg-[#EF435333]">
      <p>Learning With Our CEO:</p>
      <h3>Transformation Hub With Jite Newton</h3>
      <p>
        Transformation Hub with Jite Newton is a flagship webinar series curated
        by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and
        leadership capabilities, this exclusive event offers invaluable insights
        and strategies for personal and professional growth. Whether you're
        seeking to advance your career or enhance your leadership skills, the
        Transformation Hub provides a transformative learning experience to
        unlock your full potential and drive success in your endeavours.
      </p>
      <div>
        <Image
          src="/images/learn-with-ceo-image.jpg"
          width={560}
          height={340}
          alt="learn with ceo image"
        />
        <ul>
          <li>Strategic Career Guidance</li>
          <li>Leadership Development</li>
          <li>CV Development</li>
          <li>Sustainability Leadership</li>
          <li>Communication Skills</li>
          <li>Business Model</li>
        </ul>
        <LearnMore />
      </div>
    </section>
  );
};

export default LearnWithCeo;
