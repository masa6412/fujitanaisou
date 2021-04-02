const topButton = document.getElementById('nav-sp__wrap')
const info = document.getElementById('sp-info-icon')
const content = document.getElementById('sp-content-icon')

const accordion = document.getElementById('nav-sp__accordion')
const info_menus1 = document.getElementById('nav-sp__submenu__item1')
const info_menus2 = document.getElementById('nav-sp__submenu__item2')
const info_menus3 = document.getElementById('nav-sp__submenu__item3')
const content_menus1 = document.getElementById('nav-sp__submenu__item__content1')
const content_menus2 = document.getElementById('nav-sp__submenu__item__content2')
const icon2 = document.getElementById('top2')
const icon3 = document.getElementById('top3')
    

window.addEventListener('DOMContentLoaded', (event) => {

    topButton.addEventListener('click', () => {
        accordion.classList.toggle('nav9')
    })
    
    info.addEventListener('click', () => {
        info_menus1.classList.toggle('nav10')
        info_menus2.classList.toggle('nav11')
        info_menus3.classList.toggle('nav12')
        icon2.classList.toggle('tate1')
    })


    content.addEventListener('click', () => {
        content_menus1.classList.toggle('nav13')
        content_menus2.classList.toggle('nav14')
        icon3.classList.toggle('tate2')
    })
});
