"use client";
import BackButton from "@/components/BackButton";
import CountryData from "@/components/CountryData";
import { Currencies, nativeName } from "@/utils/countryDataMap";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CountryPage(props) {
  const router = useRouter();
  const [country, setCountry] = useState();
  const [borderCountries, setBorderCountries] = useState();
  useEffect(() => {
    fetch(
      `https://restcountries.com/v3.1/name/${props.params.$name}?fullText=true`,
      {
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => setCountry(response[0]))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    const borders = country?.borders?.join(",");
    if(borders !== undefined){

      fetch(`https://restcountries.com/v3.1/alpha?codes=${borders}`, {
        cache: "force-cache",
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => setBorderCountries(response))
        .catch((error) => console.error(error));
    }
  }, [country]);

  if (country !== undefined && borderCountries?.status !== 400) {
    const nativeNames = nativeName(country);
    const currency = Currencies(country);
    return (
      <div className="mx-4 max-w-full pb-10">
        <BackButton />
        <div className="flex flex-col items-center gap-7 w-full">
          <Image
            className=""
            src={country?.flags.svg}
            width={1200}
            height={200}
            alt={country?.flags.alt}
          />
          <div className="flex flex-col items-start w-full ">
            <h1 className="text-2xl font-extrabold mb-2">
              {country?.name.common}
            </h1>
            <div className="flex">
              <h2 className="font-bold">Native Name: </h2>
              <div>
                {nativeNames.map((nativeName) => (
                  <p>
                    &nbsp;in {nativeName.language}: {nativeName.name}
                  </p>
                ))}
              </div>
            </div>
            <CountryData
              title="Population"
              data={country.population.toLocaleString("pt-BR")}
            />
            <CountryData title="Region" data={country.region} />
            <CountryData title="Sub Region" data={country.subregion} />
            <CountryData title="Capital" data={country.capital} />
            <br></br>
            <CountryData title="Top Level Domain" data={country.tld} />
            <CountryData title="Currencies" data={currency} />
            <CountryData
              title="Languages"
              data={nativeNames.map((language) => language.language + ", ")}
            />
            <br></br>
            <div className="flex flex-col">
              <h2 className="mb-2 font-bold">Border Countries: </h2>
              <div className="grid grid-cols-3 grid-flow-row w-full gap-2 justify-items-stretch">
                {borderCountries?.map((country) => (
                  <button
                    onClick={() => {
                      router.push(`/${country.name.common}`);
                    }}
                    className="px-2 py-1 bg-white dark:bg-darkblueelements dark:text-white rounded shadow-lg"
                  >
                    {country.name.common}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
