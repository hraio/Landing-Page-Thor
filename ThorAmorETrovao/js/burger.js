const menu = document.querySelector(".menu-burger")

const active = () => menu.classList.toggle('active')

menu.addEventListener('click', active)