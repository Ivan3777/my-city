let slideToShow = 0;

const modalBtns = document.querySelectorAll(".gallery-modal-btn");

modalBtns.forEach(function (button) {
  button.addEventListener("click", function () {
    const numberToShow = button.getAttribute("data-index");

    slideToShow = Number(numberToShow);
  });
});

//запуск библитеки модального окна
MicroModal.init({
  onShow: function () {
    slider.go(slideToShow);
  },
});

// запуск бибиотеки слайдера

const sliderContainer = document.querySelector(".splide");

const slider = new Splide(sliderContainer).mount();
