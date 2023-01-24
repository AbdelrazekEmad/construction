// Start Slider Hero
$(".owl-carousel-hero").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: false,
  navSpeed: 500,
  autoplay: true,
  autoplaySpeed: 750,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".owl-carousel-testimonials").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navSpeed: 500,
  autoplay: true,
  autoplaySpeed: 750,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".owl-carousel-clients").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  navSpeed: 500,
  autoplay: true,
  autoplaySpeed: 450,
  animateOut: "fadeOut",
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
  },
});

$(".owl-carousel-single-product").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  autoHeight: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});
