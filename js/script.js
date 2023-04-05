const menuBtn = document.querySelector('#ac');
const formaBtn = document.querySelector('#second');
const compBtn = document.querySelector('#third');
const expBtn = document.querySelector('#fourth');
const realBtn = document.querySelector('#fifth');
const realsBtn = document.querySelector('#sixth');

const acCard = document.querySelector('#firstC');
const formCard = document.querySelector('#secondC');
const compCard = document.querySelector('#thirdC');
const expCard = document.querySelector('#fourthC');
const realCard = document.querySelector('#fifthC');

function hideAll(){
    const visibleList = document.querySelectorAll('.cardG , .footerClass');
    visibleList.forEach(element => {
        element.classList.add('invisible');
        element.classList.remove('appearing');
    })
}

menuBtn.addEventListener('click', event => {
    event.preventDefault();
    hideAll();
    console.log(acCard)
    acCard.classList.remove('invisible')
    acCard.classList.add('appearing')
})

console.log(formaBtn)

formaBtn.addEventListener('click', event => {
    event.preventDefault();
    hideAll();
    formCard.classList.remove('invisible')
    formCard.classList.add('appearing')
})

compBtn.addEventListener('click', event => {
    event.preventDefault();
    hideAll();
    compCard.classList.remove('invisible')
    compCard.classList.add('appearing')
})

expBtn.addEventListener('click', event => {
    event.preventDefault();
    hideAll();
    expCard.classList.remove('invisible')
    expCard.classList.add('appearing')
})

realBtn.addEventListener('click', event => {
    event.preventDefault();
    hideAll();
    realCard.classList.remove('invisible')
    realCard.classList.add('appearing')
})

const contBtn = document.querySelector('#contactB')
const footerC = document.querySelector('.footerClass');
contBtn.addEventListener('click', event => {
    event.preventDefault();
    hideAll();
    footerC.classList.remove('invisible')
})


const realsCard = document.querySelector('#sixthC');
realsBtn.addEventListener('click', event => {
    event.preventDefault();
    hideAll();
    realsCard.classList.remove('invisible')
    realsCard.classList.add('appearing')
});