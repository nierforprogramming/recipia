import Hero from "@/components/hero";
import Latest from "@/components/latest";
import Navbar from "@/components/navbar";
import NewsLetter from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <div className="px-5 md:px-12 2xl:px-40">
        <Navbar />
        <Hero />
      </div>
      <NewsLetter />
      <div className="px-5 2xl:px-40">
        <Latest />
      </div>
    </>
  );
}
