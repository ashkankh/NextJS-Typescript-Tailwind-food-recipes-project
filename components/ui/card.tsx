import React from "react";
import { attributeType } from "../modules/attribute";

function Card({ data }: { data: attributeType }) {
  return (
    <div className="flex flex-row p-8 scale-80 md:scale-100 w-fit shadow-md rounded-lg">
      <div className="flex flex-col w-fit">
        <data.logo />
        <span className="flex justify-center items-center mt-2 text-sm font-bold">{data.name}</span>
      </div>
    </div>
  );
}

export default Card;
