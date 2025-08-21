import React, { useState, Fragment } from "react"
import { Typography } from "../../ui/Typograhy"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import DropDown from "../../ui/dropDown"
import { useRouter } from "next/router"
import { menuType } from "@/types/menu.types"
import { MenuPages } from "../menuPages"
import { difficulties, time } from "./data"
import Image from "next/image"



function CategoriesPage({ data }: { data: menuType[] }) {

  const router = useRouter();

  const [difficultySelected, setDifficultySelected] = useState(difficulties[0])
  const [timeSelected, settimeSelected] = useState(time[0])
  const [imageShow, setImageShow] = useState(false)


  const clickHandler = () => {
    setImageShow(true)
    router.push({
      pathname: "/categories",
      query: {
        ...(difficultySelected.value ? { difficulty: difficultySelected.value } : {}),
        ...(timeSelected.value ? { time: timeSelected.value } : {})
      }
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
      {!imageShow ? <Image src="/images/search.png" alt='Search Best food' height={400} width={400} className="flex mx-auto w-fit "></Image> : <MenuPages menuData={data} />}

    </>
  )
}

export default CategoriesPage
