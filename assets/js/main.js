$(document).ready(function () {
  AOS.init();
  let result = true;

  //#region Nav bar fixing
  if ($(window).scrollTop() >= 100) {
    $("#nav").addClass("fixed");
  } else {
    $("#nav").removeClass("fixed");
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $("#nav").addClass("fixed");
    } else {
      $("#nav").removeClass("fixed");
    }
  });
  //#endregion

  //#region Nav burger menu icon
  $(".nav__nav-burger__menu").click(function () {
    $(".nav__nav-burger__menu__line.middle").toggleClass("opacity0");
    if (result) {
      $("body").css("overflow", "hidden");
      $(".aside-nav").css("overflow", "scroll");
      $(".aside-nav").removeClass("d-none");
      $(".aside-nav").removeClass("animate__zoomOut");
      $(".aside-nav").addClass("animate__zoomIn");
      $(".menu-icon").addClass("moveOpen");
      $(".nav__nav-burger__menu__line.up").addClass("upLineToDown");
      $(".nav__nav-burger__menu__line.up").removeClass("upLineToUp");
      $(".nav__nav-burger__menu__line.down").addClass("downLineToUp");
      $(".nav__nav-burger__menu__line.down").removeClass("downLineToDown");

      result = false;
    } else {
      CloseBurgerMenu();
    }
  });
  //#endregion

  //#region Nav menu scrolls
  $(".to_what_we_do").click(function (e) {
    e.preventDefault();
    $(".nav__nav-burger__menu__line.middle").removeClass("opacity0");
    CloseBurgerMenu();
    if ($(window).scrollTop() > 150) {
      $("html, body").animate(
        { scrollTop: $("#what_we_do").offset().top - 80 },
        1000
      );
    } else {
      $("html, body").animate(
        { scrollTop: $("#what_we_do").offset().top - 160 },
        1000
      );
    }
  });

  $(".to_who_we_are").click(function (e) {
    e.preventDefault();
    $(".nav__nav-burger__menu__line.middle").removeClass("opacity0");
    CloseBurgerMenu();
    $("html, body").animate(
      { scrollTop: $("#achievements").offset().top - 80 },
      1000
    );
  });

  $("#open_team").click(function (e) {
    e.preventDefault();
    $(".nav__nav-burger__menu__line.middle").removeClass("opacity0");
    CloseBurgerMenu();
    $("#index_team").addClass("fixedTeam");
    $("#index_team").addClass("animate__fadeIn");
    $("#index_team").removeClass("animate__fadeOut");
  });
  $(".closeTeam").click(function (e) {
    e.preventDefault();
    $("body").css("overflow", "visible");
    $("#index_team").removeClass("animate__fadeIn");
    $("#index_team").addClass("animate__fadeOut");
    setTimeout(function () {
      $("#index_team").removeClass("fixedTeam");
      $("#index_team").removeClass("animate__fadeOut");
    }, 500);
  });

  $(".to_jobs").click(function (e) {
    e.preventDefault();
    $(".nav__nav-burger__menu__line.middle").removeClass("opacity0");
    CloseBurgerMenu();
    $("html, body").animate({ scrollTop: $("#jobs").offset().top - 80 }, 1000);
  });

  $(".to_news").click(function (e) {
    e.preventDefault();
    $(".nav__nav-burger__menu__line.middle").removeClass("opacity0");
    CloseBurgerMenu();
    $("html, body").animate({ scrollTop: $("#news").offset().top - 80 }, 1000);
  });

  $(".to_contacts").click(function (e) {
    e.preventDefault();
    $(".nav__nav-burger__menu__line.middle").removeClass("opacity0");
    CloseBurgerMenu();
    $("html, body").animate(
      { scrollTop: $("#footer").offset().top - 80 },
      1000
    );
  });
  //#endregion

  //#region Changing Color NavList By Scroll
  //   $(window).scroll(function () {
  //     let wd = $(window).scrollTop() + 80;
  //     let whatWeDo = $(".scrolling").eq(0).offset().top;
  //     let whoWeAre = $(".scrolling").eq(1).offset().top;
  //     let jobs = $(".scrolling").eq(2).offset().top;
  //     let news = $(".scrolling").eq(3).offset().top;
  //     let contacts = $(".scrolling").eq(4).offset().top;

  //     if (wd >= whatWeDo && wd < whoWeAre) {
  //       $(".to_what_we_do").addClass("active");
  //     } else {
  //       $(".to_what_we_do").removeClass("active");
  //     }

  //     if (wd >= whoWeAre && wd < jobs) {
  //       $(".to_who_we_are").addClass("active");
  //     } else {
  //       $(".to_who_we_are").removeClass("active");
  //     }

  //     if (wd >= jobs && wd < news - 1) {
  //       $(".to_jobs").addClass("active");
  //     } else {
  //       $(".to_jobs").removeClass("active");
  //     }

  //     if (wd >= news && wd < contacts) {
  //       $(".to_news").addClass("active");
  //     } else {
  //       $(".to_news").removeClass("active");
  //     }

  //     if (wd - 80 + $(window).height() == $(document).height()) {
  //       $(".to_contacts").addClass("active");
  //       $(".to_news").removeClass("active");
  //     } else {
  //       $(".to_contacts").removeClass("active");
  //     }
  //   });
  //#endregion

  //#region scroll icon
  $(".scroll-down").click(function (e) {
    e.preventDefault();
    if ($(window).scrollTop() > 150) {
      $("html, body").animate(
        { scrollTop: $("#what_we_do").offset().top - 80 },
        1000
      );
    } else {
      $("html, body").animate(
        { scrollTop: $("#what_we_do").offset().top - 160 },
        1000
      );
    }
  });
  //#endregion

  //#region From Index To WWD data
  $("a.what-we-do__wrapper__item").click(function () {
    localStorage.setItem("data-wwd", `${$(this).attr("data-wwd")}`);
    window.location.href = "what-we-do.html";
  });
  if ($(`#${localStorage.getItem("data-wwd")}`).offset()) {
    $(window).scrollTop(
      $(`#${localStorage.getItem("data-wwd")}`).offset().top - 80
    );
    localStorage.removeItem("data-wwd");
  }
  //#endregion

  //#region counter
  if ($("*").hasClass("counter")) {
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });
  }
  //#endregion

  //#region Elave Kod
  // let pathCount;
  // let circleColor;
  // let pathColor;

  // $('path[id]').mouseenter(function() {
  //     if ($(`circle[data-city="${$(this).attr('id')}"]`)) {
  //         circleColor = $(`circle[data-city="${$(this).attr('id')}"]`).attr('fill');
  //     }
  //     pathCount = Array.from($(`path[data-city="${$(this).attr('id')}"]`)).length;
  //     if (pathCount == 2) {
  //         pathColor = $(`path[data-city="${$(this).attr('id')}"]`).attr('fill');
  //         $(this).attr('fill', '#2D3192');
  //     } else {
  //         $(this).attr('fill', `${circleColor}`);
  //     }
  //     $(`[data-city="${$(this).attr('id')}"]`).attr('fill', '#fff');
  // });
  // $('path[id]').mouseleave(function() {
  //     $(`circle[data-city="${$(this).attr('id')}"]`).attr('fill', `${circleColor}`);
  //     $(`path[data-city="${$(this).attr('id')}"]`).attr('fill', `${pathColor}`);
  //     $(this).attr('fill', '#E5E9F4');
  // });
  // $('[data-city]').mouseenter(function() {
  //     if ($(`circle[data-city="${$(this).attr('data-city')}"]`)) {
  //         circleColor = $(`circle[data-city="${$(this).attr('data-city')}"]`).attr('fill');
  //     }
  //     pathCount = Array.from($(`path[data-city="${$(this).attr('data-city')}"]`)).length;
  //     if (pathCount == 2) {
  //         pathColor = $(`path[data-city="${$(this).attr('data-city')}"]`).attr('fill');
  //         $(`path[id='${$(this).attr('data-city')}']`).attr('fill', '#2D3192');
  //     } else {
  //         $(`path[id='${$(this).attr('data-city')}']`).attr('fill', `${circleColor}`);
  //     }
  //     $(`[data-city="${$(this).attr('data-city')}"]`).attr('fill', '#fff');
  // });
  // $('[data-city]').mouseleave(function() {
  //     $(`circle[data-city="${$(this).attr('data-city')}"]`).attr('fill', `${circleColor}`);
  //     $(`path[data-city="${$(this).attr('data-city')}"]`).attr('fill', `${pathColor}`);
  //     $(`path[id='${$(this).attr('data-city')}']`).attr('fill', '#E5E9F4');
  // });
  //#endregion

  //#region Map
  $(document)
    .on("mouseover", ".index-world__map__svg svg path", function (e) {
      var _this = $(this),
        _this_country = _this.attr("id"),
        _country_name = _this.attr("title");

      $("[data-city=" + _this_country + "]").attr("fill", "#fff");

      if (_this.data("status") == "enable_me") {
        var _color_fill = $("[data-city=" + _this_country + "]")
          .eq(0)
          .data("fill");
        _this.attr("fill", _color_fill);

        $(".flying_country").addClass("show_me");
        $(".flying_country").css(
          "left",
          $("[data-city=" + _this_country + "]").position().left -
            $(".index-world__map__svg").offset().left +
            30 +
            "px"
        );
        $(".flying_country").css(
          "top",
          $("[data-city=" + _this_country + "]").position().top -
            $(".index-world__map__svg").offset().top -
            156 +
            "px"
        );

        $(".flying_country span").text(_country_name);
        $(".flying_country img").attr(
          "src",
          "assets/images/flags/" + _this_country + ".png"
        );
      }
    })
    .on("mouseleave ", ".index-world__map__svg svg path", function (e) {
      var _this = $(this),
        _this_country = _this.attr("id");
      if (_this.data("status") == "enable_me") {
        _this.attr("fill", "#E5E9F4");
      }

      $("[data-city=" + _this_country + "]")
        .eq(0)
        .attr(
          "fill",
          $("[data-city=" + _this_country + "]")
            .eq(0)
            .data("fill")
        );
      $("[data-city=" + _this_country + "]")
        .eq(1)
        .attr(
          "fill",
          $("[data-city=" + _this_country + "]")
            .eq(1)
            .data("fill")
        );
      $("[data-city=" + _this_country + "]")
        .eq(2)
        .attr(
          "fill",
          $("[data-city=" + _this_country + "]")
            .eq(2)
            .data("fill")
        );
      $("[data-city=" + _this_country + "]")
        .eq(3)
        .attr(
          "fill",
          $("[data-city=" + _this_country + "]")
            .eq(3)
            .data("fill")
        );

      $(".flying_country").removeClass("show_me");
    });

  $(document)
    .on(
      "mouseover",
      ".index-world__map__svg svg circle, .index-world__map__svg svg .half",
      function (e) {
        var _this = $(this),
          _this_country = _this.data("city"),
          _country_name = $("#" + _this_country).attr("title");

        $("[data-city=" + _this_country + "]").attr("fill", "#fff");

        if ($("#" + _this_country).length) {
          var _color_fill = $("[data-city=" + _this_country + "]")
            .eq(0)
            .data("fill");
          $("#" + _this_country).attr("fill", _color_fill);

          console.log($("[data-city=" + _this_country + "]").offset().left);

          $(".flying_country").addClass("show_me");
          $(".flying_country").css(
            "left",
            $("[data-city=" + _this_country + "]").position().left -
              $(".index-world__map__svg").offset().left +
              30 +
              "px"
          );
          $(".flying_country").css(
            "top",
            $("[data-city=" + _this_country + "]").position().top -
              $(".index-world__map__svg").offset().top -
              156 +
              "px"
          );

          $(".flying_country span").text(_country_name);
          $(".flying_country img").attr(
            "src",
            "assets/images/flags/" + _this_country + ".png"
          );
        }
      }
    )
    .on(
      "mouseleave ",
      ".index-world__map__svg svg circle, .index-world__map__svg svg .half",
      function (e) {
        var _this = $(this),
          _this_country = _this.data("city");
        $("#" + _this_country).attr("fill", "#E5E9F4");
        $("[data-city=" + _this_country + "]")
          .eq(0)
          .attr(
            "fill",
            $("[data-city=" + _this_country + "]")
              .eq(0)
              .data("fill")
          );
        $("[data-city=" + _this_country + "]")
          .eq(1)
          .attr(
            "fill",
            $("[data-city=" + _this_country + "]")
              .eq(1)
              .data("fill")
          );
        $("[data-city=" + _this_country + "]")
          .eq(2)
          .attr(
            "fill",
            $("[data-city=" + _this_country + "]")
              .eq(2)
              .data("fill")
          );
        $("[data-city=" + _this_country + "]")
          .eq(3)
          .attr(
            "fill",
            $("[data-city=" + _this_country + "]")
              .eq(3)
              .data("fill")
          );
        $(".flying_country").removeClass("show_me");
      }
    );
  //#endregion

  //#region Footer Tab Changer
  $("#footer .info-us__header li a").click(function (e) {
    e.preventDefault();
    $("#footer .info-us__header li a").removeClass("active");
    $(this).addClass("active");
    $("#footer .info-us__tabs ul").removeClass("active");
    $(
      `#footer .info-us__tabs ul[data-tab='${$(this).attr("data-tab")}'`
    ).addClass("active");
  });
  //#endregion

  //#region Functions
  function CloseBurgerMenu() {
    $("body").css("overflow", "visible");
    $(".aside-nav").removeClass("animate__zoomIn");
    $(".aside-nav").addClass("animate__zoomOut");
    $(".nav__nav-burger__menu__line.up").removeClass("upLineToDown");
    $(".nav__nav-burger__menu__line.up").addClass("upLineToUp");
    $(".nav__nav-burger__menu__line.down").removeClass("downLineToUp");
    $(".nav__nav-burger__menu__line.down").addClass("downLineToDown");
    setTimeout(function () {
      $(".aside-nav").addClass("d-none");
    }, 500);
    result = true;
  }
  //#endregion
});
