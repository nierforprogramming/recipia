import Image from "next/image";
import React from "react";

import { FaArrowTrendUp } from "react-icons/fa6";

const Carousel = ({ carousel }) => {
  return (
    <>
      <div className="carousel w-full bg-primary/5 rounded-md">
        {carousel.map((c, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full flex-col md:flex-row items-center"
          >
            <div className="flex-1">
              <Image
                width={400}
                height={400}
                alt={c.name}
                src={c.image}
                className="w-full"
              />
            </div>

            <div className="py-8 md:px-8 flex-1 max-w-md">
              <div className="flex gap-2 items-center">
                <div className="text-accent">
                  <FaArrowTrendUp />
                </div>
                <div>{c.makeRate}</div>
              </div>
              <div className="text-4xl font-bold font-display">{c.name}</div>
              <div>{c.detail}</div>
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
