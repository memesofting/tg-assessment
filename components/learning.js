import Image from "next/image";
import Link from "next/link";
import LearnMore from "./learnMore";

const Learning = () => {
  return (
    <section className="flex flex-row bg-[#5712441A]">
      <Image
        src="/images/learning.jpg"
        width={556.88}
        height={568}
        alt="lms-image"
        className=""
      />
      <div>
        <h2>Learning Management System</h2>
        <div>
          <p>
            TG Academy is a hub of knowledge and skill-building resources
            designed to empower tech talents on their learning journey. From
            technical courses covering the latest programming languages and
            development frameworks to soft skills training in leadership,
            effective communication and project management, TG Academy offers a
            wide range of courses to cater to diverse learning needs. With
            accessible and interactive learning materials, individuals can
            enhance their skills and stay ahead in today's competitive tech
            landscape.
          </p>
          <div>
            <h4>Some of our courses include:</h4>
            <ul className="flex flex-row flex-wrap list-disc pl-6">
              <li>Business Analysis</li>
              <li>Design Thinking</li>
              <li>Effective Communication</li>
              <li>Entrepreneurship</li>
              <li>Career Development</li>
              <li>Business Model</li>
            </ul>
          </div>
        </div>
        <LearnMore />
      </div>
    </section>
  );
};

export default Learning;
