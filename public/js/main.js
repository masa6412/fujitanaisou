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
const info_icon = document.getElementById('info-icon')
const info_toggle = document.getElementById('info-toggle')

// tab-pc navリンク
const nav_top = document.getElementById('top')
const nav_info = document.getElementById('info-icon')
const nav_content = document.getElementById('content')
const nav_construction = document.getElementById('construction')
const nav_recruit = document.getElementById('recruit')
const nav_contact = document.getElementById('contact')

// sp navリンク
const sp_top = document.getElementById('nav-sp__accordion__menu__top')
const sp_info = document.getElementById('sp-info')
const sp_content = document.getElementById('sp-content')
const sp_construction = document.getElementById('sp-construction')
const sp_recruit = document.getElementById('sp-recruit')
const sp_contact = document.getElementById('sp-contact')

window.addEventListener('DOMContentLoaded', (event) => {

    topButton.addEventListener('click', () => {
        accordion.classList.toggle('nav9')
    })

    // classがtoggleして + の縦線がtoggleする
    info.addEventListener('click', () => {
        info_menus1.classList.toggle('nav10')
        info_menus2.classList.toggle('nav11')
        info_menus3.classList.toggle('nav12')
        icon2.classList.toggle('tate1')
    })

    // classがtoggleして + の縦線がtoggleする
    content.addEventListener('click', () => {
        content_menus1.classList.toggle('nav13')
        content_menus2.classList.toggle('nav14')
        icon3.classList.toggle('tate2')
    })

    // info_icon.addEventListener('mouseenter', () => {
    //     info_toggle.style.display = "block"
    // })
    // info_icon.addEventListener('mouseout', () => {
    //     info_toggle.style.display = "none"
    // })
});


nav_top.addEventListener('click', () => {
    window.location.href = "/"
})

nav_info.addEventListener('click', () => {
    window.location.href = "/public/info.html"
})

nav_content.addEventListener('click', () => {
    window.location.href = "/public/content.html"
})

nav_construction.addEventListener('click', () => {
    window.location.href = "/public/construction.html"
})

nav_recruit.addEventListener('click', () => {
    window.location.href = "/public/recruit.html"
})

nav_contact.addEventListener('click', () => {
    window.location.href = "/public/contact.html"
})

//sp-nav リンク
sp_top.addEventListener('click', () => {
    window.location.href = "/"
})

sp_info.addEventListener('click', () => {
    window.location.href = "/public/info.html"
})

sp_content.addEventListener('click', () => {
    window.location.href = "/public/content.html"
})

sp_construction.addEventListener('click', () => {
    window.location.href = "/public/construction.html"
})

sp_recruit.addEventListener('click', () => {
    window.location.href = "/public/recruit.html"
})

sp_contact.addEventListener('click', () => {
    window.location.href = "/public/contact.html"
})

function check() {
    if(!window.confirm('この内容でよろしいですか？')) {
        return false
    } 
}