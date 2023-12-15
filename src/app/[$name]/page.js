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
    if (borders !== undefined) {
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
      <div className="mx-4 sm:mx-10 max-w-full pb-10">
        <BackButton />
        <div className="flex flex-col sm:flex-row sm:gap-24 items-center gap-7 w-full sm:my-20">
          <div className="max-w-1/3">

          <Image
            src={country?.flags.svg}
            width={1200}
            height={200}
            alt={country?.flags.alt}
            />
            </div>
          <div className="flex flex-col items-start w-full ">
            <h1 className="text-2xl font-extrabold mb-2 sm:mb-10">
              {country?.name.common}
            </h1>
            <div className="flex flex-col sm:flex-row sm:gap-10">
              <div>
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
              </div>
              <br></br>
              <div>
                <CountryData title="Top Level Domain" data={country.tld} />
                <CountryData title="Currencies" data={currency} />
                <CountryData
                  title="Languages"
                  data={nativeNames.map((language) => language.language + ", ")}
                />
                <br></br>
              </div>
            </div>
            <div className="flex flex-col sm:mt-10">
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
