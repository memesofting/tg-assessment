import Image from "next/image";

const Corporate = () => {
  return (
    <section className="grid grid-cols-2">
      <div>
        <h3>Coporate Trainings</h3>
        <p>
          Empower your team with our customised Corporate Training programs
          designed to address the unique needs and objectives of your
          organisation. Our expert facilitators work closely with your team to
          deliver tailored learning experiences that align with your company's
          goals and values.
        </p>
        <ul className="list-image-[url('/images/bullet.svg')] pl-6">
          <li>Leadership Training</li>
          <li>Strategic Planning and Implementation</li>
          <li>Project Management</li>
          <li>Sustainability Training</li>
          <li>Customised Training</li>
        </ul>
      </div>
      <div>
        <Image
          src="/images/coporate-image.jpg"
          width={602}
          height={346}
          alt="coporate-section-image"
        />
      </div>
    </section>
  );
};

export default Corporate;
