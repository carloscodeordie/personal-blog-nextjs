import Hero from "@/components/hero";
import HomeImage from "public/images/home.jpg";

const Home = () => {
  return (
    <section>
      <Hero
        imageAlt="Universe"
        imageData={HomeImage}
        title="My development blog"
      />
    </section>
  );
};

export default Home;
