"use client";
import Image from "next/image";
import { useState } from "react";

export default function FilterBar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleFilter = (region) => {
    props.setRegionFilter(region.toLowerCase())
    setIsOpen(!isOpen);
  }


  const regions = [ "All","Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div className="flex flex-col relative my-4 dark:bg-darkblueelements bg-white px-4 py-4 w-1/2 rounded-lg shadow text-sm gap-4">
      <button
        onClick={handleIsOpen}
        className="flex justify-between w-full items-center "
      >
        Filter by region
        <Image src="/icons/ArrowDownIcon.svg" width={12} height={12} />
      </button>
      {isOpen && (
        <ul className="dark:bg-darkblueelements font-bold text-xs list-none flex flex-col gap-1 rounded absolute top-full left-0 mt-1 w-full p-4 bg-white">
          {regions.map((region) => (
            <li 
            key={region}
            onClick={()=>{handleFilter(region)}}
            className="cursor-pointer p-1">{region}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
