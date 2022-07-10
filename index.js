const burger = document.querySelector('.burger')
const hamburger = document.querySelector('.hamburger')
const navMenuList = document.querySelector('.header-nav')

function navMenuToggle () {
    hamburger.classList.toggle('open')
    navMenuList.classList.toggle('open')
    document.body.classList.toggle('lock');
}

function navMenuToggleRemove () {
    hamburger.classList.toggle('open')
    navMenuList.classList.toggle('open')
    document.body.classList.remove('lock');
}


burger.addEventListener('click', navMenuToggle)

navMenuList.addEventListener('click', function(event) {
    if(event.target.classList.contains('nav-link')) navMenuToggleRemove ()
})


