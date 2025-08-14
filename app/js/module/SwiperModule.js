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


  // 
  functionSlider(".prod-review-slide", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: true,
    spaceBetween: 0,
    effect: "slide",
  });



  function initProductSlider() {
    const prod_slider = document.querySelectorAll(".prod-dt-slide");
    if (prod_slider) {
      prod_slider.forEach((item, i) => {
        const swiperThumb = item.querySelector(".prod-dt-slide-thumb .swiper");
        const swiperMain = item.querySelector(".prod-dt-slide-main .swiper");
        const itemImg = new Swiper(swiperThumb, {
          speed: 1200,
          slidesPerView: "auto",
          // slidesPerGroup: 2,
          initialSlide: 0,
          centeredSlides: false,
          loop: false,
          direction: "vertical",
          spaceBetween: 0,
          effect: "slide",
          breakpoints: {
            0: {
              direction: "horizontal",
            },
            931: {
              direction: "vertical",
            }
          }
        });
        const itemMain = new Swiper(swiperMain, {
          speed: 1200,
          slidesPerView: "auto",
          // slidesPerGroup: 2,
          initialSlide: 0,
          centeredSlides: false,
          loop: false,
          spaceBetween: 0,
          effect: "slide",
          thumbs: {
            swiper: itemImg,
          },
        });
      });
    }
  }

  function initProductPricePrivate() {
    const prices = document.querySelectorAll(".price")
    if (prices) {
      prices.forEach(price => {
        const priceEye = price.querySelector(".price-eye")
        const priceDel = price.querySelector(".price-del del")
        const pricePrivate = price.querySelector(".price-private")
        if (priceEye) {
          priceEye.addEventListener("click", () => {
            price.classList.toggle("active");
          })
        }
      });
    }
  }

  initProductSlider();
  initProductPricePrivate();

  window.initProductSlider = initProductSlider;
  window.initProductPricePrivate = initProductPricePrivate;

  document.addEventListener("variationChangedCustom", function (e) {
    initProductSlider();
    initProductPricePrivate();
  });

  document.addEventListener(
    "addonifyQuickViewModalContentLoaded",
    function (e) {
      initProductSlider();
    }
  );



  // const slide = document.querySelector(".prod-dt-slide");
  // let detcetScreen = window.innerWidth > 930;
  // if (slide && detcetScreen) {
  //   const thumb = slide.querySelector(".prod-dt-slide-thumb");
  //   const main = slide.querySelector(".prod-dt-slide-main");
  //   var mainHeight = main.offsetHeight;
  //   thumb.style.height = `${mainHeight}px`;
  // }


  functionSlider(".prod-related-slide", {
    speed: 1200,
    slidesPerView: "auto",
    // slidesPerGroup: 2,
    initialSlide: 0,
    centeredSlides: false,
    loop: true,
    spaceBetween: 0,
    effect: "slide",
  });



  const homesCate = document.querySelector('.homes-cate-slide');
  if (homesCate) {
    const swiperSquare = new Swiper('.homes-cate-slide  .swiper', {
      speed: 1200,
      slidesPerView: 10,
      initialSlide: 0,
      centeredSlides: false,
      loop: false,
      spaceBetween: 0,
      effect: "slide",
      navigation: {
        nextEl: '.homes-cate-slide .swiper-next',
        prevEl: '.homes-cate-slide .swiper-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        431: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        581: {
          slidesPerView: 6,
          slidesPerGroup: 6,
        },
        769: {
          slidesPerView: 8,
          slidesPerGroup: 8,
        },
        1201: {
          slidesPerView: 10,
          slidesPerGroup: 10,
        }
      },
      on: {
        init: function () {
          updateFraction(this);
        },
        slideChange: function () {
          updateFraction(this);
        }
      }
    });

    window.addEventListener('resize', () => {
      updateFraction(swiperSquare);
    });
    function getCurrentSlidesPerView(swiper) {
      const { breakpoints = {}, originalParams } = swiper.params;
      const current = swiper.currentBreakpoint;

      if (current && breakpoints[current] && breakpoints[current].slidesPerView) {
        return breakpoints[current].slidesPerView;
      }

      // Fallback
      return originalParams.slidesPerView || 1;
    }
    function updateFraction(swiper) {
      const perView = getCurrentSlidesPerView(swiper);
      const totalSlides = swiper.slides.length - (swiper.loopedSlides || 0) * 2;
      const totalViews = Math.ceil(totalSlides / perView);
      const currentView = swiper.snapIndex + 1;

      document.querySelector('.homes-cate-slide .current-slide').textContent = String(currentView).padStart(2, '0');
      document.querySelector('.homes-cate-slide .total-slide').textContent = String(totalViews).padStart(2, '0');
    }
  }

  const hotDeals = document.querySelectorAll('.homes-deals-slide');
  if (hotDeals) {
    hotDeals.forEach((hotDeal, index) => {
      const hotDealSlide = hotDeal.querySelector('.swiper');
      const hotDealPagi = hotDeal.querySelector('.swiper-pagination');
      const swiperSquare = new Swiper(hotDealSlide, {
        speed: 1200,
        slidesPerView: 4,
        initialSlide: 0,
        centeredSlides: false,
        loop: false,
        spaceBetween: 0,
        effect: "slide",
        navigation: {
          nextEl: hotDeal.querySelector('.swiper-next'),
          prevEl: hotDeal.querySelector('.swiper-prev'),
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          431: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          581: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          }
        },
        on: {
          init: function () {
            updateFraction(this);
          },
          slideChange: function () {
            updateFraction(this);
          }
        }
      });

      window.addEventListener('resize', () => {
        updateFraction(swiperSquare);
      });
      function getCurrentSlidesPerView(swiper) {
        const { breakpoints = {}, originalParams } = swiper.params;
        const current = swiper.currentBreakpoint;

        if (current && breakpoints[current] && breakpoints[current].slidesPerView) {
          return breakpoints[current].slidesPerView;
        }

        // Fallback
        return originalParams.slidesPerView || 1;
      }
      function updateFraction(swiper) {
        const perView = getCurrentSlidesPerView(swiper);
        const totalSlides = swiper.slides.length - (swiper.loopedSlides || 0) * 2;
        const totalViews = Math.ceil(totalSlides / perView);
        const currentView = swiper.snapIndex + 1;

        hotDeal.querySelector('.current-slide').textContent = String(currentView).padStart(2, '0');
        hotDeal.querySelector('.total-slide').textContent = String(totalViews).padStart(2, '0');
      }
    });

  }



  functionSlider(".prod-list-cate", {
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




