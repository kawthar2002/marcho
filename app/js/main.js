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
