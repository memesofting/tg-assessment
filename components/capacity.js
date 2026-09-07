import Image from "next/image";

const Capacity = () => {
  return (
    <section className="grid grid-cols-2">
      <div>
        <h3>Capacity Development</h3>
        <p>
          At Tobams Group, we empower individuals and organizations through
          tailored training programs, expert-led workshops, and personalized
          mentorship. We are committed to your success and growth. We are
          dedicated to providing a comprehensive suite of benefits designed to
          foster your development and success:
        </p>
        <ul className="list-image-[url('/images/bullet.svg')] pl-6">
          <li>Tailored Training Programs</li>
          <li>Expert Led Workshops</li>
          <li>Personalised Mentorship</li>
          <li>Technical Skills Enhancement</li>
          <li>Collaborative Learning Environment</li>
          <li>Ongoing Support and Resources</li>
        </ul>
      </div>
      <div>
        <Image
          src="/images/capacity-image.jpg"
          width={602}
          height={346}
          alt="coporate-section-image"
        />
      </div>
    </section>
  );
};

export default Capacity;
