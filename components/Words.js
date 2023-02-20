//variable assigned to array of european countries
let Country_Europe = [
    "russia",
    "germany",
    "united kingdom",
    "france",
    "italy",
    "spain",
    "ukraine",
    "poland",
    "portugal",
    "romania",
    "netherlands",
    "belgium",
    "czech republic",
    "greece",
    "portugal",
    "sweden",
    "hungary",
    "belarus",
    "austria",
    "serbia",
    "switzerland",
    "bulgaria",
    "denmark",
    "finland",
    "slovakia",
    "norway",
    "ireland",
    "croatia",
    "moldova",
    "bosnia and herzegovina",
    "albania",
    "lithuania",
    "north macedonia",
    "slovenia",
    "latvia",
    "estonia",
    "montenegro",
    "luxembourg",
    "malta",
    "iceland",
    "andorra",
    "monaco",
    "liechtenstein",
    "san marino",
    "holy see"
  ];
  //this function returns a random element/country from the array above
  function randomWord() {
    return Country_Europe[
      Math.floor(Math.random() * Country_Europe.length)
    ];
  }
  //exports this function to be used elsewhere
  export { randomWord };
  