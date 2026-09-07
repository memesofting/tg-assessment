import Link from "next/link";
import Image from "next/image";

const LearnMore = () => {
    return ( 
        <div className="flex flex-row bg-[#571244] text-white w-fit">
          <Link href="">Learn More</Link>
          <Image
            src="/images/arrow-up-right.svg"
            width={24}
            height={24}
            alt="arrow-up"
          />
        </div>
     );
}
 
export default LearnMore;