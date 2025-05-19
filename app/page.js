import Image from "next/image";
import Hero1 from "./_content/Hero1";
import Hero2 from "./_content/Hero2";
import Hero3 from "./_content/Hero3";
import Hero4 from "./_content/Hero4";
export default function Home() {
  return (
      <div className="text-transform: uppercase">
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />
    </div>
  );
}
