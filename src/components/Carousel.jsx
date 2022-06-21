import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

import S1 from "../assets/s1.jpg";
import S2 from "../assets/s2.jpg";
import S3 from "../assets/s3.jpg";
import S4 from "../assets/s4.jpg";
import S5 from "../assets/s5.jpg";

const sliderData = [
  {
    url: S1,
  },
  {
    url: S2,
  },
  {
    url: S3,
  },
  {
    url: S4,
  },
  {
    url: S5,
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative left-0 right-0 flex justify-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
      {sliderData.map((item, index) => (
        <div className={index === slide ? "opacity-100" : "opacity-0"}>
          {index === slide && (
            <img classname="w-full rounded-md" src={item.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
