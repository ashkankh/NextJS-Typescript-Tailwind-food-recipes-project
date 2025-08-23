import React, { useEffect, useState } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  LockClosedIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRouter } from "next/router";

function CompareModal() {
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);
  const [food1, setFood1] = useState<string | null>(null);
  const [food2, setFood2] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  const removeHadlerFood1 = () => {
    localStorage.removeItem("food1");
  };

  const removeHadlerFood2 = () => {
    localStorage.removeItem("food2");
  };

  const compareHandler = () => {
    router.push({
      pathname: "/compare",
      query: { food1, food2 },
    });
  };

  useEffect(() => {
    setIsClient(true);

    const updateFromStorage = () => {
      const storedFood1 = localStorage.getItem("food1");
      const storedFood2 = localStorage.getItem("food2");
      setFood1(storedFood1);
      setFood2(storedFood2);
    };

    updateFromStorage();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "food1" || e.key === "food2") {
        updateFromStorage();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    const interval = setInterval(updateFromStorage, 300);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const clickHandler = () => {
    setShowModal(!showModal);
  };

  if (!isClient) {
    return null;
  }

  if (food1 || food2)
    return (
      <div
        className={`fixed ${
          !showModal ? `h-[15vh]` : `h-4`
        } bg-green-200 w-full bottom-0 right-0 z-51 p-2 text-center transition-all duration-500 ease-in-out `}
      >
        <div className="flex flex-row justify-center items-center gap-5 h-full">
          <div className="flex flex-col w-1/3 h-full  overflow-hidden relative rounded-b-xl">
            {food1 ? (
              <div className="relative w-full h-full">
                <Image
                  src={`/images/${food1}.jpeg`}
                  alt="food1"
                  fill
                  className="object-cover rounded-xl"
                />
                <button
                  className="absolute right-2 top-2 bg-white text-red-400 rounded-full w-6 h-6 items-center justify-center"
                  onClick={() => removeHadlerFood1()}
                >
                  <XMarkIcon />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1">
                  food 1
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full"></div>
            )}
          </div>

          <button
            onClick={() => compareHandler()}
            disabled={!food1 || !food2}
            className={` disabled:bg-gray-400 disabled:cursor-not-allowed relative bottom-0 bg-green-600 text-white px-4 py-1 rounded transition-all duration-500 ease-in-out hover:cursor-pointer${
              !showModal
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20 pointer-events-none"
            }`}
          >
            Compare
          </button>

          <div className="flex flex-col w-1/3 h-full  overflow-hidden rounded-b-xl relative">
            {food2 ? (
              <div className="relative w-full h-full">
                <Image
                  src={`/images/${food2}.jpeg`}
                  alt="food2"
                  fill
                  className="object-cover rounded-xl"
                />
                <button
                  className="absolute right-2 top-2 bg-white text-red-400 rounded-full w-6 h-6 items-center justify-center"
                  onClick={() => removeHadlerFood2()}
                >
                  <XMarkIcon />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-1 ">
                  food 2
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full"></div>
            )}
          </div>
        </div>

        <button
          className="absolute right-2 -top-5 bg-green-700 text-white rounded-full w-8 h-8 flex items-center justify-center"
          onClick={clickHandler}
        >
          {!showModal ? (
            <ChevronDownIcon width={20} height={20} />
          ) : (
            <ChevronUpIcon width={20} height={20} />
          )}
        </button>
      </div>
    );
}

export default CompareModal;
