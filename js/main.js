$(document).ready(function(){
  // Popular Serials Slider
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




});