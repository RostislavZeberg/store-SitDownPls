var el = document.querySelector(".slider-width");
var elementWidth = getComputedStyle(el, null).width;
var width = elementWidth;
var size = width.replace(/[^0-9]/g, "");

// ПОИСК (изменить цвет иконки)
const searcheN = document.querySelector(".searche__input");
const searcheIconGray = document.querySelector(".searche__icon-gray");
const searcheIconColor = document.querySelector(".searche__icon-color");

searcheN.addEventListener("keydown", function () {
  // this.style.backgroundColor = 'pink';
  searcheIconGray.classList.add("searche__icon--active");
  searcheIconColor.classList.remove("searche__icon-color");
});
// searcheN.addEventListener('keyup', function(){
//   this.style.backgroundColor = '';
// })

// СЕЛЕКТ INDEX
const elementIndexCity = document.querySelector("#city");
const choicesIndexCity = new Choices(elementIndexCity, {
  searchEnabled: false,
});

const elementIndexFurnitur = document.querySelector("#furniture");
const choicesIndexFurnitur = new Choices(elementIndexFurnitur, {
  searchEnabled: false,
});

// СЕЛЕКТ CATALOG select__header
const checkClassCatalog = document.querySelector(".main-catalog");

if (checkClassCatalog) {
  var expanded = false;
  function checkboxesFurniture() {
    var checkboxes = document.getElementById("checkboxesFurniture");
    var selectHeader = document.querySelector(".select__header-furniture");
    var down = document.querySelector(".down-furniture");
    var up = document.querySelector(".up-furniture");
    if (!expanded) {
      checkboxes.style.display = "block";
      selectHeader.style.background = "#fff";
      down.style.display = "none";
      up.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      selectHeader.style.background = "#f7f7f7";
      down.style.display = "block";
      up.style.display = "none";
      expanded = false;
    }
  }

  function checkboxesPrice() {
    var checkboxes = document.getElementById("checkboxesPrice");
    var selectHeader = document.querySelector(".select__header-price");
    var down = document.querySelector(".down-price");
    var up = document.querySelector(".up-price");
    if (!expanded) {
      checkboxes.style.display = "block";
      selectHeader.style.background = "#fff";
      down.style.display = "none";
      up.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      selectHeader.style.background = "#f7f7f7";
      down.style.display = "block";
      up.style.display = "none";
      expanded = false;
    }
  }

  function checkboxeDsiscount() {
    var checkboxes = document.getElementById("checkboxeDsiscount");
    var selectHeader = document.querySelector(".select__header-discount");
    var down = document.querySelector(".down-discount");
    var up = document.querySelector(".up-discount");
    if (!expanded) {
      checkboxes.style.display = "block";
      selectHeader.style.background = "#fff";
      down.style.display = "none";
      up.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      selectHeader.style.background = "#f7f7f7";
      down.style.display = "block";
      up.style.display = "none";
      expanded = false;
    }
  }

  function checkboxeColor() {
    var checkboxes = document.getElementById("checkboxeColor");
    var selectHeader = document.querySelector(".select__header-color");
    var down = document.querySelector(".down-color");
    var up = document.querySelector(".up-color");
    if (!expanded) {
      checkboxes.style.display = "block";
      selectHeader.style.background = "#fff";
      down.style.display = "none";
      up.style.display = "block";
      expanded = true;
    } else {
      checkboxes.style.display = "none";
      selectHeader.style.background = "#f7f7f7";
      down.style.display = "block";
      up.style.display = "none";
      expanded = false;
    }
  }

  // const elementCatalogCategory = document.querySelector('#category');
  // const choicesCatalogCategory = new Choices(elementCatalogCategory, {
  //   searchEnabled: false,
  // });

  // const elementCatalogPrice = document.querySelector('#price');
  // const choicesCatalogPrice = new Choices(elementCatalogPrice, {
  //   searchEnabled: false,
  // });

  // const elementCatalogDiscount = document.querySelector('#discount');
  // const choicesCatalogDiscount = new Choices(elementCatalogDiscount, {
  //   searchEnabled: false,
  // });

  // const elementCatalogColor = document.querySelector('#color');
  // const choicesCatalogColor = new Choices(elementCatalogColor, {
  //   searchEnabled: false,
  // });
}

// СЛАЙДЕР АВТО SWIPER INDEX
let checkSliderAuto = document.querySelector(".hero__swiper");

if (checkSliderAuto) {
  const swiper = new Swiper(".hero__swiper", {
    autoplay: {
      delay: 2500,
      stopOnlastSlide: false,
      disableOninteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    a11y: {
      paginationBulletMessage: "Название слайда {{index}}",
    },
    // КУБ
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    // ПЕРЕВОРОТ
    // effect: 'flip',
    // flipEffect: {
    //   slideShadows: true,
    //   sped: 1000000,
    //   limitRotation: true
    // },
    // ПРОЗРАЧНОСТЬ
    // effect: 'fade',
    // effectEffect: {
    //   crossFade: true
    // },
    loop: true,
    sped: 1000,
    autoHeight: true,
    disableOnInteraction: false,
  });
}

// СЛАЙДЕР SWIPER INDEX
let checkClassSwipeTop = document.querySelector(".offers__swiper");

if (checkClassSwipeTop) {
  const swiper = new Swiper(".offers__swiper", {
    preloadImages: false,
    // autoHeight: true,

    lazy: {
      loadOnTranssitionStart: false,
      loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
      },
    },

    loop: true,
    navigation: {
      nextEl: ".s-button-next",
      prevEl: ".s-button-prev",
    },
  });
}

let checkClassSwipeBottom = document.querySelector(".useful__swiper");

if (checkClassSwipeBottom) {
  const swiper = new Swiper(".useful__swiper", {
    preloadImages: false,

    lazy: {
      loadOnTranssitionStart: false,
      loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
      },
      1350: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
    },

    loop: true,
    navigation: {
      nextEl: ".s-button-next",
      prevEl: ".s-button-prev",
    },
  });
}

// СЛАЙДЕР SWIPER PRODUCT-CARD
let checkClassSimilarSlider = document.querySelector(".similar__swiper");

if (checkClassSimilarSlider) {
  const swiper = new Swiper(".similar__swiper", {
    preloadImages: false,
    lazy: {
      loadOnTranssitionStart: false,
      loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 32,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 32,
      },
      1350: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 32,
      },
    },

    loop: true,
    navigation: {
      nextEl: ".s-button-next",
      prevEl: ".s-button-prev",
    },
    // autoHeight: true,
  });
}

// СЛАЙДЕР SWIPER CARD-PRODUC
let checkClassViewing = document.querySelector(".viewing");

if (checkClassViewing) {
  const swiper = new Swiper(".viewing__swiper", {
    preloadImages: false,
    lazy: {
      loadOnTranssitionStart: false,
      loadPrevNext: false,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 78,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 78,
      },
    },

    loop: true,
    navigation: {
      nextEl: ".s-button-next",
      prevEl: ".s-button-prev",
    },
    // autoHeight: true,
  });
}

// СМОТРЕТЬ БОЛЬШЕ ТОВАРОВ
const ratingCard = document.querySelector(".rating__card-next");

if (ratingCard) {
  const ratingBtn = document.querySelector(".rating__btn");

  ratingBtn.addEventListener("click", function () {
    ratingCard.classList.remove("rating__card--none");
    ratingBtn.classList.add("rating__btn--none");
  });
}

var sendingBuy = document.querySelector(".sending__btn");
var buyOneClick = document.querySelector(".buy-one-click");
var podlogka = document.querySelector(".podlogka");
var thanks = document.querySelector(".thanks");
var orderName = document.querySelector(".order__name");
var orderTel = document.querySelector(".order__tel");

// FORM
var selector = document.querySelector("input[type='tel']");

if (selector) {
  sendingBuy.addEventListener("click", function () {
    const JustValidateConst = JustValidate;
    if (JustValidateConst.isValidationSuccess === true) {
      podlogka.classList.add("podlogka--active");
      thanks.classList.remove("thanks--none");
      buyOneClick.classList.add("buy-one-click--none");
      orderName.value = "";
      orderTel.value = "";
    }
  });

  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  var JustValidate = new JustValidate(".form", {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30,
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
      mail: {
        required: true,
        email: true,
      },
    },
    messages: {
      name: {
        required: "Вы не ввели имя",
        minLength: "Минимум 2 символа",
        maxLength: "Максимально 30 символов",
      },
      tel: {
        required: "Вы не ввели телефон",
        function: "Недопустимый формат",
      },
      email: {
        required: "Вы не ввели email",
        email: "Недопустимый формат",
      },
    },
  });
}

// PAGE CATALOG
const btnPage1 = document.querySelector(".button__page-1");

if (btnPage1) {
  const btnPage2 = document.querySelector(".button__page-2");
  const btnPage3 = document.querySelector(".button__page-3");
  const productList1 = document.querySelector(".product__list-1");
  const productList2 = document.querySelector(".product__list-2");
  const productList3 = document.querySelector(".product__list-3");

  btnPage1.addEventListener("click", function () {
    productList1.classList.remove("product__list--none");
    productList2.classList.add("product__list--none");
    productList3.classList.add("product__list--none");
    btnPage1.classList.add("button__page--active");
    btnPage2.classList.remove("button__page--active");
    btnPage3.classList.remove("button__page--active");
  });

  btnPage2.addEventListener("click", function () {
    productList1.classList.add("product__list--none");
    productList2.classList.remove("product__list--none");
    productList3.classList.add("product__list--none");
    btnPage1.classList.remove("button__page--active");
    btnPage2.classList.add("button__page--active");
    btnPage3.classList.remove("button__page--active");
  });

  btnPage3.addEventListener("click", function () {
    productList1.classList.add("product__list--none");
    productList2.classList.add("product__list--none");
    productList3.classList.remove("product__list--none");
    btnPage1.classList.remove("button__page--active");
    btnPage2.classList.remove("button__page--active");
    btnPage3.classList.add("button__page--active");
  });
}

// CARD-PRODUCT
const btnProductCard = document.querySelector(".card-product__top-left");

if (btnProductCard) {
  // const podlogka = document.querySelector('.podlogka');
  const viewingCard = document.querySelector(".viewing");
  const viewingSwipe = document.querySelector(".viewing__swiper");
  const viewingCardClose = document.querySelector(".viewing__close");

  btnProductCard.addEventListener("click", function () {
    podlogka.classList.add("podlogka--active");
    viewingCard.classList.remove("viewing-none");
    viewingSwipe.classList.remove("viewing-none");
  });

  viewingCardClose.addEventListener("click", function () {
    podlogka.classList.remove("podlogka--active");
    viewingCard.classList.add("viewing-none");
    viewingSwipe.classList.add("viewing-none");
  });

  const buyOneClickButton = document.querySelector(".buy__btn");
  // const buyOneClick = document.querySelector('.buy-one-click');
  const buyOneClickClose = document.querySelector(".buy-one-click__close");

  buyOneClickButton.addEventListener("click", function () {
    podlogka.classList.add("podlogka--active");
    buyOneClick.classList.remove("buy-one-click--none");
  });

  buyOneClickClose.addEventListener("click", function () {
    podlogka.classList.remove("podlogka--active");
    buyOneClick.classList.add("buy-one-click--none");
  });

  // const sendingBuy = document.querySelector('.sending__buy');
  // const thanks = document.querySelector('.thanks');
  const thanksClose = document.querySelector(".thanks__close");

  // sendingBuy.addEventListener('click', function () {
  //   podlogka.classList.add('podlogka--active');
  // thanks.classList.remove('thanks--none');
  //   buyOneClick.classList.add('buy-one-click--none');
  // });

  thanksClose.addEventListener("click", function () {
    podlogka.classList.remove("podlogka--active");
    thanks.classList.add("thanks--none");
  });
}

// PRICE FILTERS
const rengeSlider = document.getElementById("renge-slider");
if (rengeSlider) {
  noUiSlider.create(rengeSlider, {
    start: [2000, 150000],
    connect: true,
    step: 1,
    range: {
      min: [2000],
      max: [150000],
    },
  });

  const input0 = document.getElementById("input-0");
  const input1 = document.getElementById("input-1");
  const inputs = [input0, input1];

  rengeSlider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRengeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    rengeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      setRengeSlider(index, e.currentTarget.value);
    });
  });

  const rengeSliderM = document.getElementById("rengeM-slider");
  noUiSlider.create(rengeSliderM, {
    start: [2000, 150000],
    connect: true,
    step: 1,
    range: {
      min: [2000],
      max: [150000],
    },
  });

  const inputM0 = document.getElementById("inputM-0");
  const inputM1 = document.getElementById("inputM-1");
  const inputsM = [inputM0, inputM1];

  rengeSliderM.noUiSlider.on("update", function (values, handle) {
    inputsM[handle].value = Math.round(values[handle]);
  });

  const setRengeSliderM = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    rengeSliderM.noUiSlider.set(arr);
  };

  inputsM.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      setRengeSliderM(index, e.currentTarget.value);
    });
  });
}

// BURGER
let burger = document.querySelector(".burger");

if (burger) {
  let menu = document.querySelector(".center__nav");

  burger.addEventListener("click", function () {
    menu.classList.toggle("center__nav--active");
    burger.classList.toggle("burger-center--active");
  });
}
