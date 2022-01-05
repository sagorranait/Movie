$(document).ready(function(){
  $('.serials-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow:"<div class='slick-prev pull-left'><img src='../images/left-arrow.png'/></div>",
    nextArrow:"<div class='slick-next pull-right'><img src='../images/right-arrow.png'/></div>",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});