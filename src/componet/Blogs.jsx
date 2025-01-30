import React from "react";
import CommonHead from "./commonCommponet/CommonHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons/faClock";
import BlogImg1 from "../assets/blog/blogs1.png";
import BlogMan1 from "../assets/blog/man1.png";
import Button from "./commonCommponet/Button";
import BlogImg2 from "../assets/blog/blogs2.png";
import BlogMan2 from "../assets/blog/man2.png";
import BlogImg3 from "../assets/blog/blogs3.png";
import BlogMan3 from "../assets/blog/man3.png";

const Blogs = () => {
  return (
    <>
      <section className=" bg-secend_bgcolor p-[80px]">
        <div className="container">
          <div className="flex justify-center">
            <CommonHead headingContent={"Our "} HlastContent={"Blogs"} />
          </div>
          <div>
            <div className="flex justify-between items-center pt-14">
              <div className="blogs w-[340px] flex flex-col justify-center items-center pb-[30px]  bg-white_color rounded-[15px] hover:shadow-xl duration-500 ">
                <picture>
                  <img src={BlogImg1} alt="" />
                </picture>
                <div className="p-[21px]">
                  <h5 className="text-[24px] font-Nunito font-bold text-font_color">
                    Lorem Ipsum is{" "}
                  </h5>
                  <p className="text-[17px] font-Lora font-normal pt-2 pb-7 text-font_color ">
                    Lorem Ipsum is simply text of the printing and type setting
                    industry. make a type specimen.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <picture>
                        <img src={BlogMan1} alt="" />
                      </picture>
                      <h4 className="text-[14px] font-Nunito font-normal text-font_color">
                        Alex Liones
                      </h4>
                    </div>
                    <p className="text-[10px] font-Nunito font-normal text-[#B0B0B0]">
                      <span>
                        <FontAwesomeIcon icon={faClock} />
                      </span>{" "}
                      28,Aug 2020, 09:48:00
                    </p>
                  </div>
                </div>
                <Button
                  buttonContent={"Read More"}
                  buttonDesing={
                    "after:bg-font_color border-none after:rounded text-white_color hover:bg-button_color"
                  }
                />
              </div>
              <div className="blogs w-[340px] flex flex-col justify-center items-center pb-[30px]  bg-white_color rounded-[15px] hover:shadow-xl duration-500 ">
                <picture>
                  <img src={BlogImg2} alt="" />
                </picture>
                <div className="p-[21px]">
                  <h5 className="text-[24px] font-Nunito font-bold text-font_color">
                    Lorem Ipsum is{" "}
                  </h5>
                  <p className="text-[17px] font-Lora font-normal pt-2 pb-7 text-font_color ">
                    Lorem Ipsum is simply text of the printing and type setting
                    industry. make a type specimen.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <picture>
                        <img src={BlogMan2} alt="" />
                      </picture>
                      <h4 className="text-[14px] font-Nunito font-normal text-font_color">
                        Alex Liones
                      </h4>
                    </div>
                    <p className="text-[10px] font-Nunito font-normal text-[#B0B0B0]">
                      <span>
                        <FontAwesomeIcon icon={faClock} />
                      </span>{" "}
                      28,Aug 2020, 09:48:00
                    </p>
                  </div>
                </div>
                <Button
                  buttonContent={"Read More"}
                  buttonDesing={
                    "after:bg-font_color border-none after:rounded text-white_color hover:bg-button_color"
                  }
                />
              </div>
              <div className="blogs w-[340px] flex flex-col justify-center items-center pb-[30px]  bg-white_color rounded-[15px] hover:shadow-xl duration-500 ">
                <picture>
                  <img src={BlogImg3} alt="" />
                </picture>
                <div className="p-[21px]">
                  <h5 className="text-[24px] font-Nunito font-bold text-font_color">
                    Lorem Ipsum is.
                  </h5>
                  <p className="text-[17px] font-Lora font-normal pt-2 pb-7 text-font_color ">
                    Lorem Ipsum is simply text of the printing and type setting
                    industry. make a type specimen.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <picture>
                        <img src={BlogMan3} alt="" />
                      </picture>
                      <h4 className="text-[14px] font-Nunito font-normal text-font_color">
                        Alex Liones
                      </h4>
                    </div>
                    <p className="text-[10px] font-Nunito font-normal text-[#B0B0B0]">
                      <span>
                        <FontAwesomeIcon icon={faClock} />
                      </span>{" "}
                      28,Aug 2020, 09:48:00
                    </p>
                  </div>
                </div>
                <Button
                  buttonContent={"Read More"}
                  buttonDesing={
                    "after:bg-font_color border-none after:rounded text-white_color hover:bg-button_color"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
