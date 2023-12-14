export function filterByName(allCountries, name){

  const filteredList = allCountries.filter(country=> country.name.common.toLowerCase().includes(name.toLowerCase())).sort((a, b) => {
    const nameA = a.name.common.toUpperCase();
    const nameB = b.name.common.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return filteredList;
}
