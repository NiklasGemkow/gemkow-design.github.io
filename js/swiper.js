const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    grabCursor: "true",
    fade: "true",

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',

    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1040: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1500: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});