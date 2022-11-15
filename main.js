const main = document.querySelector('#container')
const spans = document.querySelectorAll('span')
const links = document.querySelectorAll('.link')
const button = document.querySelector('.on-off')

button.addEventListener('click', () => {
    button.classList.toggle('moveButton')
    main.classList.toggle('dark-mode')
    main.classList.toggle('white-mode')
    
    spans.forEach((span) => span.classList.toggle('spanWhiteMode'))

    links.forEach((link) => {
        link.classList.toggle('link-darkMode')
        link.classList.toggle('link-whiteMode')
    })
})

console.log(spans)