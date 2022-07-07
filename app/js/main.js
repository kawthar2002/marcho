$(function () {
  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

const popup = document.querySelector(".popup");
const button = document.querySelector(".video-popup__link");
const video = document.querySelector(".popup-inner__video");

button.addEventListener("click", (film) => {
  film.preventDefault();
  popup.classList.add("displayed");
});
popup.addEventListener("click", (event) => {
  const popupInner = document.querySelector(".popup-inner");
  if (event.composedPath().includes(popupInner)) {
    return;
  }

  if (popup && popup.classList.contains("displayed")) {
    popup.classList.remove("displayed");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }
});



function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
   
  function initializeClock(id, endtime) {
    const clock = document.querySelector('.countdown');
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      const t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
    const deadline= $('.countdown').attr('data-time');
    initializeClock('.countdown', deadline);

  

