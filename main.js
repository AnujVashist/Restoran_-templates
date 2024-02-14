// owl slider

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    }
    );
});

// counter

// $('.counter').counterUp({
//     delay: 10,
//     time: 1000
// });


