import Image from "next/image";
import Link from "next/link";
import LearnMore from "./learnMore";

const ConsultantTraining = () => {
  return (
    <section className="bg-[#5712441A]">
      <h3>Training The Consultant</h3>
      <p>Maximise Your Potential as a Certified Trainer:</p>
      <p>
        With the help of our Training Consultants program, take a revolutionary
        step toward becoming a distinguished certified training consultant.
        Learn from professionals in the field, immerse yourself in a thorough
        curriculum, and hone your training methods through interactive
        workshops. Participating in our program will enable you to gain
        expertise in diverse courses while also developing the abilities to
        mentor and encourage others in their career advancement.
      </p>
      <div className="flex flex-row flex-wrap bg-[#571244] text-white">
        <div>
          <div>
            <h4>Expert-Led Learning</h4>
            <p>
              Gain insight from seasoned professionals in the field as they
              mentor you through the subtleties of business analysis.
            </p>
          </div>
          <div>
            <h4>Interactive Workshops</h4>
            <p>
              Engage in hands-on workshops designed to enhance your training
              capabilities and provide practical insights.
            </p>
          </div>
        </div>
        <div>
          <div>
            <h4>Comprehensive Curriculum</h4>
            <p>
              Access a robust curriculum that covers fundamental principles and
              advanced methodologies, ensuring a well-rounded understanding.
            </p>
          </div>
          <div>
            <h4>Global Recognition</h4>
            <p>
              You will attain a globally recognized certification, opening doors
              to new career opportunities and industry recognition.
            </p>
          </div>
        </div>
      </div>
      <LearnMore />
    </section>
  );
};

export default ConsultantTraining;
