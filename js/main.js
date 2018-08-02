$( ".langs__clocks-item_spain" ).hover(function() {
$(".langs__clocks-arrow").toggleClass('spain');
});

$(window).on('load', function (){
$('.benefits__inner').owlCarousel({
      nav: true,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      slideSpeed: 4300,
      paginationSpeed: 4400,
      items: 4,
      loop: false,
      dots: false,
      // center: true,
      // mouseDrag: false,
      navText: ["", ""],
      navClass: ['slider__arrow-prev', 'slider__arrow-next'],

  });
});