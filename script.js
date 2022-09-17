const submenuON = () =>{
    const submenu = document.getElementById('submenu-filter')
    submenu.style.display="flex"
}

const openFilter = () =>{
    const filter =document.getElementById('filter-a')
    filter.classList.toggle('active')
    if(filter.classList=='active'){
        submenuON()
    }
    else{
        const submenu = document.getElementById('submenu-filter')
    submenu.style.display="none"
    }
    
}

const darkMode = () =>{
    const darkmode = document.querySelector('.dark-mode')
    darkmode.classList.toggle('active')
}

function fazGet(url){
    let request=new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main(){
    const data =fazGet("https://restcountries.com/v3.1/all")
    paises = JSON.parse(data)
    console.log(paises)
}

main()