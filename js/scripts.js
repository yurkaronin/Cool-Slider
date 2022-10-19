
const menuButton = document.querySelector('.nav-button');

menuButton.addEventListener('click', function () {
  document.body.classList.toggle('mob-menu-open');
  menuButton.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', () => {
  const swiperIMG = new Swiper('.slider__images', {
    // параметры слайдера
    loop: false,
    speed: 2400,
    parallax: true,
    autoplay: true,
    mousewheel: {
      invert: false,
    },
  });
});
