import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import NewsLetter from "@/components/newsletter";
import Trending from "@/components/trending";
import Latest from "@/components/latest";
import Footer from "@/components/footer";
import Handpicked from "@/components/handpicked";

export default function Home() {
  return (
    <>
      <div className="px-5 md:px-12 2xl:px-40">
        <Navbar />
        <Hero />
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
