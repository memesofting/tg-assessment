import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col">
      <section>
        <p>Ready to be a part of something extraordinary?</p>
        <h3>Let’s work together to create a difference</h3>
        <Link href="">Get In Touch</Link>
      </section>
      <section className="grid grid-cols-4 gap-3">
        <div>
          <Image
            src="/Seecondary Logo copy 2.svg"
            loading="eager"
            width={200}
            height={100}
            alt="tobams-group logo"
          />
          <p>
            Tobams Group is an innovative consultancy firm reshaping the future
            of tech talent development in Africa, specializing in talent
            acquisition, internships, and skill development with a global
            perspective.
          </p>
          <div className="flex flex-row">
            <Image
              src="/images/ri_linkedin-fill.svg"
              width={40}
              height={40}
              alt="linkedin logo"
            />
            <Image
              src="/images/ri_instagram-fill.svg"
              width={40}
              height={40}
              alt="linkedin logo"
            />
            <Image
              src="/images/line-md_twitter-x.svg"
              width={40}
              height={40}
              alt="linkedin logo"
            />
          </div>
        </div>
        <div>
          <h4>What We Do</h4>
          <p>Sustainability Services</p>
          <p>Strategy Planning and Implementation</p>
          <p>Tech Talent Solutions</p>
          <p>Training and Development</p>
          <p>IT Consulting Services</p>
          <p>Social Impact</p>
          <p>Talent Recruitment</p>
        </div>
        <div>
          <h4>Company</h4>
          <p>About</p>
          <p>Jobs</p>
          <p>Projects</p>
          <p>Our Founder</p>
          <p>Business Model</p>
          <p>The Team</p>
          <p>Contact Us</p>
          <p>Blog</p>
          <p>FAQs</p>
          <p>Testimonials</p>
        </div>
        <div>
          <h4>Solution</h4>
          <p>Tobams Group Academy</p>
          <p>Help a Tech Talent</p>
          <p>Campus Ambassadors Program</p>
          <p>Join Our Platform</p>
          <p>Pricing</p>
          <p>Book a Consultation</p>
          <p>Join Our Slack Community</p>
        </div>
      </section>
      <section>
        <div>
          <h4>Registered Offices</h4>
          <div>
            <p>United Kingdom</p>
            <p>
              07451196 (Registered by Company House) Vine Cottages, 215 North
              Street, Romford, Essex, United Kingdom, RM1 4QA
            </p>
          </div>
          <div>
            <p>Nigeria</p>
            <p>
              RC 1048722 (Registered by the Corporate Affairs Commission) 4,
              Muaz Close, Angwar-Rimi
            </p>
          </div>
        </div>
        <div>
          <h4>Contact Information</h4>
          <div>
            <Image
              src="/images/material-symbols_mail.svg"
              width={24}
              height={24}
              alt=""
            />
            <p>theteam@tobamsgroup.com</p>
          </div>
          <div>
            <Image
              src="/images/ic_round-phone.svg"
              width={24}
              height={24}
              alt=""
            />
            <p>+447886600748</p>
          </div>
        </div>
        <div className="flex flex-row">
          <p>Copyright ⓒ Tobams Group, 2024. All rights reserved.</p>
          <div className="flex flex-row">
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Cookies Policy</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
