//var window width
var viewportGlobal = $(window).width();

//function js cal match height
var calMatchHeight = function () {
  if ($('.js-match-height').length > 0) {
    $('.js-match-height >ul >li').matchHeight();
  }
};

var calMatchHeightMyProject = function () {
  var elmnt = $('.c-setting-hover');
  var parent = $('.c-project-courses__outer');
  // console.log(elmnt.height(), "123");

  parent.css("height", elmnt.height());
  setTimeout(function () { $('.c-project-courses__outer > .c-setting-hover').addClass('is-absolute'); }, 200);
};

var scrollMenu = function () {
  var $header = $('.l-nav');
  var $height = $('.c-height-top');
  if ($(document).scrollTop() >= 50) {
    $header.addClass('is-fixed');
    $height.addClass('is-fixed');
  } else {
    $header.removeClass('is-fixed');
    $height.removeClass('is-fixed');
  };
};

var searchBox = function () {
  $('.js-search-expand').click(function (e) {
    e.preventDefault();
    var boxSearch = $('.c-search');
    if (boxSearch.hasClass('is-active')) {
      $(this).removeClass('is-active');
      boxSearch.removeClass('is-active')
        .hide();
    } else {
      $(this).addClass('is-active');
      boxSearch.addClass('is-active')
        .show();
    }
  });
};

var showPassword = function () {
  $('.show-pass').click(function (e) {
    var grand = $(this).parent();
    var type = $("#show-password", $(grand)).attr('type');
    switch (type) {
      case 'password':
        {
          $("#show-password", $(grand)).attr('type', 'text');
          $(".icon-invisible", $(grand)).removeClass('icon-invisible').addClass('icon-visible');
          return;
        }
      case 'text':
        {
          $("#show-password", $(grand)).attr('type', 'password');
          $(".icon-visible", $(grand)).removeClass('icon-visible').addClass('icon-invisible');
          return;
        }
    }
  });
};

var ntMenuMobileExpand = function () {
  if ($('.c-menu-left').length > 0) {
    $('.js-menu-expand').click(function (e) {
      e.preventDefault();
      var body = $('body');
      var menu = $('.c-menu-left');
      var page = $('.l-page');
      var ovelay = $('.c-app-ovelay');
      if (page.hasClass('has-page-open')) {
        page.removeClass('has-page-open');
        ovelay.removeClass('has-ovelay-show');
        menu.removeClass('has-menu-open');
        body.removeClass('has-body-open');
      } else {
        page.addClass('has-page-open');
        ovelay.addClass('has-ovelay-show');
        menu.addClass('has-menu-open');
        body.addClass('has-body-open');
      }
    });
    $('.js-app-ovelay, .js-app-close').click(function () {
      var body = $('body');
      var menu = $('.c-menu-left');
      var page = $('.l-page');
      var ovelay = $('.c-app-ovelay');
      page.removeClass("has-page-open");
      ovelay.removeClass("has-ovelay-show");
      menu.removeClass("has-menu-open");
      body.removeClass("has-body-open");
      return false;
    });
  }
};

var ntMenuMobileExpandRight = function () {
  if ($('.c-frames-right').length > 0) {
    $('.js-menu-expand-right').click(function (e) {
      e.preventDefault();
      var body = $('body');
      var menu = $('.c-frames-right');
      var page = $('.l-page');
      var ovelay = $('.c-overlay-right');
      if (page.hasClass('has-page-open-right')) {
        page.removeClass('has-page-open-right');
        ovelay.removeClass('has-ovelay-show-right');
        menu.removeClass('has-menu-open-right');
        body.removeClass('has-body-open-right');
      } else {
        page.addClass('has-page-open-right');
        ovelay.addClass('has-ovelay-show-right');
        menu.addClass('has-menu-open-right');
        body.addClass('has-body-open-right');
      }
    });
    $('.c-frames-right-close, .c-overlay-right').click(function () {
      var body = $('body');
      var menu = $('.c-frames-right');
      var page = $('.l-page');
      var ovelay = $('.c-overlay-right');
      page.removeClass("has-page-open-right");
      ovelay.removeClass("has-ovelay-show-right");
      menu.removeClass("has-menu-open-right");
      body.removeClass("has-body-open-right");
      return false;
    });
  }
};

var feedTopSlider = function () {
  $('.l-feed-topslider__outer').owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    items: 1
  })
};

var feedAvaNotiSlider = function () {
  $('.l-feed-avanotislider ul').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 6
      }
    }
  })
};

var feedAvaNewiSlider = function () {
  $('.l-feed-avanews-slider ul').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 5
      }
    }
  })
};

var feedEventSlider = function () {
  $('.l-feed-event-slider ul').owlCarousel({
    loop: false,
    margin: 10,
    stagePadding: 50,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  })
};
var sectionreportSlider = function () {
  $('.l-section-report-slider ul').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      1024: {
        items: 3
      }
    }
  })
};
var coursesSlider = function () {
  $('.l-courses-slider ul').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
      1280: {
        items: 4
      }
    }
  })
};
var myclassSlider = function () {
  $('.l-myclass-slider ul').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      }
    }
  })
};
var myclassSliderRight = function () {
  $('.l-myclass-sliderright ul').owlCarousel({
    loop: false,
    nav: true,
    margin: 20,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 1
      },
      1200: {
        items: 2,
      },
      1380: {
        items: 3
      },
      1900: {
        items: 4
      },
    }
  })
};
var myprojectSlider = function () {
  $('.l-myproject-slider ul').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
    }
  })
};

var practiceSlider = function () {
  $('.l-practice-slider ul').owlCarousel({
    loop: false,
    nav: true,
    dots: true,
    margin: 28,
    responsive: {
      0: {
        items: 1
      },

      1024: {
        items: 2
      },
      1280: {
        items: 3
      },
    }
  })
};

var projectDetailOpen = function () {
  if($('.c-btnssee-all').length > 0){
    var contentHeight = $('.c-projectdetail__content__content').height();
    console.log(contentHeight);
    if( contentHeight < 210 && contentHeight > 0 ){
      $('.c-projectdetail__content__button').hide();
      $('.c-projectdetail__content').addClass('has-padding-bottom-small');
    }
  }
  $('.c-btnssee-all').click(function (e) {
    e.preventDefault();
    var body = $('.c-projectdetail__content__content');
    var button = $('.c-projectdetail__content__button');
    if (body.hasClass('has-open')) {
      body.removeClass('has-open');
      button.removeClass('has-background');
      $(".is-seeall").html("Xem toĂ n bá»™");
    } else {
      body.addClass('has-open');
      button.addClass('has-background');
      $(".is-seeall").html("Thu gá»n");
    }
  });
};

var popupModalRedeem = function () {
  $('.c-icoredeem-modal').click(function (e) {
    var body = $('.c-modal-redeem__content__mid__size__box');
    var icon = $('.c-checkicon-redeem')
    if (body.hasClass('open-popup')) {
      body.removeClass('open-popup');
      icon.removeClass('change-icon')
    } else {
      body.addClass('open-popup');
      icon.addClass('change-icon')
    }
  });
};

var popupModalRedeem2 = function () {
  $('.c-icoredeem-modal2').click(function (e) {
    var body = $('.c-modal-redeem__content__mid__color__box');
    var icon = $('.c-checkicon-redeem2')
    if (body.hasClass('open-popup2')) {
      body.removeClass('open-popup2');
      icon.removeClass('change-icon2')
    } else {
      body.addClass('open-popup2');
      icon.addClass('change-icon2')
    }
  });
};
var boxSizeRedeem = function () {
  $('.icon-arrowsize-redeem').click(function (e) {
    var body = $('.c-redeem-boxsize');
    var icon = $('.icon-arrowsize-redeem')
    if (body.hasClass('show-size')) {
      body.removeClass('show-size');
      icon.removeClass('change-iconsize')
    } else {
      body.addClass('show-size');
      icon.addClass('change-iconsize')
    }
  });
};

var modalLockOpen = function () {
  $('.c-btn-viewall').click(function (e) {
    e.preventDefault();
    var parent = $(this).parent().parent();
    var body = $('.c-certificate-lock__bottom__content', $(parent));
    var button = $('.c-bg-modallock', $(parent));
    if (body.hasClass('has-open')) {
      body.removeClass('has-open');
      button.removeClass('has-background');
      $(".is-viewall").html("Xem thĂªm");
    } else {
      body.addClass('has-open');
      button.addClass('has-background');
      $(".is-viewall").html("RĂºt gá»n");
    }
  });
};

var headderClick = function () {
  $('.js-hidden-notification').click(function (e) {
    e.preventDefault();
    var body = $('.c-user-setting__notification__dropdown');
    if (body.hasClass('has-hidden')) {
      body.removeClass('has-hidden');
    } else {
      body.addClass('has-hidden');
    }
  });
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.js-hidden-notification, .c-user-setting__notification__dropdown').length) {
      var body = $('.c-user-setting__notification__dropdown');
      if (body.hasClass('has-hidden')) {
        body.removeClass('has-hidden');
      }
    }
  });
};
var settingClick = function () {
  $('.js-hidden-setting').click(function (e) {
    e.preventDefault();
    var body = $('.c-user-setting__avatar__dropdown');
    if (body.hasClass('has-setting-hidden')) {
      body.removeClass('has-setting-hidden');
    } else {
      body.addClass('has-setting-hidden');
    }
  });
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.js-hidden-setting, .c-user-setting__avatar__dropdown').length) {
      var body = $('.c-user-setting__avatar__dropdown');
      if (body.hasClass('has-setting-hidden')) {
        body.removeClass('has-setting-hidden');
      }
    }
  });
};

var redeemSlider = function () {
  $('.l-redeem-slider ul').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
      1280: {
        items: 4
      },
    }
  })
};
var redeemSliderPart2 = function () {
  $('.l-redeem-slider-part2 ul').owlCarousel({
    loop: false,
    nav: true,
    dots: true,
    margin: 52,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1280: {
        items: 3
      },
    }
  })
};
var redeemSliderPart3 = function () {
  var sync1 = $(".l-redeem-slider-part3 ul");
  var sync2 = $(".l-redeem-slider2-part3 ul");
  var slidesPerPage = 5; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      // items: slidesPerPage,
      dots: true,
      nav: true,
      smartSpeed: 200,
      slideSpeed: 500,
      margin: 22,
      // slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100,
      responsive: {
        0: {
          items: 3,
          // slideBy: 2
        },
        768: {
          items: 5,
          // slideBy: 5
        }
      }
    }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - (el.item.count / 2) - .5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
};


var redeemSliderModal = function () {
  var sync1 = $(".l-redeem-slider-modal ul");
  var sync2 = $(".l-redeem-slider2-modal ul");
  var slidesPerPage = 5; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    autoplay: false,
    loop: true,
    responsiveRefreshRate: 200,
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      // items: slidesPerPage,
      nav: true,
      dots: false,
      smartSpeed: 200,
      slideSpeed: 500,
      margin: 8,
      // slideBy: 1, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100,
      responsive: {
        0: {
          items: 3,
          // slideBy: 2
        },
        768: {
          items: 4,
          // slideBy: 5
        }
      }
    }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - (el.item.count / 2) - .5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
};



var reportSlider = function () {
  $('.l-report-slider ul').owlCarousel({
    loop: false,
    nav: true,
    dots: true,
    margin: 29,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      },
      1600: {
        items: 5
      },
    }
  })
};
var calendarMonth = function () {
  $('.l-calendar-month ul').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
    }
  })
};

var certificateSlider = function () {
  $('.l-certificate ul').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    center: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 90,
        margin: 50,
      },
      768: {
        items: 1,
        stagePadding: 180,
        margin: 80,
      },
      992: {
        items: 1,
        stagePadding: 180,
        margin: 80,
      },
      1280: {
        stagePadding: 250,
        margin: 120,
        items: 1,
      },
      1400: {
        stagePadding: 320,
        margin: 120,
        items: 1,
      },
      1600: {
        stagePadding: 420,
        margin: 220,
        items: 1,
      },
      1700: {
        stagePadding: 470,
        margin: 220,
        items: 1,
      },
      1800: {
        stagePadding: 500,
        margin: 220,
        items: 1,
      },
      1900: {
        stagePadding: 530,
        margin: 220,
        items: 1,
      }
    }
  })
};

var maxlengthOTP = function () {
  if ($('.c-login__otp__input').length > 0) {
    $(".c-login__otp__input input").jqueryPincodeAutotab();
  }
}
var calendarDaySlider = function () {
  $('.c-group-calendar.is-schedules-slider ul').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 15,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 7
      },
      1024: {
        items: 6
      },
      1280: {
        items: 8
      },
      1365: {
        items: 8,
        margin: 20,
      },
      1400: {
        items: 10,
        margin: 20,
      },
      1600: {
        items: 11,
        margin: 20,
      },
      1900: {
        items: 14,
        margin: 20,
      },
    }
  })
  $('.c-group-calendar.is-calendar-nocalendar ul').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 5,
    responsive: {
      0: {
        items: 3
      },
      768: {
        items: 7
      },
      1024: {
        items: 10
      },
      1280: {
        items: 14
      },
      1365: {
        items: 14
      },
      1400: {
        items: 15
      }
    }
  })
  $('.c-group-calendar.is-calendar-maindetail ul').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    margin: 5,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 7
      },
      1024: {
        items: 10
      },
      1280: {
        items: 9
      },
      1365: {
        items: 8,
        margin: 20,
      },
      1400: {
        items: 9,
        margin: 20,
      },
      1600: {
        items: 11,
        margin: 20,
      },
      1900: {
        items: 14,
        margin: 20,
      },
    }
  })
};

var myclassClick = function () {
  $('.js-dropdown-myclass').click(function (e) {
    e.preventDefault();
    var grand = $(this).parent().parent().parent().parent();
    var root = $(this).parent().parent().parent().parent().parent();
    if ($(grand).hasClass('is-myclass-active')) {
      // $(this).removeClass('is-myclass-active').addClass('is-myclass-hidden');
      // $('.c-content-myclass__detail.is-myclass-active > .js-dropdown-myclass', $(root)).addClass('is-myclass-hidden').removeClass('is-myclass-active');
      $('.c-content-myclass__detail', $(root)).removeClass('is-myclass-active').addClass('is-myclass-hidden');
      $('.c-dropdown-myclass', $(grand)).addClass('has-show-myclass').removeClass('has-hidden-myclass');
      $(grand).removeClass('is-myclass-active').addClass('is-myclass-hidden');
    } else {
      // $(this).addClass('is-myclass-active').removeClass('is-myclass-hidden');
      // $('.c-content-myclass__detail.is-myclass-active > .js-dropdown-myclass', $(root)).addClass('is-myclass-hidden').removeClass('is-myclass-active');
      $('.c-dropdown-myclass', $(root)).addClass('has-show-myclass').removeClass('has-hidden-myclass');
      $('.c-content-myclass__detail.is-myclass-active', $(root)).addClass('is-myclass-hidden').removeClass('is-myclass-active');
      $('.c-dropdown-myclass', $(grand)).addClass('has-hidden-myclass').removeClass('has-show-myclass');
      $(grand).addClass('is-myclass-active').removeClass('is-myclass-hidden');
    }
  });
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.js-dropdown-myclass, .c-dropdown-myclass').length) {
      var body = $('.c-dropdown-myclass');
      if (body.hasClass('has-hidden-myclass')) {
        body.removeClass('has-hidden-myclass');
        $('.c-content-myclass__detail').removeClass('is-myclass-active').addClass('is-myclass-hidden');
      }
    }
  });
};

var select2Dropdown = function () {
  if ($('.js-select-mini').length > 0) {
    $('.js-select-mini').select2({
      theme: 'bootstrap4',
      minimumResultsForSearch: Infinity
    });
  }
  if ($('.js-select-normal').length > 0) {
    $('.js-select-normal').select2({
      theme: 'bootstrap4'
    });
  }
};

var autofocus = function () {
  $('#modal-parent-information').on('shown.bs.modal', function () {
    $('.c-autofocus').focus();
  })

  $('#modal-change-password').on('shown.bs.modal', function () {
    $('.c-autofocus').focus();
  })
  $('#modal-complain-create').on('shown.bs.modal', function () {
    $('.c-autofocus').focus();
  })
};

var counttime = function () {
  $(document).ready(function () {
    var viewport = $(window).width();

    function formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }

    if (viewport > 991) {
      $('.js-count').one('inview', function (event, visible) {
        if (visible) {
          $('.js-count-normal').countTo({
            speed: 3000,
            refreshInterval: 25,
            formatter: function (value, options) {
              return formatNumber(value.toFixed(options.decimals));
            }
          });
          $('.js-count-medium').countTo({
            speed: 2000,
            refreshInterval: 25,
            formatter: function (value, options) {
              return formatNumber(value.toFixed(options.decimals));
            }
          });
          $('.js-count-fast').countTo({
            speed: 1000,
            refreshInterval: 25,
            formatter: function (value, options) {
              return formatNumber(value.toFixed(options.decimals));
            }
          });
        }
      });
    }
  });
};

var hoverMenuLeft = function () {
  //code js
  if (viewportGlobal < 768) {
    $(".c-menu-left__top.is-top ul li").click(function () {
      if ($(".c-menu-left").hasClass('is-hover')) {
        $(".c-menu-left").removeClass('is-hover')
      } else {
        $(".c-menu-left").addClass('is-hover')
      }
    });
    $(document).on('click', function (event) {
      if (!$(event.target).closest('.c-menu-left__top.is-top ul li').length) {
        // if ($(".c-menu-left").hasClass('is-hover')) {
        $(".c-menu-left").removeClass('is-hover')
        // }
      }
    });
    $(".c-app-ovelay").click(function () {
      // if ($(".c-menu-left").hasClass('is-hover')) {
      $(".c-menu-left").removeClass('is-hover')
      // }
    });
  }
};

// function validateNumber(event) {
//   var key = window.event ? event.keyCode : event.which;
//   if (event.keyCode === 8 || event.keyCode === 46) {
//     return true;
//   } else if (key < 48 || key > 57) {
//     return false;
//   } else {
//     return true;
//   }
// };

(function ($) {
  $.fn.inputFilter = function (inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  };
}(jQuery));

//function js nameFunction
var jsOnlyNumber = function () {
  // $('.form-group.is-input-phone input').keypress(validateNumber);
  // $('.is-phone-input input').keypress(validateNumber);
  $(".form-group.is-input-phone input").inputFilter(function (value) {
    return /^\d*$/.test(value);    // Allow digits only, using a RegExp
  });
  $(".is-phone-input input").inputFilter(function (value) {
    return /^\d*$/.test(value);    // Allow digits only, using a RegExp
  });
};

var jsClassDetailDrop = function () {
  $(".c-timeline-lesson__top").click(function (e) {
    e.preventDefault();
    var root = $(this).parent();
    var grand = $(this).parent().parent();
    if ($('.is-icon i', $(this)).hasClass('plus-circle-black')) {
      $('.is-icon i', $(grand)).removeClass('minus-circle-yellow').addClass('plus-circle-black');
      $('.is-icon i', $(this)).removeClass('plus-circle-black').addClass('minus-circle-yellow');
      $('.c-timeline-lesson__item', $(grand)).addClass('is-hidden').removeClass('is-active');
      $(root).addClass('is-active').removeClass('is-hidden');
      $('.c-timeline-lesson__drop', $(grand)).slideUp();
      $('.c-timeline-lesson__drop', $(root)).slideDown();
    } else {
      $('.is-icon i', $(this)).removeClass('minus-circle-yellow').addClass('plus-circle-black');
      $('.c-timeline-lesson__drop', $(root)).slideUp();
      $(root).addClass('is-hidden').removeClass('is-active');
    }
  });
};

var jsPracticeDetailDrop = function () {
  $(".c-practicedetail-list__top").click(function (e) {
    e.preventDefault();
    var root = $(this).parent();
    var grand = $(this).parent().parent();
    if ($('.is-icon i', $(this)).hasClass('plus-circle-black')) {
      $('.is-icon i', $(grand)).removeClass('minus-circle-yellow').addClass('plus-circle-black');
      $('.is-icon i', $(this)).removeClass('plus-circle-black').addClass('minus-circle-yellow');
      $('.c-practicedetail-list__item', $(grand)).addClass('is-hidden').removeClass('is-active');
      $(root).addClass('is-active').removeClass('is-hidden');
      $('.c-practicedetail-list__drop', $(grand)).slideUp();
      $('.c-practicedetail-list__drop', $(root)).slideDown();
    } else {
      $('.is-icon i', $(this)).removeClass('minus-circle-yellow').addClass('plus-circle-black');
      $('.c-practicedetail-list__drop', $(root)).slideUp();
      $(root).addClass('is-hidden').removeClass('is-active');
    }
  });
};

var jsMyCalendarList = function () {
  $(".c-framesright-calendar__content__time").click(function (e) {
    e.preventDefault();
    var root = $(this).parent();
    var grand = $(this).parent().parent();
    if ($('i', $(this)).hasClass('show-info-calendar')) {
      $('.c-framesright-calendar__content__time i', $(grand)).removeClass('hide-info-calendar').addClass('show-info-calendar');
      $('i', $(this)).removeClass('show-info-calendar').addClass('hide-info-calendar');
      $('.c-framesright-calendar__content', $(grand)).addClass('is-hidden').removeClass('is-active');
      $(root).addClass('is-active').removeClass('is-hidden');
      $('.c-framesright-calendar__groupjs', $(grand)).slideUp();
      $('.c-framesright-calendar__groupjs', $(root)).slideDown();
    } else {
      $('i', $(this)).removeClass('hide-info-calendar').addClass('show-info-calendar');
      $('.c-framesright-calendar__groupjs', $(root)).slideUp();
      $(root).addClass('is-hidden').removeClass('is-active');
    }
  });
};

var datePickerInput = function () {
  // $("#datepicker").datepicker($.datepicker.regional["vi"], {
  //   dateFormat: "dd/mm/yy"
  // });
  $.datetimepicker.setLocale('vi');
  $('#datepicker, #datepicker1').datetimepicker({
    timepicker: false,
    format: 'd/m/Y'
  });
};

var monthPickerInput = function () {
  $("#monthpicker").datepicker({
    dateFormat: "mm/yy",
    changeMonth: true,
    changeYear: true,
    showButtonPanel: true,
    onClose: function (dateText, inst) {
      function isDonePressed() {
        return ($('#ui-datepicker-div').html().indexOf('ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all ui-state-hover') > -1);
      }
      if (isDonePressed()) {
        var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
        var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
        $(this).datepicker('setDate', new Date(year, month, 1)).trigger('change');
        $('.date-picker').focusout()//Added to remove focus from datepicker input box on selecting date
      }
    },
    beforeShow: function (input, inst) {
      inst.dpDiv.addClass('month_year_datepicker')
      if ((datestr = $(this).val()).length > 0) {
        year = datestr.substring(datestr.length - 4, datestr.length);
        month = datestr.substring(0, 2);
        $(this).datepicker('option', 'defaultDate', new Date(year, month - 1, 1));
        $(this).datepicker('setDate', new Date(year, month - 1, 1));
        $(".ui-datepicker-calendar").hide();
      }
    }
  });
  // $.datetimepicker.setLocale('vi');
  // $('#datepicker').datetimepicker({
  //   timepicker: false,
  //   format: 'd/m/Y'
  // });
};

//function js nameFunction
var dateTimePickerInput = function () {
  //code js
  $.datetimepicker.setLocale('vi');
  $('#datetimepicker').datetimepicker({
    timepicker: true,
    format: 'd/m/Y H:i'
  });
};

//function js nameFunction
var noCloseDropdown = function () {
  $(document).on('click', '.c-dropdown-tools__list', function (e) {
    e.stopPropagation();
  });
};

var scrollItemSchedules = function () {
  var viewportGlobal = $(window).width();
  if( $('.c-study-progress__list').length > 0  && viewportGlobal >991 ) {
    const slider = document.querySelector('.c-study-progress__list');
    let isDown = false;
    let startX;
    let scrollLeft;
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        //console.log(walk);
    });
  }
};

var showFromDetailSession = function () {
  $("#js-showformdetailsesion").click(function (e) {
    e.preventDefault();
    var text = $(".c-projectdetail__content__content.has-open.b-maincontent");
    var form = $(".c-projectdetail__content__content.has-open.js-showformdetailsesion");
    if (text.hasClass('is-open')) {
      text.removeClass('is-open');
      form.addClass('is-open');
    } else {
      text.addClass('is-open');
      form.removeClass('is-open');
    }
  });
};

var countTextLocal = function () {
  $("#js-countformtext").keyup(function(){
    $("#js-countformtext__text").text(($(this).val().length) + "/");
  });
  $("#js-countformtext1").keyup(function(){
    $("#js-countformtext__text1").text(($(this).val().length) + "/");
  });
};

//tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});