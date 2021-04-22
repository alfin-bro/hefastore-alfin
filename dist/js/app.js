// JS MENU TOGGLER
const menuToggler = document?.getElementById('menu-toggler');
const menuList = document?.getElementById('menu');
menuToggler?.addEventListener('click', sideBar);

function sideBar() {
    menuList.classList.toggle('show');
}
// END JS MENU TOGGLER


//  MENU SLIDER JS
const slides = document?.querySelector('.hero-content')?.children;
const slider = document?.getElementsByClassName('main-content');
const nextSlide = document?.querySelector('.arrow .arrow-right');
const prevSlide = document?.querySelector('.arrow .arrow-left');
let index = 0

nextSlide?.addEventListener('click', next);
prevSlide?.addEventListener('click', prev);

// function
function next() {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide()
}
function prev() {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide();
}

function changeSlide() {
    for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
        slide.classList.remove('active');
    }
    slides[index].classList.add('active');
}

// END MENU SLIDER JS



// ACCORDION JS
const accordion = document?.getElementsByClassName('aside-menu');
for (let i = 0; i < accordion.length; i++) {
    const e = accordion[i];
    const listtrigger = e.getElementsByTagName('button')[0];
    const ulList = e.getElementsByTagName('ul')[0];

    listtrigger.addEventListener('click', showList);

    //  function
    function showList() {
        ulList.classList.toggle('open');
        listtrigger.classList.toggle('putar');
    }
}

// END ACCORDION JS

// TABS JS
const descriptionTab = document?.querySelector('#desc-tab');
const reviewTab = document?.querySelector('#rev-tab');
const descriptions = document?.querySelector('.description-tab');
const reviews = document?.querySelector('.reviews-tab');

descriptionTab?.addEventListener('click', function () {
    descriptionTab.classList.add('showed')
    reviewTab.classList.remove('showed');

    descriptions.classList.add('block');
    descriptions.classList.remove('hidden');
    reviews.classList.remove('block')
    reviews.classList.add('hidden')
})

reviewTab?.addEventListener('click', function () {
    reviewTab.classList.add('showed')
    descriptionTab.classList.remove('showed');

    reviews.classList.add('block');
    reviews.classList.remove('hidden');
    descriptions.classList.remove('block')
    descriptions.classList.add('hidden')
})


// END TABS JS

// CART JS
const cartIndex = ["1", "2", "3"];
localStorage.setItem("cartIndex", JSON.stringify(cartIndex));

const cart = document.getElementById('cart')
const buttons = cart.querySelectorAll('button[data-delete-item]');

for (let el = 0; el < buttons.length; el++) {
    const button = buttons[el];
    const id = button.attributes['data-delete-item'].value;
    button.addEventListener('click', function () {
        cart.querySelector(`div[data-row='${id}']`).remove()
        
        const CART =
            localStorage.getItem('cartIndex') &&
            JSON.parse(localStorage.getItem('cartIndex'));

        const found = CART.indexOf(id);
        if (found > -1) {
            CART.splice(found, 1);
            localStorage.setItem('cartIndex', JSON.stringify(CART));
        }
        if (CART.length === 0) {
            const cartEmpty = document.getElementById('cart-empty')
            cartEmpty.classList.remove('hidden');
        }
    })
}




// END CART JS