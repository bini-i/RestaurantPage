import renderHeader from "./header";
import renderBanner from './banner';
import renderMenu from './menu'


renderHeader();
renderBanner();
const home = document.querySelector('header nav .Home')
const menu = document.querySelector('header nav .Menu')
const about = document.querySelector('header nav .About')
const content  = document.getElementById('content')

home.addEventListener('click', ()=>{
    const banner = document.querySelector('.banner')
    content.removeChild(banner)
    renderBanner();
})

menu.addEventListener('click', ()=>{
    const banner = document.querySelector('.banner')
    content.removeChild(banner)
    renderMenu();
})

about.addEventListener('click', ()=>{
    const banner = document.querySelector('.banner')
    content.removeChild(banner)
    renderAbout();
})
