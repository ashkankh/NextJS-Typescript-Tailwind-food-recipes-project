import React from "react";
import { menuType } from "@/types/menu.types";
import { MenuPages } from "@/components/templates/menuPages";

function Menu({ menuData }: { menuData: menuType[] }) {
  return (
    <>
      <MenuPages menuData={menuData} />
    </>
  );
}

export default Menu;

export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/data");
  const data = await response.json();

  return {
    props: {
      menuData: data,
    },
  };
}
