"use client"
import { useRouter } from "next/navigation";
import ToggleTheme from "./ToggleTheme";

export default function Header(){
  const router = useRouter()
    return(
        <section className="flex justify-between p-4 sm:px-10 shadow-md dark:bg-darkblueelements bg-white">
          <button
          onClick={()=>{router.push("/")}}
          className="font-bold text-sm sm:text-3xl">
            Where in the world?
          </button>
          <ToggleTheme></ToggleTheme>
        </section>
    )
}
