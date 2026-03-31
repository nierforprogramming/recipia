import React from "react";
import SectionHeading from "./section-heading";
import { recipes } from "@/constants";
import HandpickCard from "./handpick-card";

const Handpicked = () => {
  return (
    <section className="">
      <div className="">
        <div>
          <SectionHeading text="Hand-Picked Collections" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recipes.map((recipe, index) => (
            <HandpickCard key={index} recipe={recipe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Handpicked;
