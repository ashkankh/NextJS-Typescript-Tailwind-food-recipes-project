import { menuType } from "@/types/menu.types";
import React from "react";
import { Typography } from "./ui/Typograhy";
import Image from "next/image";
import Location from "./icons/location";
import Dollar from "./icons/dollar";
import Link from "next/link";
import { ScaleIcon } from "@heroicons/react/24/outline";

function Card({ data }: { data: menuType }) {
  const clickHandler = () => {
    if (!localStorage.getItem("food1")) {
      localStorage.setItem("food1", data.id);
      return;
    } else if (
      localStorage.getItem("food1") &&
      !localStorage.getItem("food2")
    ) {
      localStorage.setItem("food2", data.id);
      return;
    }
  };

  return (
    <div className="relative flex flex-col h-fit w-70 rounded-xl shadow-sm p-3 md:my-2">
      <Image
        src={`/images/${data.id}.jpeg`}
        width={1000}
        height={1000}
        alt={data.name}
        className="flex object-contain items-start rounded-lg"
      />
      {data.discount > 0 && (
        <div className="absolute top-5 left-2 z-49 rounded-r-md  rounded-l-xs bg-gradient-to-r from-gray-900 font-extrabold text-sm to-green-400 text-blue-50 p-1 px-4">
          {data.discount}<Typography variant="span" weight="light" color="success" className="ml-0.5">%</Typography>
        </div>
      )}

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
        <div className="flex flex-row justify-between">
          <button className="flex hover:cursor-pointer">
            {" "}
            <Link href={`/menu/${data.id}`}>
              <Typography
                variant="caption"
                align="center"
                weight="bold"
                className="bg-green-400 flex justify-center p-2 rounded-lg w-full "
              >
                See Details
              </Typography>
            </Link>
          </button>
          <button
            className="flex bg-gray-300 rounded-lg px-6 hover:cursor-pointer"
            onClick={() => clickHandler()}
          >
            <ScaleIcon width={20} color="#5f5f5f" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
