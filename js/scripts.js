document.addEventListener('DOMContentLoaded', () => {

  const menuButton = document.querySelector('.nav-button');

  menuButton.addEventListener('click', function () {
    document.body.classList.toggle('mob-menu-open');
    menuButton.classList.toggle('open');
  });

  const swiperIMG = new Swiper('.slider__images', {
    // параметры слайдера
    loop: false,
    speed: 2400,
    parallax: true,
    pagination: {
      el: '.slider__counter-all',
      type: 'custom',
      renderCustom: function (swiper, curent, total) {
        let totalResult = total >= 10 ? total : `0${total}`;
        return totalResult;
      }
    },
  });

  const swiperDETAILS = new Swiper('.slider__details', {
    // параметры слайдера
    loop: false,
    speed: 2400,
    parallax: true,
    grabCursor: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    mousewheel: {
      invert: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // on: {
    //   init() {
    //     this.el.addEventListener('mouseenter', () => {
    //       this.autoplay.stop();
    //     });

    //     this.el.addEventListener('mouseleave', () => {
    //       this.autoplay.start();
    //     });
    //   }
    // },
  });

  swiperIMG.controller.control = swiperDETAILS
  swiperDETAILS.controller.control = swiperIMG

  let gear = document.querySelector('.slider__gear');

  swiperDETAILS.on('slideNextTransitionStart', function () {
    gsap.to(gear, 2.4, {
      rotation: '+=40'
    });
  });
  swiperDETAILS.on('slidePrevTransitionStart', function () {
    gsap.to(gear, 2.4, {
      rotation: '-=40'
    });
  });

  let curent = document.querySelector('.slider__counter-now');
  let itemNumber = document.querySelector('.slider__item-nember');

  swiperDETAILS.on('slideChange', function () {
    let slideIndex = swiperDETAILS.realIndex + 1;
    let indResult = slideIndex >= 10 ? slideIndex : `0${slideIndex}`;
    gsap.to(curent, 0.2, {
      force3D: true,
      y: -20,
      opacity: 0,
      ease: Power2.easeOut,
      onComplete: function () {
        gsap.to(curent, 0.2, {
          force3D: true,
          y: 10,
        })
        curent.innerHTML = indResult
        itemNumber.innerHTML = indResult
      }

    });
    gsap.to(curent, 0.2, {
      force3D: true,
      y: 0,
      opacity: 1,
      ease: Power2.easeOut,
      delay: 0.6,
    });
  });

  MicroModal.init({
    openTrigger: 'data-micromodal-open',
    closeTrigger: 'data-micromodal-close',
    disableFocus: true,
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,

  });


});


