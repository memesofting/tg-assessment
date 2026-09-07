import Image from "next/image";

const Management = () => {
  return (
    <section className="grid grid-cols-2 bg-[#2C0922] text-white">
      <div>
        <Image
          src="/images/management-image.jpg"
          width={602}
          height={346}
          alt="coporate-section-image"
        />
      </div>
      <div>
        <h3>Management Development Program</h3>
        <p>
          Tobams Group offers a comprehensive Management Development Program
          designed to equip corporate organisations with the high -performing
          leaders they need to thrive. Our program includes workshops, seminars,
          coaching sessions, online courses, and experiential learning
          opportunities designed to improve leadership, strategic thinking,
          communication, and other essential managerial competencies for
          corporate organisations.
        </p>
        <ul className="list-image-[url('/images/bolt.svg')] pl-6">
          <li className="bg-[#8F6182] m-5">Leadership Training</li>
          <li className="bg-[#8F6182] m-5">Strategic Planning and Implementation</li>
          <li className="bg-[#8F6182] m-5">Project Management</li>
          <li className="bg-[#8F6182] m-5">Sustainability Training</li>
          <li className="bg-[#8F6182] m-5">Customised Training</li>
        </ul>
      </div>
    </section>
  );
};

export default Management;
