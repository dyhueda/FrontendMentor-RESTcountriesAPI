"use client"
import Image from "next/image";
import CountryData from "./CountryData";
import { useRouter } from "next/navigation";

export default function Card({ country }){
  const router = useRouter()
  const population = new Intl.NumberFormat("de-DE").format(country.population)
    return(
        <button 
          onClick={()=>{router.push(`/${country.name.common}`)}}
          className="bg-white sm:w-full dark:bg-darkblueelements pb-2 rounded-lg flex flex-col shadow">
          <Image
          className=" rounded-t-lg"
          src={country.flags.svg}
          width={2400}
          height={900}
          alt={country.flags.alt}
          />
          <div className="p-4 flex flex-col items-start">

          <h1 className=" text-xl font-extrabold my-2">{country.name.common}</h1>
          <CountryData title="Population" data={population}/>
          <CountryData title="Region" data={country.region}/>
          <CountryData title="Capital" data={country.capital}/>
          </div>
        </button>
    )
}
