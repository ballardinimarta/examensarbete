import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image'

interface IImage {
  id: number;
  attributes: {
    width: number;
    height: number;
    formats: any;
    url: string;
  };
}
interface ICarouselProps {
  imageList: IImage[];
}
function Carousel(props: ICarouselProps) {
  const production = process.env.NODE_ENV === "production";
  const baseUrl = production
    ? "https://www.yoursite.com"
    : "http://localhost:3001";

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {props.imageList.map((image: IImage, i: number) => {
        return (
          <Image
            key={i + 1}
            src={baseUrl + image.attributes.url}
            alt=""
            width={image.attributes.width}
            height={image.attributes.height}
          />
        );
      })}
    </Slider>
  );
}

export default Carousel;
