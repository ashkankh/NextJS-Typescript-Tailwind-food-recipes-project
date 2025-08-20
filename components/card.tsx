import { menuType } from "@/types/menu.types";
import React from "react";
import { Typography } from "./ui/Typograhy";
import Image from "next/image";
import Location from "./icons/Location";
import Dollar from "./icons/Dollar";
function Card({ data }: { data: menuType }) {
  console.log(data);
  return (
    <div className="flex flex-col h-fit w-70 rounded-xl shadow-sm p-3 md:my-2">
      <Image
        src={`/images/${data.id}.jpeg`}
        width={1000}
        height={1000}
        alt={data.name}
        className="flex object-contain items-start rounded-lg"
      />
      <div className="flex flex-col  w-full gap-4 mt-4 p-1">
        <div className="flex flex-row justify-between">
          <Typography
            className="flex flex-row"
            color="primary"
            variant="caption"
          >
            {data.name}
          </Typography>
          <Typography
            className="flex flex-row justify-center"
            variant="caption"
          >
            <Typography
              variant="span"
              className="flex flex-row span gap-1 justify-center"
            >
              <Location />
            </Typography>
            {data.details[0].Cuisine}
          </Typography>
        </div>
        <div className="flex flex-row items-center">
          <span>
            <Dollar />
          </span>
          <Typography variant="caption">{data.price}$</Typography>
        </div>
        <button className="flex hover:cursor-pointer">
          <Typography
            variant="caption"
            align="center"
            weight="bold"
            className="bg-green-500 flex justify-center p-1 rounded-lg w-full text-white"
          >
            See Details
          </Typography>
        </button>
      </div>
    </div>
  );
}

export default Card;
