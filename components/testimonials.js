import Image from "next/image";
import Link from "next/link";

const Testimonials = () => {
  return (
    <section>
      <h2>Testimonials</h2>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row">
            <Image
              src="/images/aisha.png"
              width={44}
              height={44}
              alt="testimonial-image"
            />
            <div className="flex flex-row gap-5">
              <p>Aisha Yusuf</p>
              <p>Founder, CraftHub NG</p>
            </div>
          </div>
          <p>
            Working with Tobams Group on our website was a breeze. They
            understood our vision and transformed it into a beautiful online
            space. Highly recommend their Website Design service!
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-row">
            <Image
              src="/images/aisha.png"
              width={44}
              height={44}
              alt="testimonial-image"
            />
            <div className="flex flex-row gap-5">
              <p>Aisha Yusuf</p>
              <p>Founder, CraftHub NG</p>
            </div>
          </div>
          <p>
            Working with Tobams Group on our website was a breeze. They
            understood our vision and transformed it into a beautiful online
            space. Highly recommend their Website Design service!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
