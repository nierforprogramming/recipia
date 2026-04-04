"use client";

import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import Link from "next/link";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Carousel = ({ carousel }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="my-8 w-full bg-primary/5 rounded-2xl overflow-hidden relative">
      <div className="absolute bottom-15 w-full">
        <button
          ref={prevRef}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 btn btn-circle bg-base-100 hover:bg-accent hover:text-white"
        >
          <GoArrowLeft />
        </button>

        <button
          ref={nextRef}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 btn btn-circle bg-base-100 hover:bg-accent hover:text-white"
        >
          <GoArrowRight />
        </button>
      </div>

      <Swiper
        modules={[Navigation]}
        loop
        onBeforeInit={(swiper) => {
          // connect custom buttons
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="w-full"
      >
        {carousel.map((c, index) => (
          <SwiperSlide key={index}>
            <Link
              href={`/${c.id}`}
              className="relative w-full flex flex-col lg:flex-row"
            >
              {/* IMAGE */}
              <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-120 lg:flex-1">
                {c.image && (
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                )}
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-6 md:p-8 space-y-4 flex-1 lg:max-w-md flex flex-col justify-center">
                <div className="flex gap-2 items-center text-accent">
                  <FaArrowTrendUp />
                  <span className="text-sm">Trending</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display">
                  {c.name}
                </h2>

                <p className="text-sm sm:text-base text-gray-600 line-clamp-4">
                  {c.instructions}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
