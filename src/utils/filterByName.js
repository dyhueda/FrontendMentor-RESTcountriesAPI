export function filterByName(allCountries, name){

  const filteredList = allCountries.filter(country=> country.name.common.toLowerCase().includes(name.toLowerCase()));
  return filteredList;
}
