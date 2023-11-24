"use client";
import Card from "@/components/Card";
import FilterBar from "@/components/FilterBar";
import SearchBar from "@/components/SearchBar";
import { filterByName } from "@/utils/filterByName";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [regionFilter, setRegionFilter] = useState("all")
  const [searchBarInput, setSearchBarInput] = useState("")

  useEffect(() => {
    setIsLoading(true)
    let url = "https://restcountries.com/v3.1/"
    if(regionFilter !== "all"){
      url = "https://restcountries.com/v3.1/region/"+regionFilter
    }else{
      url = "https://restcountries.com/v3.1/all"
    }
    fetch(url, {
      cache: "force-cache",
      next: { revalidate: 10 },
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setCountries(response))
      .then(()=>setIsLoading(false))
      .catch((error) => console.error(error));
  }, [regionFilter]);

  useEffect(() =>{
    const filteredList = filterByName(countries, searchBarInput)
    setFilteredCountries(filteredList)
  },[countries, searchBarInput])

  return (
    <main className="max-w-full mx-4">
      <SearchBar searchBarInput={searchBarInput} setSearchBarInput={setSearchBarInput}/>
      <FilterBar setRegionFilter={setRegionFilter} />
      {isLoading? (<h1>Loading...</h1>):
      (

      <div className="flex flex-col items-center gap-5">
        {filteredCountries.map((country) => (
          <React.Fragment key={country.name.common}>
            <Card country={country} />
          </React.Fragment>
        ))}
      </div>
      )}
    </main>
  );
}
