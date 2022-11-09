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
        let section = document.querySelector('.principal')
        let detailSection = document.querySelector('.section-country-details')
        let inputAndFilter =  document. querySelector('.input-and-filter')
        let backButton = document.querySelector('#back-button')
        let div = document.createElement('div')
        div.id= element.cca2
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
        

            
            div.addEventListener('click', async()=>{

                const infoDetails = document.querySelector('.container-info-details')
                
                let id = div.id
                const data = await fetch(`https://restcountries.com/v3.1/alpha/${id}`).then(response => response.json())
                console.log(data)

                section.classList.add('oculto')
                inputAndFilter.classList.add('oculto')
                detailSection.classList.remove('oculto')

                infoDetails.innerHTML = ''
                console.log(Object.keys(data[0].languages).map(i =>{
                    console.log(data[0].languages[i])
                }))
                
                infoDetails.innerHTML = `
                <img src="${data[0].flags.png}">
                <div class="container-info-details-text">
                    <h1>${data[0].name.common}</h1>
                    <div id="info-country-details">
                        <div class="info1">
                        <p><b>Native Name:</b>${data[0].name.nativeName[Object.keys(data[0].name.nativeName)[0]].official}</p>
                        <p><b>Population:</b>  ${data[0].population}</p>
                        <p><b>Region:</b>  ${data[0].region}</p>
                        <p><b>Sub Region:</b>  ${data[0].subregion}</p>
                        <p><b>Capital:</b>  ${data[0].capital}</p>
                        </div>
                        <div class="info2">
                        <p><b>Top Level Domain:</b>  ${data[0].tld}</p>
                        <p><b>Currencies:</b>  ${data[0].currencies[Object.keys(data[0].currencies)].name}</p>
                        <p><b>Languages:</b>  ${Object.keys(data[0].languages).forEach(i =>{
                            data[0].languages[i]})}</p>
                        
                        </div>
    
                    </div>
                    <div class="info__box__border"> 
                        <h3>Border countries:</h3>
                        <div class="info__box__button"><button class="button-border">País</button>
                            <button class="button-border">País</button>
                            <button class="button-border">País</button>
                            <button class="button-border">País</button>
                            <button class="button-border">País</button>
                            <button class="button-border">País</button></div>
                    </div>
                </div>
                
                `
                
                
                


            })
            backButton.addEventListener('click', ()=>{
                section.classList.remove('oculto')
                inputAndFilter.classList.remove('oculto')
                detailSection.classList.add('oculto')
            })
            
            
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

                let result = document.querySelector('.principal')
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

let Card = document.querySelector('.principal')

Card.addEventListener('click',(e)=> {
    console.log(e.id)
}
    )




