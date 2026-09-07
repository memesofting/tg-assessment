import Booking from "@/components/booking";
import Capacity from "@/components/capacity";
import ConsultantTraining from "@/components/consultantTraining";
import Corporate from "@/components/coporate";
import Learning from "@/components/learning";
import LearnWithCeo from "@/components/learnWIthCeo";
import Management from "@/components/management";
import Personalised from "@/components/personalised";
import Testimonials from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Learning />
      <Corporate />
      <Personalised />
      <Capacity />
      <Management />
      <LearnWithCeo />
      <ConsultantTraining />
      <Booking />
      <Testimonials />
    </>
  );
}
