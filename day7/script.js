const $iconMenu = document.querySelector('.icon-menu')
const $iconSearch = document.querySelector('.icon-search')
const $card = document.querySelector('.card')
const $menu = document.querySelector('.menu')
const $textSearch = document.querySelector('#text-search')

$iconMenu.addEventListener('click', (e) => {
  $card.classList.toggle('card-side')
  $menu.classList.toggle('menu-side')
})

$iconSearch.addEventListener('click', () => {
  $textSearch.classList.toggle('search-active')
})