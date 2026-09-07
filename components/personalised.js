import Image from "next/image";

const Personalised = () => {
  return (
    <section className="grid grid-cols-2">
      <div>
        <Image
          src="/images/serious-people.jpg"
          width={602}
          height={346}
          alt="coporate-section-image"
        />
      </div>
      <div>
        <h3>Coporate Trainings</h3>
        <p>
          Begin a journey of lifelong learning and professional development with
          Tobams Group's diverse range of training programs for individuals.
          From technical skills mastery to soft skills enhancement, our courses
          cover a wide spectrum of topics to meet the evolving needs of today's
          professionals.
        </p>
        <ul className="list-image-[url('/images/bullet.svg')] pl-6">
          <li>Leadership Development</li>
          <li>Soft Skills Development</li>
          <li>Industry Specific Knowledge</li>
          <li>Technical Skills Enhancement</li>
          <li>Time Management and Productivity</li>
          <li>Career Development</li>
        </ul>
      </div>
    </section>
  );
};

export default Personalised;
