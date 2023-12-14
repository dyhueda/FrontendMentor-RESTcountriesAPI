export function nativeName(country){
  const nativeNames = Object.values(country.name.nativeName).map((name) =>name.common);
  const languages = Object.values(country.languages)
  const nativeName = []
  for(let i = 0; i < languages.length; i++){
    const object = {
      name : nativeNames[i],
      language : languages[i]
    }
    nativeName.push(object)
  }
  return nativeName;

}
export function Currencies(country){
  const currency = Object.values(country.currencies)
  console.log(currency)
  return currency[0].name
}

