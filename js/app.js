const tabs = document.querySelectorAll('.tabheader__item')
const tabsParent = document.querySelector('.tabheader__items')
const tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => {
        item.style.display = 'none'
    })
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabContent[i].style.display = 'block'
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(i)
            }
        })
    }
}

let tabsContentSlider = document.querySelectorAll('.tabcontent')
let i = 0
function slider (){
    if (i === tabsContentSlider.length -1){
        tabsContentSlider[i].style.display = 'none'
        i = 0
        tabsContentSlider[0].style.display = 'block'
    }else {
        tabsContentSlider[i].style.display = 'none'
        tabsContentSlider[i + 1].style.display = 'block'
        i++
    }
}
setInterval(slider, 2000)

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
}

modalTrigger.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

modal.onclick = (event) => event.target === modal ? closeModal() : false
window.onkeydown = (event) => event.code === 'Backspace' ? closeModal() : false

window.addEventListener("scroll", function (){
    const scrolled = document.documentElement.scrollTop
    if (scrolled >= 3300){
        openModal()
    }
})