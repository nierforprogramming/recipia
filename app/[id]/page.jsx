import Navbar from "@/components/navbar";
import React from "react";

const RecipeDetailPage = () => {
  return (
    <div className="px-5 md:px-12 2xl:px-40">
      <Navbar />
      <section>
        <div>stats</div>
        <div>heading</div>
        <div>desc</div>
        <div>image</div>
      </section>
    </div>
  );
};

export default RecipeDetailPage;
