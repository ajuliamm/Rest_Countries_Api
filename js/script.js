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

async function main() {
    const data = await fetch("https://restcountries.com/v3.1/all")
    const response = await data.json()
    let paises = response

    paises.forEach((element, index) => {
        let section = document.getElementById('principal')
        let div = document.createElement('div')
        div.id=index
        div.classList.add("div-country")
        section.appendChild(div)
        div.innerHTML =
            ` <img src="${element.flags.png}">
            <div>
            <h2>${element.name.common}</h2>
            <p><b>Population: </b>${element.population}</p>
            <p><b>Region: </b>${element.region}</p>
            <p><b>Capital: </b>${element.capital}</p>
            </div>`
    })

}
document.querySelector('html').addEventListener('load', main())

//Pesquisar país 
let countryInp = document.getElementById('country-inp')


countryInp.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
        let countryInp = document.getElementById('country-inp')
        let countryName = countryInp.value
        let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
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

                let result = document.getElementById('principal')
                result.innerHTML = `
                            <div class="div-country">
                                <img src="${data[0].flags.svg}">
                                <div>
                                <h2>${data[0].name.common}</h2>
                                <p><b>Population: </b>${data[0].population}</p>
                                <p><b>Region: </b>${data[0].region}</p>
                                <p><b>Capital: </b>${data[0].capital[0]}</p>
                                </div>
                            </div>
                            `
            })


    }
});

let Card = document.querySelector('#principal')

Card.addEventListener('click',(e)=> {
    console.log(e.id)
}
    )




