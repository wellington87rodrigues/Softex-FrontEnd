const navbatToggle = document.querySelector('.navbar-toggle')
const navbar = document.querySelector('.navbar')

navbatToggle.addEventListener('click', () => {
    navbar.classList.toggle("active")
})