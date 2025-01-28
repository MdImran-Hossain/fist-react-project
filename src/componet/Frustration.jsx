import React from "react";
import CommonHead from "./commonCommponet/CommonHead";
import Paragraf from "./commonCommponet/Paragraf";
const client = () => {
  return (
    <>
      <section className="pt-[96px] pb-[110px] bg-fist_bgcolor">
        <div className="container">
          <div>
            <div>
              <CommonHead
                headingContent={"Frustration of "}
                HlastContent={"Clients"}
              />
              <Paragraf
                ParagrafContent={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
                }
                ParagrafDesing={"max-w-[530px]"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default client;
