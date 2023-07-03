// Smoothscroll-polyfill
smoothscroll.polyfill();

(function ($) {
  "use strict";

  // market slide js
  $(".product-main").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Review slide js
  $(".review-main").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Blog slide js
  $(".blog-main").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Animation scroll js
  var htmlBody = $("html, body");
  $(".navbar a, .scroll-down a, .backtotop a").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        htmlBody.animate(
          {
            scrollTop: target.offset().top - 75,
          },
          50
        );
        return false;
      }
    }
  });

  // Preloader
  $(window).on("load", function () {
    $(".preloader").delay(1000).fadeOut(1000);
  });

  // Closes responsive menu when a scroll link is clicked
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Smooth scroll js
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    var stikey = $(".sticky-top");

    if (scrolling >= 100) {
      $(stikey).addClass("nav-bg");
    } else {
      $(stikey).removeClass("nav-bg");
    }
    if (scrolling > 280) {
      $(".backtotop").fadeIn(500);
    } else {
      $(".backtotop").fadeOut(500);
    }
  });

  // Scrollspy js
  $("body").scrollspy({
    target: ".navbar",
    offset: 70,
  });
})(jQuery);
