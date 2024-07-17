import Hero from "@/components/hero";
import AboutImage from "public/images/about.jpg";

const AboutPage = () => {
  return (
    <section>
      <Hero imageAlt="Sea" imageData={AboutImage} title="About" />
    </section>
  );
};

export default AboutPage;
