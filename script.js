//Filter
const submenuON = () => {
    const submenu = document.getElementById('submenu-filter')
    submenu.style.display = "flex"
}

const openFilter = () => {
    const filter = document.getElementById('filter-a')
    filter.classList.toggle('active')
    if (filter.classList == 'active') {
        submenuON()
    }
    else {
        const submenu = document.getElementById('submenu-filter')
        submenu.style.display = "none"
    }

}
//Dark-mode
const darkMode = () => {
    const darkmode = document.querySelector('.dark-mode')
    darkmode.classList.toggle('active')
}

//Requisição API
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main() {
    const data = fazGet("https://restcountries.com/v3.1/all")
    let paises = JSON.parse(data)

    console.log(paises[0].flags.svg)
    console.log(paises[0].name.common)
    console.log(paises[0].population)
    console.log(paises[0].region)
    console.log(paises[0].capital[0])

    for(let i = 0; paises.length; i++) {
        document.getElementById("result").innerHTML = `
    <div>
        <img src="${paises[i].flags.svg}">
        <h2>${paises[i].name.common}</h2>
        <p><b>Population: </b>${paises[i].population}</p>
        <p><b>Region: </b>${paises[i].region}</p>
        <p><b>Capital: </b>${paises[i].capital[0]}</p>
    </div>
    `
    }

}



//Pesquisar país 
let countryInp = document.getElementById('country-inp')

const searchBtn = () => {
    let countryInp = document.getElementById('country-inp')
    let countryName = countryInp.value
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(finalURL)
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0])
            console.log(data[0].capital[0])
            console.log(data[0].flags.svg)
            console.log(data[0].name.common)
            console.log(data[0].continents[0])
            console.log(data[0].population)
            console.log(data[0].region)

            let result = document.getElementById('result')
            result.innerHTML = `
    <div>
        <img src="${data[0].flags.svg}">
        <h2>${data[0].name.common}</h2>
        <p><b>Population: </b>${data[0].population}</p>
        <p><b>Region: </b>${data[0].region}</p>
        <p><b>Capital: </b>${data[0].capital[0]}</p>
    </div>
    `
        })
}


main()



