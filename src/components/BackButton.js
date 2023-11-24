"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

export default function BackButton(){
  const router = useRouter()
    return(
        <button className="">
          <Image 
          className="stroke-white text-white"
          src="/icons/ArrowBackIcon.svg"
          height={24}
          width={24}
          alt="Arrow Left"
          />
          Back
        </button>

    )
}