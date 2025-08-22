import React from "react";
import { menuType } from "@/types/menu.types";
import { MenuPages } from "@/components/templates/menuPages";
import { Typography } from "@/components/ui/Typograhy";

function Menu({ menuData }: { menuData: menuType[] }) {
  return (
    <>
      <Typography variant="title" underline="true" weight="bold">
        Menu
      </Typography>
      <MenuPages menuData={menuData} />
    </>
  );
}

export default Menu;

export async function getStaticProps() {
  const response = await fetch(`${process.env.BASE_URL}/data`)
  const data = await response.json();

  return {
    props: {
      menuData: data,
    },
  };
}
