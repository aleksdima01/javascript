let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

const divIndicators = document.querySelector('.indicators');
for (let index = 0; index < slides.length; index++) {
    divIndicators.insertAdjacentHTML('beforeend', ` <label>
            <input class="indicator" type="radio" name="q1" value="${index}">
        </label>`)
}
if (slides.length !== 0) {
    divIndicators.firstElementChild.firstElementChild.checked = true;
}

function changeSlide() {
    slides[currentIndex].style.opacity = 0;
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.opacity = 1;
    updateIndicator();
}
function changeSlideBack() {
    slides[currentIndex].style.opacity = 0;
    if (currentIndex === 0) {
        currentIndex = slides.length
    }
    currentIndex = Math.abs((currentIndex - 1) % slides.length);
    slides[currentIndex].style.opacity = 1;
    updateIndicator();
}

const indicators = document.querySelectorAll('.indicator');

function updateIndicator() {
    indicators.forEach(indicator => {
        if (currentIndex == indicator.value) {
            indicator.checked = true;
        }
    });
}

divIndicators.addEventListener("click", (e) => {
    if (e.target.nodeName == "INPUT") {
        slides.forEach((element, index) => {
            element.style.opacity = 0
            if (e.target.value == index) {
                element.style.opacity = 1;
                currentIndex = index;
            }
        });
    }
})

const rightButton = document.querySelector('.rbtn');
const leftButton = document.querySelector('.lbtn');

rightButton.addEventListener('click', () => {
    changeSlide();
})
leftButton.addEventListener('click', () => {
    changeSlideBack();
})


