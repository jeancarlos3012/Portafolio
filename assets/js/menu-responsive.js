
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector('#menu')
  const navMenu = document.querySelector('.nav--menu')

  menu.addEventListener('click', function () {
    navMenu.classList.toggle('nav--transalate')
  })
})