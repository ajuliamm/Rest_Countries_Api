const divCountry = document.querySelector('.div-country')
divCountry.addEventListener('click', ()=>{
    let id = divCountry.id
    const data = fetch(`https://restcountries.com/v3.1/alpha/${id}`).then(response => response.json())
    console.log(data)
})
