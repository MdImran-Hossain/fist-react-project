import React from "react";
import CommonHead from "./commonCommponet/CommonHead";
import Slider from "react-slick";
import Test1 from "../assets/tesmonial/test1.png";
import Test2 from "../assets/tesmonial/test2.png"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const Testimonials = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        autoplay:true,
        autoplaySpeed:4000,
        speed: 500,
        arrows:true,


      };
   
  return (
    <>
      <section className="pt-[100px] pb-[60px]">
        <div className="container">
          <div className="flex justify-center">
            <CommonHead headingContent={"Our "} HlastContent={"Testimonials"} />
          </div>
          <div className="test">
          <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={Test1} alt="" />
        </div>
        <div>
        <img src={Test2} alt="" />
        </div>
        <div>
        <img src={Test1} alt="" />
        </div>
        <div>
        <img src={Test2} alt="" />
        </div>
        <div>
        <img src={Test1} alt="" />
        </div>
        <div>
        <img src={Test2} alt="" />
        </div>
      </Slider>
    </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
