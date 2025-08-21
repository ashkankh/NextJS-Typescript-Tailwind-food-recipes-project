import React from "react";
import { menuType } from "@/types/menu.types";
import Card from "../card";

export function MenuPages({ menuData }: { menuData: menuType[] }) {
  return (
    <>

      <div className="flex flex-row flex-wrap  justify-center gap-5 md:justify- mt-12 ">
        {menuData.map((menu) => (
          <Card key={menu.id} data={menu} />
        ))}
      </div>
    </>
  );
}
