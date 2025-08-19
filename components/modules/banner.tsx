import React from "react";
import { Typography } from "../ui/Typograhy";
import Image from "next/image";
function Banner() {
  return (
    <>
      <div className="flex  md:flex-row w-full h-auto flex-col-reverse gap-4">
        <div className="flex flex-col h-fit md:w-1/2 ">
          <Typography
            variant="title"
            className="border-b-2 w-fit border-green-500"
          >
            Food recipes
          </Typography>
          <p className="flex font-semibold mb-4">
            Lorem, ipsum dolor sit amet!
          </p>
          <Typography variant="body" align="justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            deserunt quidem neque fugiat voluptate laboriosam recusandae modi
            beatae, expedita illum pariatur praesentium odio. Blanditiis
            perferendis eaque ratione aliquam non eius!
          </Typography>
          <button className="bg-green-500 w-fit p-1 px-8 text-white rounded-md mt-5">
            See all
          </button>
        </div>
        <div className="flex md:w-1/2 h-auto">
          <Image width={1000} height={1000} src="/images/banner.png" alt="img" className="flex object-contain md:max-h-70 mb-10" />
        </div>
      </div>
    </>
  );
}

export default Banner;
