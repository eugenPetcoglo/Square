//la click skimba latimea lungimea la 300
//si schimba culoarea


const patr = document.querySelector('.square')



patr.addEventListener('click', (ev) => {
    patr.classList.remove('square')
    patr.classList.add('square1')
})
