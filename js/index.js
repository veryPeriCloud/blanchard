document.addEventListener('DOMContentLoaded', function() {

  // HEADER ХЭДЕР ==========================================================================================================================================================
  //Бургер-меню

  const menu = document.querySelector('.burger-menu'),
    menuItem = document.querySelectorAll('.header-top__nav-link'),
    burger = document.querySelector('.burger');

  burger.addEventListener (`click`, () => {
    menu.classList.toggle('is-active');
    burger.classList.toggle('is-active')
  });

  // Закрытие бургер-меню по клику на ссылку
  menuItem.forEach(el => {
    el.addEventListener('click', (e) => {
      menu.classList.toggle('is-active');
      burger.classList.toggle('is-active')
    });
  });

  // SEARCH КНОПКА ПОИСК

  let searchopen = document.querySelector('.header-bottom__search-btn'),
    form = document.querySelector('.header-bottom__form');

  searchopen.addEventListener(`click`, function() { // открыть по клику на кнопку форму
    form.classList.add('header-bottom__form-active');
    this.classList.add('active');
  });

  document.addEventListener(`click`, function(e) {
    let target = e.target;
    if (!target.closest('.header-bottom__form-container')) {
    form.classList.remove('header-bottom__form-active');
      form.querySelector('input').value = "";
      document.querySelector('.header-bottom__search-btn').classList.remove('active')
    }
  });


  let searchclose = document.querySelector('.header-bottom__search-btn_close'); // Закрыть форму по нажатию на крестик
  searchclose.addEventListener(`click`, function(e) {
    form.classList.remove('header-bottom__form-active');
      form.querySelector('input').value = "";
      document.querySelector('.header-bottom__search-btn').classList.remove('active')
  });


  // DROPDOWN MENU
  const button = document.querySelectorAll('.dropdown-btn');
  const drop = document.querySelectorAll('.dropdown-menu')

  button.forEach(el => {
    el.addEventListener('click', (e) => {
      button.forEach(el => {el.classList.remove(('button--active'))});
      e.currentTarget.classList.add('button--active');
      drop.forEach(el => {el.classList.remove(('dropdown-menu--active'))})
      e.currentTarget.closest('li').querySelector('.dropdown-menu').classList.toggle('dropdown-menu--active');
    });
  });

  document.addEventListener('click', (e) => {
    // console.log(e.target)
    if (!e.target.classList.contains('dropdown-menu') && !e.target.classList.contains('dropdown-btn')) {
      button.forEach(el => {el.classList.remove(('button--active'))});
      drop.forEach(el => {el.classList.remove(('dropdown-menu--active'))})
    }
  });


  // Hero =============================================================================================================================================================
  // SWIPER1
  const slider1 = document.querySelector('.swiper1');

  let mySwiper1 = new Swiper(slider1, {
    autoplay: {
      delay: 2000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    loop: true,
  });


  // GALLERY ГАЛЕРЕЯ =========================================================================================================================================================

  // Swiper2 Gallery

  const slider2 = document.querySelector('.gallery__swiper');

  let mySwiper2 = new Swiper(slider2, {

    navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-prev',
    },

    pagination: {
      el: '.gallery__pagination',
      type: 'fraction',
      сlickable: true,
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },

    breakpoints: {
      300: {
        slidesPerView: 1, //2
        slidesPerGroup: 1, //3
            //spaceBetween: 34,
        grid: {
          rows: 1,
          fill: "row"
        },
        initialSlide: 1,
      },
      501: {
        slidesPerView: 2, //2
        slidesPerGroup: 2, //3
        spaceBetween: 34,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      769: {
        slidesPerView: 2, //2
        slidesPerGroup: 3, //3
        spaceBetween: 34,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
      1024: {
        slidesPerView: 2, //'auto'
        slidesPerGroup: 3, //3
        spaceBetween: 34,
        grid: {
          rows: 2, //2
          fill: "row"
        },
      },
      1366: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
        grid: {
          rows: 2,
          fill: "row"
        },
      },
    },
  });



  // СЕЛЕКТ В ГАЛЕРЕЕ
  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    placeholder: true,
    itemSelectText: '',
    duplicateItemsAllowed: false,
  });

  // Модальное окно

  const modal = new GraphModal();


  // Swiper3 Издания ========================================================================================================================================================



  const slider3 = document.querySelector('.editions__swiper');
  function editionSlider() {
    if (window.innerWidth > 320 && slider3.dataset.mobile == `false`) {

      let mySwiper3;

      mySwiper3 = new Swiper(slider3, {
        init: true,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: '.editions__button-next',
          prevEl: '.editions__button-prev',
        },

        pagination: {
          el: '.editions__pagination',
          type: 'fraction',
          clickable: true,
        },

        a11y: {
          prevSlideMessage: 'Предыдущий слайд',
          nextSlideMessage: 'Следующий слайд',
        },
        breakpoints: {

          321: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
            grid: {
              rows: 2,
              fill: "row"
            },
          },
          766: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 34,
            grid: {
              rows: 1,
              fill: "row"
            },
          },

          769: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 49,
            grid: {
              rows: 1,
              fill: "row"
            },
          },

          1025: {
            slidesPerView: 2,
            spaceBetween: 50,
          },

          1366: {
            slidesPerView: 3,
            spaceBetween: 50,
            slidesPerGroup: 3,
            grid: {
              rows: 1,
              fill: "row"
            },
          },
        }
      });
      slider3.dataset.mobile = 'true';
    }

    if (window.innerWidth <= 320) {
      slider3.dataset.mobile = 'false';

      if (slider3.classList.contains('swiper-initialized')) {
        slider3.destroy();
      }
    }
  };
  editionSlider();


  window.addEventListener('resize', () => {
    editionSlider();
  });

  // Swiper4 Проекты

  const slider4 = document.querySelector('.projects__swiper');

  let mySwiper4 = new Swiper(slider4, {
    navigation: {
      nextEl: '.projects__button-next',
      prevEl: '.projects__button-prev',
    },

    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд',
    },

    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
        grid: {
          rows: 1,
          fill: "row"
        },
      },
      501: {
          slidesPerView: 2,
          spaceBetween: 34,
          grid: {
            rows: 1,
            fill: "row"
          },
        },
      769: {
        slidesPerView: 2,
        spaceBetween: 49,
        grid: {
          rows: 1,
          fill: "row"
        },
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
          fill: "row"
         },
      },
    },
  });


  // CATALOG КАТАЛОГ===========================================================================================================================================================

    document.querySelectorAll(`.catalog__tabs-btn`).forEach(function(catalogTabsBtn) {
      catalogTabsBtn.addEventListener(`click`, function(event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll(`.catalog__tabs-content`).forEach(function(catalogTabsContent) {
          catalogTabsContent.classList.remove(`catalog__tabs-content--active`)
        })
        document.querySelector(`[data-target="${path}"]`).classList.add(`catalog__tabs-content--active`)
      })
    });
    document.querySelectorAll(`.catalog__tabs-btn`).forEach(function(catalogTabsBtn) {
      catalogTabsBtn.addEventListener(`click`, function(event) {
         // const path = event.currentTarget.dataset.path

        document.querySelectorAll(`.catalog__tabs-btn`).forEach(function(catalogTabsBtn) {
          catalogTabsBtn.classList.remove(`catalog__tabs-btn--active`)
        })
        //document.querySelector(`[data-target="${path}"]`).classList.add(`tabs__btn-active`)
        catalogTabsBtn.classList.add(`catalog__tabs-btn--active`)
      })
    });

  //  Чтобы появилась другая картинка для остальных художников

    document.querySelectorAll(`.catalog__accordion-link`).forEach(function(catalogAccordionLink) {
      catalogAccordionLink.addEventListener(`click`, function(event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll(`.catalog__left-container`).forEach(function(catalogLeftContainer) {
          catalogLeftContainer.classList.remove(`catalog__left-container--active`)
        })
        document.querySelector(`[data-target="${path}"]`).classList.add(`catalog__left-container--active`)
      })
    });
    document.querySelectorAll(`.catalog__accordion-link`).forEach(function(catalogAccordionLink) {
      catalogAccordionLink.addEventListener(`click`, function(event) {

        document.querySelectorAll(`.catalog__accordion-link`).forEach(function(catalogAccordionLink) {
          catalogAccordionLink.classList.remove(`catalog__accordion-link--active`)
        })
        catalogAccordionLink.classList.add(`catalog__accordion-link--active`)
      })
    });

  //Чтобы появилась другая картинка для других периодов при клике на серое изображение

  document.querySelectorAll(`.catalog__accordion-content_left`).forEach(function(catalogAccordionContentLeft) {
    catalogAccordionContentLeft.addEventListener(`click`, function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll(`.catalog__left-container`).forEach(function(catalogLeftContainer) {
        catalogLeftContainer.classList.remove(`catalog__left-container--active`)
      })
      document.querySelector(`[data-target="${path}"]`).classList.add(`catalog__left-container--active`)
    })
  });

  $( function() {
    $( ".accordion" ).accordion({
      header: "> .catalog__item > .catalog__accordion-top",
      icons: false,
      heightStyle: "content",
      collapsible: true,
    });

    $( ".accordion" ).accordion( "refresh")
  });

  // Автоскролл (при нажатии на художника сайт доскролил до информации про него)

  // Для списка художников

  var hiddenElement = document.getElementById("artist", "domenico");

  document.querySelectorAll(`.catalog__accordion-link`).forEach(function(catalogAccordionLink) {
    function handleButtonClick() {
      hiddenElement.scrollIntoView({block: "start", behavior: "smooth"});
    }
    catalogAccordionLink.addEventListener(`click`, handleButtonClick)
  });

  // var hiddenElement = document.querySelector('.catalog__left-content');

  // document.querySelectorAll(`.catalog__accordion-btn`).forEach(function(catalogAccordionBtn) {
  //   function handleButtonClick() {
  //     hiddenElement.scrollIntoView({behavior: "smooth"});
  //   }
  //   catalogAccordionBtn.addEventListener(`click`, handleButtonClick)
  // });

  // // Для пустых аккордеонов

  // document.querySelectorAll(`.catalog__accordion-content_left`).forEach(function(catalogAccordionContentLeft) {
  //   function handleButtonClick() {
  //     hiddenElement.scrollIntoView({behavior: "smooth"});
  //   }
  //   catalogAccordionContentLeft.addEventListener(`click`, handleButtonClick)
  // });





  // EVENTS СОБЫТИЯ===========================================================================================================================================================

  //События: Нажать на кнопку и скрыть ее
  document.querySelector(`.events__btn-more`).addEventListener (`click`, function () {
    document.querySelector(`.events__btn-more`).classList.toggle(`events__btn-more--hidden`)
  });

   //События: показать скрытые блоки
  $(function(){
    $('.events__btn-more').click(function(){
      $('.events__list').toggleClass('show');
    });
  });

  const slider5 = document.querySelector('.events__swiper');

    let mySwiper5;

    function mobileSlider() {
      if (window.innerWidth <= 500 && slider5.dataset.mobile == `false`) {
        mySwiper5 = new Swiper(slider5, {
          slidesPerView: 1,
          spaceBetween: 10,
          //loop: true,
          slideClass: 'events__item',
          pagination: {
            el: '.events__swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
        });

        slider5.dataset.mobile = `true`;
      }

      if (window.innerWidth > 500) {
        slider5.dataset.mobile = `false`;

        if (slider5.classList.contains('swiper-initialized')) {
          mySwiper5.destroy();
        }
      }
    }
    mobileSlider();

    window.addEventListener('resize', () => {
      mobileSlider();
    });


  // EDITIONS ИЗДАНИЯ=========================================================================================================================================================

  const btn = document.querySelector('.editions__checkbox-btn');
  const blocks = document.querySelectorAll('.editions__checkbox-item');

  btn.addEventListener('click', () => {
    if (!btn.classList.contains('editions__checkbox-btn-active')) {
      blocks.forEach(el => {
        el.classList.add('editions__checkbox-item-active');
    });

    btn.classList.add('editions__checkbox-btn-active');
    } else {
      blocks.forEach(el => {
        el.classList.remove('editions__checkbox-item-active');
      if (el.querySelector('input').checked) {
      el.classList.add('editions__checkbox-item-active');
      }
    });

    btn.classList.remove('editions__checkbox-btn-active');
    }

  });


  // КОНТАКТЫ ВАЛИДАТОР ДЛЯ ФОРМЫ ==============================================================================================================================================

  // Маска для телефона Inputmask
let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);


let selector2 = document.querySelector('input[type="tel"]');

selector2.addEventListener('input', function(){
	// console.log(selector2.value)

	const re = /^\d*(\.\d+)?$/

	// console.log(selector2.value.match(/[0-9]/g).length)

	// console.log(selector2.value.replace(/[0-9]/g, "0"));

});

let styles = getComputedStyle(document.documentElement);
let colorValue = styles.getPropertyValue('--color-wrong');

// рабочий вариант
let validateForms = function(selector, rules, messages, successModal, yaGoal) {
	new window.JustValidate(selector, {
		rules: rules,
    messages: messages,
    colorWrong: colorValue,

		submitHandler: function(form) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {

            new GraphModal().open('callback'); //Открытие модального окна при отправке формы
            console.log('Отправлено');
					}

				}

			}


			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			form.reset();

		}
	});

}

validateForms('.contacts__form', {
  name: {
    required: true,
    minLength: 3,
    maxLength: 30,
    strength: {
      custom: '[A-Za-zА-Яа-яЁё]+',
    }
  },
  tel: {
    required: true,
    function: (name, value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Number(phone) && phone.length === 10
    }
  }},
  // tooltip: {
  //   fadeOutClass: '.hide' // default value - just-validate-tooltip-hide
  // },
  {
    name: {
      required: 'Недопустимый формат',
      minLength: 'Минимальная длина 3 символа',
      strength: 'Недопустимый формат'
    },
    tel: {
      required: 'Недопустимый формат',
      function: 'Недопустимый формат'
    },

}, '.thanks-popup', 'send goal');


  // ЯНДЕКС КАРТА
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      center: [55.75810432229357,37.602461791015514],
      zoom: 15,
      controls: ['geolocationControl'],
      },
      {
      autoFitToViewport: 'always',
      searchControlProvider: 'yandex#search'
    });

    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: "small",
        right: "0",
      }
    });
    myMap.controls.add(zoomControl);

    // Создание геообъекта с типом точка (метка).
    // var myGeoObject = new ymaps.GeoObject({
    //   geometry: {
    //   type: "Point", // тип геометрии - точка
    //   coordinates: [55.75810432229357,37.602461791015514] // координаты точки
    //   }
    // });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Местоположение шоурума №4'
      }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/placemark.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [0, 0]
    }),

    myMap.geoObjects
      .add(myPlacemark);
  };
});
