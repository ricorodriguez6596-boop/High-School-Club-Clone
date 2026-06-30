


let icon=document.querySelector('.icon')
let headerLink=document.querySelector('.header-links')
let nav=document.querySelector('nav')


let change=()=>{
    headerLink.classList.toggle('display')
}


icon.addEventListener('click', change)
