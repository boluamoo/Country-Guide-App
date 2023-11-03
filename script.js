let searchBtn = document.getElementById('search-btn')
let countryInp = document.getElementById('country-inp')

countryInp.addEventListener("keyup", function(event) {
if (event.key === "Enter") {
    performSearch()
}
})

searchBtn.addEventListener('click', performSearch)

function performSearch() {
  let countryName = countryInp.value
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
  console.log(finalURL)

  fetch(finalURL)
    .then((response) => response.json())
    .then((json) => {
    //   console.log(json[0])
    //   console.log(json[0].capital[0])
    //   console.log(json[0].flags.svg)
    //   console.log(json[0].name.common)
    //   console.log(json[0].continents[0])
    //   console.log(Object.keys(json[0].currencies)[0])
    //   console.log(json[0].currencies[Object.keys(json[0].currencies)].name)
    //   console.log(
    //     Object.values(json[0].languages).toString().split(',').join(', '),
    //   )
      result.innerHTML = `<img src ="${json[0].flags.svg}" class="flag-img">
        <h2>${json[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital: </h4>
                <span>${json[0].capital[0]}</span>
            </div>
            <div class="data-wrapper">
                <h4>Continent: </h4>
                <span>${json[0].continents[0]}</span>
            </div>
            <div class="data-wrapper">
            <h4>Population: </h4>
            <span>${json[0].population}</span>
            </div>
            <div class="data-wrapper">
                <h4>Currency: </h4>
                <span>${
                  json[0].currencies[Object.keys(json[0].currencies)].name
                } - ${Object.keys(json[0].currencies)[0]}</span>
                </div>
                <div class="data-wrapper">
                    <h4>Common Languages: </h4>
                    <span>${Object.values(json[0].languages)
                      .toString()
                      .split(',')
                      .join(', ')}</span>
                </div>
            </div>`
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty.</h3>`
      } else {
        result.innerHTML = `<h3>Please enter a valid country name.</h3>`
      }
    })
}
