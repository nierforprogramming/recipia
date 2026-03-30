import { carousel } from "@/constants";
import React from "react";
import Carousel from "./carousel";

const Hero = () => {
  return (
    <section className="my-2 lg:my-8">
      <Carousel carousel={carousel} />
    </section>
  );
};

export default Hero;
