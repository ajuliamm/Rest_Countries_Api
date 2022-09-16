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