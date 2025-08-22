import { menuType } from "@/types/menu.types";
import Image from "next/image";
import React from "react";
import { Typography } from "../ui/Typograhy";
import Link from "next/link";

function ComparePage({
  dataFood1,
  dataFood2,
}: {
  dataFood1: menuType;
  dataFood2: menuType;
}) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Compare Items
            </th>
            <th scope="col" className="px-6 w-1/3 py-3">
              <div className="flex flex-col w-full justify-center gap-2">
                <Link href={`/menu/${dataFood1.id}`}>
                  <Image
                    src={`/images/${dataFood1.id}.jpeg`}
                    height={1000}
                    width={1000}
                    alt={dataFood1.name}
                    className="flex max-w-40 w-auto mx-auto rounded-2xl"
                  ></Image>
                  <Typography variant="caption" align="center">
                    {dataFood1.name}
                  </Typography>
                </Link>
              </div>
            </th>
            <th scope="col" className="px-6 w-1/3 py-3 gap-2">
              <div className="flex flex-col w-full justify-center gap-2">
                <Link href={`/menu/${dataFood2.id}`}>
                  <Image
                    src={`/images/${dataFood2.id}.jpeg`}
                    height={1000}
                    width={1000}
                    alt={dataFood2.name}
                    className="flex max-w-40 w-auto mx-auto rounded-2xl"
                  ></Image>
                  <Typography variant="caption" align="center">
                    {dataFood2.name}
                  </Typography>
                </Link>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Price
            </th>
            <td className="px-6 py-4">{dataFood1.price}$</td>
            <td className="px-6 py-4">{dataFood2.price}$</td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Discound
            </th>
            <td className="px-6 py-4">{dataFood1.discount === 0 ? "-" : `${dataFood1.discount}$` }</td>
            <td className="px-6 py-4">{dataFood2.discount === 0 ? "-" : `${dataFood2.discount}$` }</td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Cuisine
            </th>
            <td className="px-6 py-4">{dataFood1.details[0].Cuisine}</td>
            <td className="px-6 py-4">{dataFood2.details[0].Cuisine}</td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Recipe Type
            </th>
            <td className="px-6 py-4">{dataFood1.details[1]["Recipe Type"]}</td>
            <td className="px-6 py-4">{dataFood2.details[1]["Recipe Type"]}</td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Difficulty
            </th>
            <td className="px-6 py-4">{dataFood1.details[2].Difficulty}</td>
            <td className="px-6 py-4">{dataFood2.details[2].Difficulty}</td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Preparation Time
            </th>
            <td className="px-6 py-4">
              {dataFood1.details[3]["Preparation Time"]}
            </td>
            <td className="px-6 py-4">
              {dataFood2.details[3]["Preparation Time"]}
            </td>
          </tr>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Cooking Time
            </th>
            <td className="px-6 py-4">
              {dataFood1.details[4]["Cooking Time"]}
            </td>
            <td className="px-6 py-4">
              {dataFood2.details[4]["Cooking Time"]}
            </td>
          </tr>

          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Serves
            </th>
            <td className="px-6 py-4">{dataFood1.details[5].Serves}</td>
            <td className="px-6 py-4">{dataFood2.details[5].Serves}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComparePage;
