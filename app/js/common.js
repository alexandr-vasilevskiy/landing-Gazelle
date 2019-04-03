$(function() {

  // tabs
  $('#tabs a').tabs();

  // owl-carousel
  $('.owl-carousel').on('initialized.owl.carousel');

  $('.boots-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    navText: ['<img src="img/svg/arrow.svg">', '<img src="img/svg/arrow.svg">'],
    smartSpeed: 700,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1100: {
        items: 3
      }
    },
  });

  $('.feedback-carousel').owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed: 700,
    });

});


