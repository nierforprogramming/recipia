import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import NewsLetter from "@/components/newsletter";
import Trending from "@/components/trending";
import Latest from "@/components/latest";
import Footer from "@/components/footer";
import Handpicked from "@/components/handpicked";
import CustomCategory from "@/components/custom-category";

export default function Home() {
  return (
    <>
      <div className="px-5 md:px-12 2xl:px-40">
        <Navbar />
        <Hero />
        <CustomCategory sectionTitle="Sugar Rush" category="dessert" />
        <CustomCategory sectionTitle="Purely Plant" category="Vegetarian" />
        <CustomCategory sectionTitle="Chicken Delights" category="Chicken" />
      </div>
      <NewsLetter />
      <div className="px-5 2xl:px-40">
        <Trending />
      </div>
      <div className="px-5 2xl:px-40">
        <Handpicked />
        <Latest />
      </div>
      <Footer />
    </>
  );
}
