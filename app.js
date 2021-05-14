const sections = document.querySelectorAll('section')
sections.forEach((section) => {
    section.addEventListener('click', function (event) {
        console.dir(section)
        if (event.target.tagName === 'H4' || event.target.tagName === 'IMG') {
            section.firstElementChild.nextElementSibling.classList.toggle('flip')
            section.firstElementChild.classList.toggle('bold')
            section.lastElementChild.previousElementSibling.classList.toggle('hide')
        }
    })
})

