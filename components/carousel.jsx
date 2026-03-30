import Image from "next/image";
import React from "react";

import { FaArrowTrendUp } from "react-icons/fa6";

const Carousel = ({ carousel }) => {
  return (
    <>
      <div className="carousel my-8 w-full bg-primary/5 rounded-2xl">
        {carousel.map((c, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full flex-col lg:flex-row"
          >
            <div className="flex-1">
              <Image
                alt={c.name}
                src={c.image}
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="py-8 pb-30 lg:pb-8 px-4 md:px-8 space-y-4 flex-1 lg:max-w-md">
              <div className="flex gap-2 items-center">
                <div className="text-accent">
                  <FaArrowTrendUp />
                </div>
                <div>{c.makeRate}</div>
              </div>
              <div className="text-3xl md:text-5xl font-bold font-display">
                {c.name}
              </div>
              <div className="max-w-md">{c.detail}</div>
            </div>

            <div className="absolute left-5 right-5 bottom-10 hidden lg:flex justify-between">
              <a
                href={`#slide${index}`}
                className="btn btn-circle hover:btn-accent  hover:text-base-100"
              >
                ❮
              </a>
              <a
                href={`#slide${index + 2}`}
                className="btn btn-circle hover:btn-accent hover:text-base-100"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
