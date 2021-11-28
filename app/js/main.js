$(function () {

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="8px" height="16px" viewBox="0 0 8 16" version="1.1"><g><path d="M 0.992188 7.46875 L 5.242188 3.21875 C 5.535156 2.925781 6.007812 2.925781 6.300781 3.21875 L 7.007812 3.925781 C 7.300781 4.21875 7.300781 4.695312 7.007812 4.984375 L 3.996094 8 L 7.007812 11.011719 C 7.304688 11.304688 7.304688 11.78125 7.007812 12.070312 L 6.304688 12.78125 C 6.007812 13.074219 5.535156 13.074219 5.242188 12.78125 L 0.992188 8.53125 C 0.695312 8.238281 0.695312 7.761719 0.992188 7.46875 Z M 0.992188 7.46875 "/</g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="8px" height="16px" viewBox="0 0 8 16" version="1.1"><g><path d="M 7.007812 8.53125 L 2.757812 12.78125 C 2.464844 13.074219 1.992188 13.074219 1.699219 12.78125 L 0.992188 12.074219 C 0.699219 11.78125 0.699219 11.304688 0.992188 11.015625 L 4.007812 8.003906 L 0.992188 4.992188 C 0.699219 4.695312 0.699219 4.222656 0.992188 3.929688 L 1.695312 3.21875 C 1.992188 2.925781 2.464844 2.925781 2.757812 3.21875 L 7.007812 7.46875 C 7.304688 7.761719 7.304688 8.238281 7.007812 8.53125 Z M 7.007812 8.53125 "/></g></svg></button>',
    infinite: false,
  });

  $('.product-tabs__top-item').on('click', function (e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');

  })

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.shop-content__filter-btn').on('click', function () {
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });

  $('.select-style, .product-one__num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  })

  $(".star").rateYo({
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="16px" viewBox="0 0 18 16" version="1.1"><g id="surface1"><path d="M 8.101562 0.554688 L 6.0625 4.695312 L 1.496094 5.359375 C 0.679688 5.476562 0.351562 6.488281 0.945312 7.066406 L 4.246094 10.285156 L 3.464844 14.832031 C 3.324219 15.652344 4.191406 16.269531 4.914062 15.882812 L 9 13.738281 L 13.085938 15.882812 C 13.808594 16.265625 14.675781 15.652344 14.535156 14.832031 L 13.753906 10.285156 L 17.054688 7.066406 C 17.648438 6.488281 17.320312 5.476562 16.503906 5.359375 L 11.9375 4.695312 L 9.898438 0.554688 C 9.53125 -0.179688 8.472656 -0.191406 8.101562 0.554688 Z M 8.101562 0.554688 "/></g></svg>',
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

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

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);
})

