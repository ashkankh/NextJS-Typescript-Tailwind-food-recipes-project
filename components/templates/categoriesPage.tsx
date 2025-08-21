import React, { useState, Fragment } from "react"
import { Typography } from "../ui/Typograhy"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import DropDown from "../ui/dropDown"
import { useRouter } from "next/router"
import { menuType } from "@/types/menu.types"
import { MenuPages } from "./menuPages"




const difficulties = [
  { id: 1, name: "Easy", value: "Easy" },
  { id: 2, name: "Medium", value: "Medium" },
  { id: 3, name: "Hard", value: "Hard" },
]

const time = [
  { id: 1, name: "less than 10 mins", value: "10" },
  { id: 2, name: "less than 20 mins", value: "20" },
  { id: 3, name: "less than 30 mins", value: "30" },
  { id: 4, name: "less than 40 mins", value: "40" },
  { id: 5, name: "more than 40 mins", value: "more40" },
]


function CategoriesPage({data}:{data:menuType[]}) {

  const router = useRouter();


  const [difficultySelected, setDifficultySelected] = useState(difficulties[0])
  const [timeSelected, settimeSelected] = useState(time[0])


  const clickHandler = () => {
    router.push({
      pathname: "/categories",
      query: { difficulty: difficultySelected.value, time: timeSelected.value }
    },
    )
  }

  return (
    <>
      <Typography variant="title" underline="true" weight="bold">
        Categories
      </Typography>
      <div className="flex flex-row gap-2">
        <DropDown selected={difficultySelected} options={difficulties} setSelected={setDifficultySelected} />
        <DropDown selected={timeSelected} options={time} setSelected={settimeSelected} />
        <button type="button" className="flex rounded-xl bg-green-500 text-white items-center px-10 cursor-pointer" onClick={() => clickHandler()}>Search</button>
      </div>
      <MenuPages menuData={data}/>
    </>
  )
}

export default CategoriesPage
