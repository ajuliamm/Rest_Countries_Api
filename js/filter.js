let filter = document.getElementById('submenu-filter')
let link = document.querySelectorAll('.submenu__link')
var dados


const searchAfrica = document.getElementById('africa')

searchAfrica.addEventListener('click', ()=>{
    let result = document.getElementById('principal')
                result.innerHTML=''
    fetch('https://restcountries.com/v3.1/region/africa')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data.forEach(element => {
                
                let div =  document.createElement('div')
                div.classList.add('div-country')
                result.appendChild(div)
                div.innerHTML =`
                <img src="${element.flags.png}">
                <div>
                <h2>${element.name.common}</h2>
                <p><b>Population: </b>${element.population}</p>
                <p><b>Region: </b>${element.region}</p>
                <p><b>Capital: </b>${element.capital}</p>
                </div>      
                
                `
            });
        })
})
const searchAmerica = document.getElementById('america')

searchAmerica.addEventListener('click', ()=>{
    let result = document.getElementById('principal')
    result.innerHTML=''
    fetch('https://restcountries.com/v3.1/region/america')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data.forEach(element => {
                
                let div =  document.createElement('div')
                div.classList.add('div-country')
                result.appendChild(div)
                div.innerHTML =`
                <img src="${element.flags.png}">
                <div>
                <h2>${element.name.common}</h2>
                <p><b>Population: </b>${element.population}</p>
                <p><b>Region: </b>${element.region}</p>
                <p><b>Capital: </b>${element.capital}</p>
                </div>      
                
                `
            });
        })
})

const searchAsia = document.getElementById('asia')

searchAsia.addEventListener('click', ()=>{
    let result = document.getElementById('principal')
                result.innerHTML=''
    fetch('https://restcountries.com/v3.1/region/asia')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data.forEach(element => {
                
                let div =  document.createElement('div')
                div.classList.add('div-country')
                result.appendChild(div)
                div.innerHTML =`
                <img src="${element.flags.png}">
                <div>
                <h2>${element.name.common}</h2>
                <p><b>Population: </b>${element.population}</p>
                <p><b>Region: </b>${element.region}</p>
                <p><b>Capital: </b>${element.capital}</p>
                </div>      
                
                `
            });
        })
})
const searchEuropa = document.getElementById('europe')

searchEuropa.addEventListener('click', ()=>{
    let result = document.getElementById('principal')
                result.innerHTML=''
    fetch('https://restcountries.com/v3.1/region/europe')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data.forEach(element => {
                
                let div =  document.createElement('div')
                div.classList.add('div-country')
                result.appendChild(div)
                div.innerHTML =`
                <img src="${element.flags.png}">
                <div>
                <h2>${element.name.common}</h2>
                <p><b>Population: </b>${element.population}</p>
                <p><b>Region: </b>${element.region}</p>
                <p><b>Capital: </b>${element.capital}</p>
                </div>      
                
                `
            });
        })
})
const searchOceania = document.getElementById('oceania')

searchOceania.addEventListener('click', ()=>{
    let result = document.getElementById('principal')
                result.innerHTML=''
    fetch('https://restcountries.com/v3.1/region/Oceania')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            data.forEach(element => {
                
                let div =  document.createElement('div')
                div.classList.add('div-country')
                result.appendChild(div)
                div.innerHTML =`
                <img src="${element.flags.png}">
                <div>
                <h2>${element.name.common}</h2>
                <p><b>Population: </b>${element.population}</p>
                <p><b>Region: </b>${element.region}</p>
                <p><b>Capital: </b>${element.capital}</p>
                </div>      
                
                `
            });
        })
})
