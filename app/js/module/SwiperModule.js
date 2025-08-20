export default function SwiperModule() {
  function functionSlider(element, customizeOption, typePagi) {
    const swiperSlider = document.querySelectorAll(element);
    if (swiperSlider) {
      swiperSlider.forEach((item) => {
        const swiper = item.querySelector(".swiper");
        const pagi = item.querySelector(".swiper-pagination");
        const next = item.querySelector(".swiper-next");
        const prev = item.querySelector(".swiper-prev");
        if (!typePagi) {
          typePagi = "bullets";
        }
        var slide = new Swiper(swiper, {
          watchSlidesProgress: true,
          pagination: {
            el: pagi,
            type: typePagi,
            clickable: true,
          },
          navigation: {
            nextEl: next,
            prevEl: prev,
          },
          fadeEffect: {
            crossFade: true,
          },
          ...customizeOption,
        });
      });
    }
  }

  functionSlider(".element", {
    speed: 1200,
    autoplay: {
      delaY: 5000,
    },
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 24,
    effect: "slide",
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        freeMode: true,
      },
      500: {
        slidesPerView: 2.2,
      },
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });

  // =================Splide
  const splides = document.querySelectorAll(".logoSplide .splide")
  if (splides) {
    splides.forEach((splidex, index) => {
      new Splide(splidex, {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perMove: 1,
        perPage: 9,
        direction: index == 1 ? "rtl" : "ltr",
        autoScroll: {
          speed: 0.5,
        },
        breakpoints: {
          0: {
            perPage: 3,
            gap: 6,
          },
          420: {
            perPage: 3,
            gap: 6,
          },
          501: {
            perPage: 4,
            gap: 6,
          },
          1201: {
            perPage: 5,
            gap: 8,
          }
        },
      }).mount(window.splide.Extensions);
    })
  }

  const twosplides = document.querySelectorAll(".twoSplide .splide")
  if (twosplides) {
    twosplides.forEach((splidex, index) => {
      new Splide(splidex, {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perMove: 1,
        perPage: 4,
        direction: index == 1 ? "rtl" : "ltr",
        gap: 16,
        autoScroll: {
          speed: 0.5,
        },
        breakpoints: {
          420: {
            perPage: 2,
          },
          501: {
            perPage: 3,
          },
          769: {
            perPage: 4,
            gap: 12,
          },
          1201: {
            perPage: 4,
            gap: 12,
          }
        },
      }).mount(window.splide.Extensions);
    })
  }

  const marquees = document.querySelectorAll(".marquee .splide")
  if (marquees) {
    marquees.forEach((marquee, index) => {
      new Splide(marquee, {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perMove: 1,
        perPage: 4,
        autoScroll: {
          speed: 0.5,
        },
        breakpoints: {
          0: {
            perPage: 3,
            gap: 6,
          },
          1201: {
            perPage: 3,
            gap: 8,
          }
        },
      }).mount(window.splide.Extensions);
    })
  }

  const splideBtns = document.querySelectorAll(".hd-top__splide .splide")
  if (splideBtns) {
    splideBtns.forEach((splidex, index) => {
      new Splide(splidex, {
        type: 'slide',
        drag: 'free',
        focus: 'center',
        perPage: 4,
        gap:6,
        direction: index == 1 ? "rtl" : "ltr",
        autoScroll: {
          speed: 0.5,
        },
        breakpoints: {
          0: {
            perPage: 3,
            gap: 6,
          },
          420: {
            perPage: 3,
            gap: 6,
          },
          501: {
            perPage: 4,
            gap: 6,
          },
          1201: {
            perPage: 5,
            gap: 8,
          }
        },
      }).mount(window.splide.Extensions);
    })
  }

  functionSlider(".dmsp-list", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
  });
  functionSlider(".homes-vcher__slide", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
  });
  functionSlider(".homes-flash__slide ", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
  });
  functionSlider(".homes-material__slide", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: true,
    slideToClickedSlide: true,
    spaceBetween: 0,
    effect: "slide",
  });
  functionSlider(".homes-resrch", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: true,
    spaceBetween: 0,
    effect: "slide",
  });

  functionSlider(".homes-recent", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: false,
    spaceBetween: 0,
    effect: "slide",
  });
}




