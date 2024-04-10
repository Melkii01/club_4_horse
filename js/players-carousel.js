let offset = 0;
const gap = 20;

const nextBtn1 = document.getElementById('carousel-next1');
const prevBtn1 = document.getElementById('carousel-prev1');
const countElement1 = document.getElementById('count1');

const nextBtn2 = document.getElementById('carousel-next2');
const prevBtn2 = document.getElementById('carousel-prev2');
const countElement2 = document.getElementById('count2');

const carouselElement = document.querySelector('.carousel');
const carouselLine = document.getElementById('carousel-line');
const carouselItem = document.querySelector('.carousel-item');
const carouselItems = document.querySelectorAll('.carousel-item');

// Инициализация счетчика
let count;
if (carouselElement.offsetWidth >= 1222) {
    count = 3;
    countElement1.innerHTML = count + ' / ' + carouselItems.length;
} else if (carouselElement.offsetWidth >= 808 && carouselElement.offsetWidth < 1222) {
    count = 2;
    countElement2.innerHTML = count + ' / ' + carouselItems.length;
} else if (carouselElement.offsetWidth < 808) {
    count = 1;
    countElement2.innerHTML = count + ' / ' + carouselItems.length;
}


// Функция прокрутки направо
function carouselToRight() {
    offset = offset + carouselItem.offsetWidth + gap;

    if (carouselElement.offsetWidth >= 1222) {
        if (offset > (carouselItem.offsetWidth * (carouselItems.length - 2) + gap * (carouselItems.length - 3))) {
            offset = 0;
            count = 3;
        } else {
            count += 1;
        }

    } else if (carouselElement.offsetWidth >= 808 && carouselElement.offsetWidth < 1222) {
        if (offset > (carouselItem.offsetWidth * (carouselItems.length - 1) + gap * (carouselItems.length - 2))) {
            offset = 0;
            count = 2;
        } else {
            count += 1;
        }

    } else if (carouselElement.offsetWidth < 808) {
        if (offset > (carouselItem.offsetWidth * (carouselItems.length) + gap * (carouselItems.length - 1))) {
            offset = 0;
            count = 1;
        } else {
            count += 1;
        }
    }

    countElement1.innerHTML = count + ' / ' + carouselItems.length;
    countElement2.innerHTML = count + ' / ' + carouselItems.length;
    carouselLine.style.left = -offset + 'px';
}

// Функция прокрутки налево
function carouselToLeft() {
    offset = offset - carouselItem.offsetWidth - gap;

    if (carouselElement.offsetWidth >= 1222) {
        if (offset < 0) {
            offset = carouselItem.offsetWidth * (carouselItems.length - 3) + gap * (carouselItems.length - 3);
            count = carouselItems.length;
        } else {
            count -= 1;
        }

    } else if (carouselElement.offsetWidth >= 808 && carouselElement.offsetWidth < 1222) {
        if (offset < 0) {
            offset = carouselItem.offsetWidth * (carouselItems.length - 2) + gap * (carouselItems.length - 2);
            count = carouselItems.length;
        } else {
            count -= 1;
        }

    } else if (carouselElement.offsetWidth < 808) {
        if (offset < 0) {
            offset = carouselItem.offsetWidth * (carouselItems.length - 1) + gap * (carouselItems.length - 1);
            count = carouselItems.length;
        } else {
            count -= 1;
        }
    }

    countElement1.innerHTML = count + ' / ' + carouselItems.length;
    countElement2.innerHTML = count + ' / ' + carouselItems.length;
    carouselLine.style.left = -offset + 'px';
}

// Слушатели по клику
nextBtn1.addEventListener('click', carouselToRight);
prevBtn1.addEventListener('click', carouselToLeft);

nextBtn2.addEventListener('click', carouselToRight);
prevBtn2.addEventListener('click', carouselToLeft);


// Функция цикла прокрутки
function carouselToRightTimes() {
    setInterval(carouselToRight, 4000);
}

carouselToRightTimes();


