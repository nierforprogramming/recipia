import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="px-2 2xl:px-40">
      <Navbar />
      <Hero />
    </div>
  );
}
