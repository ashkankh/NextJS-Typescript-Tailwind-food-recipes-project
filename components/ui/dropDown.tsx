import { Fragment } from "react"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid"
import clsx from "clsx"
import { dropDownType, OptionItem } from "@/types/listBox.type"


export default function DropDown<T>({ selected, setSelected, options }: dropDownType<OptionItem>) {
  return (
    <>
      <div className="flex flex-row gap-2 w-fit md:w-60 ">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative w-full">
            <ListboxButton
              className={clsx(
                "relative text-xs block w-full rounded-lg bg-gray-50 py-2 pl-3 pr-8 text-left  md:text-md mx-auto font-bold text-green-600 shadow",
                "focus:outline-none focus:ring-2 focus:ring-green-500"
              )}
            >
              {selected.name}
              <ChevronDownIcon
                className="pointer-events-none absolute top-2.5 right-2.5 h-4 w-4 text-green-600"
                aria-hidden="true"
              />
            </ListboxButton>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <ListboxOptions
                className={clsx(
                  "absolute mt-1 max-h-60 md:w-full overflow-auto  text-sm rounded-xl border border-gray-200 bg-white shadow p-1 focus:outline-none",
                  "transition duration-100 ease-in"
                )}>
                {options.map((item) => (
                  <ListboxOption
                    key={item.id}
                    value={item}
                    className="group flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-green-600 hover:bg-green-400 hover:text-white select-none"
                  >
                    <CheckIcon className="invisible h-4 w-4 text-green-600 group-data-selected:visible" />
                    <span
                      className={clsx(
                        "block truncate",
                        selected.id === item.id ? "font-bold" : "font-normal"
                      )}
                    >
                      {item.name}
                    </span>
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </Listbox>
      </div>
    </>
  )
}
