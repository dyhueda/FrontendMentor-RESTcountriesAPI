"use client"
import Image from "next/image";

export default function SearchBar(props){
    return(
        <div className="p-2 gap-2 text-xs w-full sm:w-1/3 text-darkgray my-7 flex bg-white dark:bg-darkblueelements" >
          <Image
          src="/icons/SearchIcon.svg"
          width={15}
          height={15}
          alt="search icon"
          />
          <input
          className="dark:bg-darkblueelements dark:placeholder:text-white p-2 w-full "
          onChange={(e)=>{props.setSearchBarInput(e.target.value)}}
          value={props.searchBarInput}
          placeholder="Search for a country..."
          />
        </div>
    )
}
