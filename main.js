const main = document.querySelector('#container')
const spans = document.querySelectorAll('span')
const links = document.querySelectorAll('.link')
const control = document.querySelector('.control')
const button = document.querySelector('.on-off')

document.addEventListener('contextmenu', event => event.preventDefault())

button.addEventListener('click', () => {
    button.classList.toggle('moveButton')
    button.classList.toggle('onOffWhiteMode')
    control.classList.toggle('controlWhiteMode')
    main.classList.toggle('dark-mode')
    main.classList.toggle('white-mode')
    
    spans.forEach((span) => span.classList.toggle('spanWhiteMode'))

    links.forEach((link) => {
        link.classList.toggle('link-darkMode')
        link.classList.toggle('link-whiteMode')
    })
})