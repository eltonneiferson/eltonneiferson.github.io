const main = document.querySelector('#container')
const networks = document.querySelector('.networks')
const aboutMe =  document.querySelector('.about-me')
const button = document.querySelector('.on-off')

const userName = 'Elton Neiferson'
const linkedin = 'https://www.linkedin.com/in/elton-neiferson-134431213/'
const gitHub = 'https://github.com/eltonneiferson/'
const instagram = 'https://www.instagram.com/eltonneiferson/'
const email = 'eltonneiferson@outlook.com'
const skills = 'html,css,js,git,'

function darkMode() {
    button.classList.toggle('moveButton')
    main.classList.toggle('dark-mode')
    main.classList.toggle('white-mode')
}

aboutMe.innerHTML = `
    <img class="img-elton" src="https://avatars.githubusercontent.com/u/85045713?v=4" alt="Foto de Elton">    
    <h1>${userName}</h1>
    <h2 class="function-dev">fullStackDeveloper<span>()</span></h2>
    <img class="icons-dev" src="https://skillicons.dev/icons?i=${skills}"/>
`
networks.innerHTML = `
    <a href="${linkedin}" target="_blank">
        <img class="network-icon" src="https://skillicons.dev/icons?i=linkedin"/>
    </a>
    <a href="${gitHub}" target="_blank">
        <img class="network-icon" src="https://skillicons.dev/icons?i=github"/>
    </a>
    <a href="${instagram}" target="_blank">
        <img class="network-icon" src="https://skillicons.dev/icons?i=instagram"/>
    </a>
    <a href="mailto:${email}" target="_blank">
        <img class="network-icon" src="img/icon-outlook.ico"/>
    </a>
`
button.addEventListener('click', darkMode)