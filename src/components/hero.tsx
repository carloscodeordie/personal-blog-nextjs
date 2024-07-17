import type { StaticImageData } from "next/image";
import Image from "next/image";

export interface HeroProps {
  imageData: StaticImageData;
  imageAlt: string;
  title: string;
}

const Hero = ({ imageData, imageAlt, title }: HeroProps) => {
  return (
    <div className="relate h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          className="h-1/2"
          alt={imageAlt}
          src={imageData}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
