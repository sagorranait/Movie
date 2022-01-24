$(document).ready(function(){
  // Popular Serials Slider
  $('.serials-slider').slick({
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow:"<div class='slick-prev pull-left'><img src='../images/left-arrow.png'/></div>",
    nextArrow:"<div class='slick-next pull-right'><img src='../images/right-arrow.png'/></div>",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: true,
          dots: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          arrows: true,
          autoplay:true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  // Isotop Button Slider
  $('.button-group').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 9,
    slidesToScroll: 1,
    prevArrow:"<div class='slick-prev'><img src='../images/left-arrow.png'/></div>",
    nextArrow:"<div class='slick-next'><img src='../images/right-arrow.png'/></div>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Custom Video controls
  let video = document.querySelector('.video');
  let Juice = document.querySelector('.teaser-juice');
  // Play buttons
  let button  = document.querySelector('.teaser-play');
  let videoPlay = document.querySelector('.video-play');
  let videoPause = document.querySelector('.video-push');
  // Sound buttons
  let sound = document.querySelector('.teaser-sound');
  let volume = document.querySelector('.video-volume');
  let mute = document.querySelector('.video-mute');

  button.onclick = () => {
    if (video.paused) {
      videoPlay.classList.add('hide');
      video.play();
      videoPause.classList.remove('hide');
      videoPause.classList.add('show');
    }else{
      videoPlay.classList.remove('hide');
      videoPlay.classList.add('show');
      video.pause();
      videoPause.classList.add('hide');
    }
  }

  sound.onclick = () => {
    if (video.muted) {
      mute.classList.remove('show');
      mute.classList.add('hide');
      video.muted = false;
      volume.classList.remove('hide');
      volume.classList.add('show');
    }else{
      volume.classList.add('hide');
      video.muted = true;
      mute.classList.remove('hide');
      mute.classList.add('show');
    }
  }

  video.addEventListener('timeupdate', ()=>{
    var juicePos = video.currentTime / video.duration;
    Juice.style.width = juicePos * 100 + '%';
    if (video.ended) {
      videoPlay.classList.remove('hide');
      videoPlay.classList.add('show');
      videoPause.classList.remove('show');
      videoPause.classList.add('hide');
    }
  });

  // Movie Isotope
  // init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.movie-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});


});