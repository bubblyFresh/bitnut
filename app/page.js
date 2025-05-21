import Image from "next/image";
import Hero1 from "./_content/Hero1";
import Hero2 from "./_content/Hero2";
import Hero3 from "./_content/Hero3";
import Hero4 from "./_content/Hero4";

export default function Home() {
  return (
    <div className="relative">
      {/* Sticky Image */}
      <div className="fixed top-50 left-0 z-10 h-screen flex items-start ">
        <div className="relative w-40 h-40  ml-[-2.6rem] md:w-60 md:h-60">
          <Image
            src="/tun1.png" // Replace with your image path
            alt="TUN"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="uppercase">
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />
      </div>
    </div>
  );
}