document.addEventListener('DOMContentLoaded', function () {
    let slider = document.getElementById('slider');
    let items = slider.querySelectorAll('.item');
    let dotsContainer = document.getElementById('dots');

    items.forEach((_, index) => {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    let dots = document.querySelectorAll('.dot');

    // Добавление актива для показа
    function showItem(index) {
        items.forEach((item, idx) => {
            item.classList.remove('active');
            dots[idx].classList.remove('active');
            if (idx === index) {
                item.classList.add('active');
                dots[idx].classList.add('active');
            }
        });
    }

    // Слушатели для кнопок
    document.getElementById('slider-prev').addEventListener('click', () => {
        let index = [...items].findIndex((item) =>
            item.classList.contains('active')
        );
        showItem((index - 1 + items.length) % items.length);
    });

    document.getElementById('slider-next').addEventListener('click', () => {
        let index = [...items].findIndex((item) =>
            item.classList.contains('active')
        );
        showItem((index + 1) % items.length);
    });

    // Слушатели для точек
    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            let index = parseInt(dot.dataset.index);
            showItem(index);
        });
    });
});
