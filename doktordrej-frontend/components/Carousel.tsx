/* eslint-disable @next/next/no-img-element */
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";

interface IImage {
  id: number;
  filename: string;
}
interface ICarouselProps {
  imageList: IImage[];
}
function Carousel(props: ICarouselProps) {
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
        return <img key={i + 1} src={image.filename} alt="" />;
      })}
    </Slider>
  );
}

export default Carousel;
