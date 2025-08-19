import React from "react";

function Banner() {
  return (
    <>
      <div className="flex  md:flex-row w-full h-auto flex-col-reverse gap-4">
        <div className="flex flex-col h-fit md:w-1/2 ">
          <h1 className="flex w-fit border-b-2 border-green-300 pb-0.5 mb-10 ">
            FoodRecipes
          </h1>
          <p className="flex font-semibold mb-4">
            Lorem, ipsum dolor sit amet!
          </p>
          <p className="flex mb-4 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            deserunt quidem neque fugiat voluptate laboriosam recusandae modi
            beatae, expedita illum pariatur praesentium odio. Blanditiis
            perferendis eaque ratione aliquam non eius!
          </p>
          <button className="bg-green-500 w-fit p-1 px-8 text-white rounded-md">
            See all
          </button>
        </div>
        <div className="flex md:w-1/2 h-auto">
          <img
            src="./images/banner.png"
            className="flex object-contain md:max-h-70 mb-10"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Banner;
