const functionDev = document.querySelector('.function-dev')
const iconsDev = document.querySelector('.icons-dev')
const networks = document.querySelector('.networks')

const linkedin = 'https://www.linkedin.com/in/elton-neiferson-134431213/'
const gitHub = 'https://github.com/eltonneiferson/'
const instagram = 'https://www.instagram.com/eltonneiferson/'
const email = 'eltonneiferson@outlook.com'

functionDev.addEventListener('click', function() {
    iconsDev.classList.toggle('hide')
})

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