"use client"
import BackButton from "@/components/BackButton"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function CountryPage(props){
  const router = useRouter()
  const [country, setCountry] = useState() 
  useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/name/${props.params.$name}?fullText=true`, {
      cache: "force-cache",
      next: { revalidate: 10 },
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((response) => setCountry(response))
    .catch((error) => console.error(error));
  })
    return(
      <div className="mx-4 max-w-full">
        <BackButton/>
        <h1>{props.params.$name}</h1>

      </div>
    )
}
