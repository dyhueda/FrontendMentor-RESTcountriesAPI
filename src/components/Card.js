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
          className="bg-white dark:bg-darkblueelements pb-2 rounded-lg flex flex-col">
          <Image
          className=" rounded-t-lg"
          src={country.flags.svg}
          width={240}
          height={90}
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
