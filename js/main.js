
// //Clocks block
// $( ".langs__clocks-item_spain" ).hover(function() {
// $(".langs__clocks-arrow").toggleClass('spain');

//Benefits slider
$(window).on('load', function (){
$('.benefits__inner').owlCarousel({
      nav: true,
      slideSpeed: 4300,
      paginationSpeed: 4400,
      items: 4,
      loop: false,
      dots: false,
      navText: ["", ""],
      navClass: ['slider__arrow-prev', 'slider__arrow-next']

  });
});

//Teachers sync slider
$(document).ready(function() {

  var sync1 = $(".teachers__top");
  var sync2 = $(".teachers__bottom");
  var slidesPerPage = 6; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: true,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    navText: ["", ""],
    navClass: ['slider__arrow-prev', 'slider__arrow-next']
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: true,
    smartSpeed: 800,
    slideSpeed : 800,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100,
    navText: ["", ""],
    navClass: ['slider__arrow-prev', 'slider__arrow-next']
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});

//Tabs
(function($) {
$(function() {

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });

});
})(jQuery);

//News slider
$(window).on('load', function (){
$('.news__slider').owlCarousel({
      nav: true,
      items: 1,
      loop: false,
      dots: false,
      navText: ["", ""],
      navClass: ['slider__arrow-prev', 'slider__arrow-next']
  });
});

//Reviews slider
$(window).on('load', function (){
$('.reviews__slider').owlCarousel({
      nav: false,
      items: 1,
      loop: false,
      dots: true
  });
});