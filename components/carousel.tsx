import React from "react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./card";

interface CarouselProps {
  data: IMenu[];
}

const PrevArrow = ({ className, style, onClick }: any) => {
  return (
    <ChevronLeftIcon
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
      boxSize="36px"
      _hover={{ color: "brand.black" }}
    />
  );
};

const NextArrow = ({ className, style, onClick }: any) => {
  return (
    <ChevronRightIcon
      className={className}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
      boxSize="36px"
      _hover={{ color: "brand.black" }}
    />
  );
};

const Carousel = (props: CarouselProps) => {
  const { data } = props;

  var settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </Slider>
  );
};

export default Carousel;
