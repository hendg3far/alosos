$(document).ready(function () {
    "use strict";

    $(".hero-carousel").owlCarousel({
        items: 1,
        rtl: true,
        nav: false,
        loop: true,
        autoplay: true,
        dots: false,
        smartSpeed: 1500,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
    });

    $(".service-carousel").owlCarousel({
        items: 3,
        margin: 15,
        rtl: true,
        nav: false,
        dots: false,
        rewind: true,
        center: true,
        loop: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            567: {
                items: 2
            },
            1200: {
                items: 3
            }
        }

    });

    $(".offers-carousel").slick({
        slidesToShow: 4,
        centerMode: true,
        rtl: true,
        arrows: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });

    $(".packages-carousel").owlCarousel({
        items: 4.2,
        margin: 15,
        rtl: true,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1.2
            },
            576: {
                items: 2.2
            },
            992: {
                items: 3.2
            },
            1400: {
                items: 4.2
            }
        }
    });

    $(".partners-carousel").owlCarousel({
        items: 5,
        margin: 15,
        rtl: true,
        nav: false,
        dots: true,
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    $('.gallery-carousel').owlCarousel({
        items: 3,
        margin: 15,
        rtl: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 5000,
    });

    $(".owl-prev, .owl-next").click(function () {
        var targetCarousel = $($(this).data("target"));
        var action = $(this).hasClass("owl-next") ? "prev.owl.carousel" : "next.owl.carousel";

        targetCarousel.trigger(action);
    });

    $(".slick-prev, .slick-next").click(function () {
        var targetCarousel = $($(this).data("target"));
        var action = $(this).hasClass("slick-next") ? "slickNext" : "slickPrev";

        targetCarousel.slick(action);
    });

    $('.navbar-toggler').click(function () {
        $('.navbar-collapse').toggleClass('active');
    });

    $(document).click(function (event) {
        var $target = $(event.target);
        if (!$target.closest('.navbar-collapse').length && !$target.closest('.navbar-toggler').length) {
            if ($('.navbar-collapse').hasClass('active')) {
                $('.navbar-collapse').removeClass('active');
            }
        }
    });

    AOS.init({ once: true });

    $('select').selectpicker();

    $("#advBanner").modal('show');


    var form = $("#steps");
    form.steps({
        headerTag: "h3",
        bodyTag: "div",
        transitionEffect: "slideLeft",
        labels: {
            finish: "اتمام العملية",
            next: "التالى <i class='bi bi-arrow-left ms-2'></i>",
            previous: "<i class='bi bi-arrow-right me-2'></i> السابق"
        },
        onStepChanging: function () {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function () {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function () {
            alert("Submitted!");
        },
    });

    $(".flatpickr").flatpickr({
        disableMobile: "true",
        dateFormat: "Y-m-d H:i",
        mode: 'range'
    });

});

// Parallax Animation
if ($(window).width() > 992) {
    document.addEventListener("DOMContentLoaded", () => {
        const parents = document.querySelectorAll(".parallax-container");
        parents.forEach((parent) => {
            const blocks = parent.querySelectorAll("[data-aos]");

            blocks.forEach((block, index) => {
                const delay = (index + 1) * 150;
                block.setAttribute("data-aos-delay", delay);
            });
        });
    });
}

// Function to Adjust Container width
document.addEventListener("DOMContentLoaded", function () {
    function adjustWidths() {
        var containers2 = document.querySelectorAll(".container-2");
        var mainContainer = document.querySelector(".container");

        if (mainContainer) {
            containers2.forEach(function (lastContainer) {
                var rectLastContainer = lastContainer.getBoundingClientRect();
                var rectMainContainer = mainContainer.getBoundingClientRect();

                var spaceToRightLast = window.innerWidth - rectLastContainer.right;
                var spaceToRightMain = window.innerWidth - rectMainContainer.right;
                var spaceDifference = spaceToRightLast - spaceToRightMain;

                var newWidth = lastContainer.offsetWidth + spaceDifference;
                if (newWidth > 0) {
                    lastContainer.style.width = newWidth + "px";
                    lastContainer.style.maxWidth = newWidth + "px";
                } else {
                    console.warn(
                        "Calculated new width is invalid for",
                        lastContainer,
                        ":",
                        newWidth
                    );
                }
            });
        }
    }

    // Adjust widths initially and on resize or orientation change
    adjustWidths();
    window.addEventListener("resize", adjustWidths);
    window.addEventListener("orientationchange", adjustWidths);
});

// Function to initialize and start the count-up animation
document.addEventListener("DOMContentLoaded", function () {
    function initializeCountUp(element) {
        var endVal = parseInt(element.dataset.end, 10);
        var startVal = parseInt(element.dataset.start, 10);
        var duration = parseFloat(element.dataset.duration) || 2;
        var suffix = element.dataset.suffix || "";

        var countUpInstance = new CountUp(element, startVal, endVal, 0, duration, {
            suffix: suffix,
        });

        if (!countUpInstance.error) {
            countUpInstance.start();
        } else {
            console.error(countUpInstance.error);
        }
    }

    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                initializeCountUp(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }

    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    var observer = new IntersectionObserver(handleIntersection, options);

    document.querySelectorAll(".count-up").forEach((element) => {
        observer.observe(element);
    });
});

// Initialize Aspect Ratio Dynamically
const elements = document.querySelectorAll("[data-aspect-ratio-value]");
elements.forEach((element) => {
    const aspectRatioValue = element.getAttribute("data-aspect-ratio-value");
    if (aspectRatioValue) {
        element.style.aspectRatio = `12 / ${aspectRatioValue}`;
    }
});


function scrollToSection(selector) {
    var target = document.querySelector(selector);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}

$(window).on('load', function () {
    $('.preloader-content-wrapper').addClass('loaded');
    $(".svg-4").addClass("animate");
});