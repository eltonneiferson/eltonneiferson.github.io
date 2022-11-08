const networks = document.querySelector('.networks')
const  typingName =  document.querySelector('.text')

const userName = 'Elton Neiferson'
const linkedin = 'https://www.linkedin.com/in/elton-neiferson-134431213/'
const gitHub = 'https://github.com/eltonneiferson/'
const instagram = 'https://www.instagram.com/eltonneiferson/'
const email = 'eltonneiferson@outlook.com'
const skills = 'html,css,js,git'

typingName.innerHTML = `
    <h1>${userName}</h1>
    <p class="function-dev">fullStackDeveloper<span>(){</span></p>
    <img class="icons-dev" src="https://skillicons.dev/icons?i=${skills}"/>
    <p style="text-align: left;">}</p>
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