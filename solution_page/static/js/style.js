//search Expand
$(function () {
    $(document).ready(function(){
      if($('.c-search-box').length > 0){
        var boxSearch = $('.c-search-box');
        $('.js-search-expand').click(function(e) {
          e.preventDefault();
          boxSearch.addClass('active');
        });
        $('.js-search-close').click(function(e) {
          boxSearch.removeClass('active');
        });
      }
    });
  });
  
  //var function main slider
  $(function () {
    $(document).ready(function(){
      if($('.js-slider').length > 0){
        var mainSlider = $('.js-slider');
        mainSlider.owlCarousel({
          loop:true,
          margin:0,
          items:1,
          responsiveClass:false,
          nav:true,
          dots:true,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          dotsData:true
        });
        var viewportGlobal = $(window).width();
        if(viewportGlobal > 768){
          var dotSlider = $('.c-slider .owl-dots');
          var dotSliderWidth = dotSlider.width();
          $('.c-slider .owl-carousel .owl-nav').css('margin-left', dotSliderWidth + 15);
        }
      }
    });
  });
  
  //function js landing teacher gallery slider
  $(function () {
    $(document).ready(function(){
      if($('.js-gallery-slider').length > 0){
        $('.js-gallery-slider').owlCarousel({
          loop:true,
          responsiveClass:true,
          nav:true,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplayHoverPause:false,
          navText:false,
          responsive:{
            0:{
              items:2,
              margin:10
            },
            768:{
              items:3,
              margin:20
            },
            992:{
              items:4,
              margin:30
            },
            1200:{
              items:4,
              margin:40
            }
          }
        });
      }
    });
  });
  
  //function js landing teacher testimonials slider
  $(function () {
    $(document).ready(function(){
      if($('.js-lt-testimonials').length > 0){
        $('.js-lt-testimonials').owlCarousel({
          loop:true,
          responsiveClass:true,
          nav:false,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplayHoverPause:false,
          navText:false,
          responsive:{
            0:{
              items:1,
              margin:0
            },
            768:{
              items:3,
              margin:20
            },
            992:{
              items:3,
              margin:30
            },
            1200:{
              items:3,
              margin:40
            }
          }
        });
      }
    });
  });
  
  //function js landing why parent slider
  $(function () {
    $(document).ready(function(){
      if($('.js-lwt-parent').length > 0){
        $('.js-lwt-parent').owlCarousel({
          loop:true,
          responsiveClass:true,
          nav:true,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplayHoverPause:false,
          navText:false,
          responsive:{
            0:{
              items:1,
              margin:0
            },
            768:{
              items:2,
              margin:10
            },
            992:{
              items:3,
              margin:10
            },
            1200:{
              items:4,
              margin:10
            }
          }
        });
      }
    });
  });
  
  //function js course parent slider
  $(function () {
    $(document).ready(function(){
      if($('.js-course-parent').length > 0){
        $('.js-course-parent').owlCarousel({
          loop:true,
          responsiveClass:true,
          nav:true,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplayHoverPause:false,
          navText:false,
          responsive:{
            0:{
              items:1,
              margin:0
            },
            768:{
              items:2,
              margin:10
            },
            992:{
              items:2,
              margin:10
            },
            1200:{
              items:3,
              margin:10
            }
          }
        });
      }
    });
  });
  
  //function js landing about team slider
  $(function () {
    $(document).ready(function(){
      if($('.js-team-slider').length > 0){
        $('.js-team-slider').owlCarousel({
          loop:true,
          responsiveClass:true,
          nav:true,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplayHoverPause:false,
          navText:false,
          responsive:{
            0:{
              items:1,
              margin:0
            },
            768:{
              items:3,
              margin:18
            },
            992:{
              items:3,
              margin:36
            }
          }
        });
      }
    });
  });
  
  //function js landing about prize slider
  $(function () {
    $(document).ready(function(){
      if($('.js-prize-slider').length > 0){
        $('.js-prize-slider').owlCarousel({
          loop:true,
          responsiveClass:true,
          nav:false,
          dots:true,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplayHoverPause:false,
          navText:false,
          responsive:{
            0:{
              items:1,
              margin:0
            },
            768:{
              items:3,
              margin:20
            },
            992:{
              items:3,
              margin:30
            },
            1600:{
              items:5,
              margin:30
            }
          }
        });
      }
    });
  });
  
  //function js home need slider
  $(function () {
    $(document).ready(function(){
      if($('.js-need-slider').length > 0){
        $('.js-need-slider').owlCarousel({
          loop:true,
          responsiveClass:true,
          nav:false,
          dots:true,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplayHoverPause:false,
          navText:false,
          responsive:{
            0:{
              items:2,
              margin:24
            },
            768:{
              items:3,
              margin:24
            },
            1200:{
              items:4,
              margin:24
            }
          }
        });
      }
    });
  });
  
  //function js widget collapse click
  $(function () {
    $(document).ready(function(){
      if($('.js-widget-collapse').length > 0){
        $('.js-widget-collapse').click(function(e) {
          e.preventDefault();
          var parent = $(this).parent().parent();
          if(parent.hasClass('is-collapse')){
            parent.removeClass('is-collapse');
            $('.c-widget__content', parent).slideDown();
          }else {
            parent.addClass('is-collapse');
            $('.c-widget__content', parent).slideUp();
          }
        });
      }
    });
  });
  
  //function js project top
  $(function () {
    $(document).ready(function(){
      if($('.js-project-top').length > 0){
        $('.js-project-top').owlCarousel({
          loop:false,
          responsiveClass:true,
          nav:true,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplayHoverPause:false,
          navText:false,
          responsive:{
            0:{
              items:1,
              margin:0
            },
            768:{
              items:3,
              margin:20
            }
          }
        });
      }
    });
  });
  
  //function js feed slider
  $(function () {
    $(document).ready(function(){
      if($('.js-feed-slider').length > 0){
        $('.js-feed-slider').owlCarousel({
          loop:true,
          items:1,
          margin:0,
          responsiveClass:true,
          nav:false,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplayHoverPause:false,
          navText:false
        });
      }
    });
  });
  
  //function js event slider
  $(function () {
    $(document).ready(function(){
      if($('.js-event-slider').length > 0){
        $('.js-event-slider').owlCarousel({
          loop:false,
          margin:0,
          responsiveClass:true,
          nav:false,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplayHoverPause:false,
          navText:false,
          autoWidth:true,
          responsive:{
            0:{
              items:2
            },
            768:{
              items:3
            }
          }
        });
      }
    });
  });
  
  //function js group slider
  $(function () {
    $(document).ready(function(){
      if($('.js-group-slider').length > 0){
        $('.js-group-slider').owlCarousel({
          loop:false,
          margin:0,
          responsiveClass:true,
          nav:false,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplayHoverPause:false,
          navText:false,
          autoWidth:true,
          responsive:{
            0:{
              items:2
            },
            768:{
              items:3
            }
          }
        });
      }
    });
  });
  
  //function js prize week slider
  $(function () {
    $(document).ready(function(){
      if($('.js-prize-week-slider').length > 0){
        $('.js-prize-week-slider').owlCarousel({
          loop:true,
          margin:0,
          items:1,
          responsiveClass:true,
          nav:false,
          dots:true,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplayHoverPause:false,
          navText:false
        });
      }
    });
  });
  
  //var function course media slider
  $(function () {
    $(document).ready(function(){
      if($('.c-course-media-slider').length > 0){
        $('.js-course-media-slider').owlCarousel({
          loop:false,
          items:1,
          margin:0,
          responsiveClass:false,
          nav:true,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:5000,
          autoplaySpeed:800,
          autoplayHoverPause:true,
          navText:false
        });
      }
    });
  });
  
  //course skill expand
  $(function () {
    var courseSkill = $('.c-course-skill .col-md-4');
    if (courseSkill.length > 0) {
      courseSkill.each(function () {
        var courseSkillContentHeight = $('.text-blue',$(this)).height();
        if(courseSkillContentHeight < 100){
          $('.c-course-skill__btn',$(this)).hide();
        }
      });
      $('.c-course-skill__expand').on('click', function (e) {
        var parent = $(this).parent().parent();
        parent.addClass('active');
      });
      $('.c-course-skill__close').on('click', function (e) {
        var parent = $(this).parent().parent();
        parent.removeClass('active');
      });
    }
  });
  
  //var function class card slider
  $(function () {
    $(document).ready(function(){
      if($('.js-class-card-slider').length > 0){
        $('.js-class-card-slider').owlCarousel({
          loop:false,
          margin:0,
          responsiveClass:false,
          nav:true,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:1
            },
            768:{
              items:2
            },
            992:{
              items:3
            }
          }
        });
      }
    });
  });
  
  //var function slider smart card auto width
  $(function () {
    $(document).ready(function(){
      if($('.c-smart-card-slider').length > 0){
        $('.js-smart-card-slider').owlCarousel({
          loop:false,
          margin:0,
          responsiveClass:false,
          nav:false,
          dots:true,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:1
            },
            768:{
              items:3,
              autoWidth: true
            },
            1200:{
              items:4,
              autoWidth: true
            }
          }
        });
      }
    });
  });
  
  //var function slider smart card 4 col
  $(function () {
    $(document).ready(function(){
      if($('.c-smart-card-slider').length > 0){
        $('.js-smart-card-slider-4').owlCarousel({
          loop:false,
          margin:0,
          responsiveClass:false,
          nav:false,
          dots:true,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:1
            },
            768:{
              items:2
            },
            992:{
              items:3
            },
            1200:{
              items:4
            }
          }
        });
      }
    });
  });
  
  //var function knowledge expand
  $(function () {
    $(document).ready(function(){
      if($('.c-knowledge-item').length > 0){
        $('.js-knowledge-expand').click(function(e) {
          e.preventDefault();
          var parent = $(this).parent();
          var root = $(this).parent().parent().parent();
          if (parent.hasClass('active')) {
            parent.removeClass('active');
            $('.c-knowledge-item__detail', parent).slideUp();
          } else {
            $('.c-knowledge-item.active .c-knowledge-item__detail', root).slideUp();
            $('.c-knowledge-item', root).removeClass('active');
            parent.addClass('active');
            $('.c-knowledge-item__detail', parent).slideDown();
          }
        });
      }
    });
  });
  
  //var function knowledge expand
  $(function () {
    $(document).ready(function(){
      if($('.c-target-masonry').length > 0){
        var $grid = $('.c-target-masonry').imagesLoaded( function() {
          // init Masonry after all images have loaded
          $grid.masonry({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.c-masonry-item',
            // use element for option
            columnWidth: '.c-masonry-sizer',
            gutter: '.c-masonry-gutter-sizer',
            percentPosition: true
          });
        });
      }
    });
  });
  
  //var function teacher testimonial slider
  $(function () {
    $(document).ready(function(){
      if($('.c-teacher-testimonial-slider').length > 0){
        $('.js-teacher-testimonial-slider').owlCarousel({
          loop:false,
          margin:0,
          responsiveClass:false,
          nav:false,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:1
            },
            768:{
              items:2
            }
          }
        });
        $('.c-teacher-testimonial-slider .b-grid .b-grid__content').matchHeight();
      }
    });
  });
  
  //var function fancybox
  $(function () {
    $(document).ready(function(){
      $(".various").fancybox({
        maxWidth	: 800,
        maxHeight	: 600,
        fitToView	: false,
        width		: '70%',
        height		: '70%',
        autoSize	: true,
        closeClick	: true,
        openEffect	: 'none',
        closeEffect	: 'none',
        padding: 0,
        wrapCSS: 'c-fancybox-custom',
        closeBtn : true,
        minWidth: 290
      });
      $(".fancybox-image").fancybox({
        autoSize	: true,
        openEffect	: 'none',
        closeEffect	: 'none',
        padding: 0,
        wrapCSS: 'c-fancybox-custom',
        closeBtn : true,
        minWidth: 290
      });
    });
  });
  
  //var commit slider
  $(function () {
    $(document).ready(function(){
      if($('.c-commit-slider').length > 0){
        $('.js-commit-slider').owlCarousel({
          loop:true,
          margin:10,
          responsiveClass:false,
          nav:false,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:2
            },
            768:{
              items:4
            },
            992:{
              items:6
            },
            1200:{
              items:8
            }
          }
        });
      }
    });
  });
  
  //var function count to
  $(function () {
    $(document).ready(function(){
      var viewport = $(window).width();
  
      function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
  
      if (viewport > 991){
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
  });
  
  //var function tech slider
  $(function () {
    $(document).ready(function(){
      if($('.js-tech-slider').length > 0){
        $('.js-tech-slider').owlCarousel({
          loop:true,
          margin:0,
          items:1,
          responsiveClass:false,
          nav:false,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          thumbs: true,
          thumbsPrerendered: true
        });
      }
    });
  });
  
  //project expand
  $(function () {
    if ($('.js-project-expand').length > 0) {
      $('.js-project-expand').on('click', function (e) {
        e.preventDefault();
        var parent = $('.c-project-detail');
        if(parent.hasClass('active')){
          parent.removeClass('active');
        }else {
          parent.addClass('active');
        }
      });
    }
  });
  
  //var testimonial slider
  $(function () {
    $(document).ready(function(){
      if($('.c-testimonial-slider').length > 0){
        $('.js-testimonial-slider').owlCarousel({
          loop:true,
          margin:0,
          responsiveClass:false,
          nav:true,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:1
            },
            768:{
              items:2
            },
            1200:{
              items:3
            },
            1800:{
              items:4
            }
          }
        });
        $('.c-testimonial-slider .b-grid').matchHeight();
      }
    });
  });
  
  //var function prize slider small
  $(function () {
    $(document).ready(function(){
      if($('.js-prize-slider-small').length > 0){
        $('.js-prize-slider-small').owlCarousel({
          loop:true,
          responsiveClass:false,
          nav:true,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:1,
              margin:0
            },
            768:{
              items:2,
              margin:10
            },
            992:{
              items:3,
              margin:20
            },
            1200:{
              items:3,
              margin:30
            }
          }
        });
      }
    });
  });
  
  //var function learn start slider
  $(function () {
    $(document).ready(function(){
      if($('.js-learn-start-slider').length > 0){
        $('.js-learn-start-slider').owlCarousel({
          loop:true,
          margin:0,
          center: true,
          responsiveClass:false,
          nav:false,
          dots:true,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:3
            },
            992:{
              items:5
            }
          }
        });
      }
    });
  });
  
  //var function pupil slider 6
  $(function () {
    $(document).ready(function(){
      if($('.c-pupil-slider').length > 0){
        $('.js-pupil-slider-6').owlCarousel({
          loop:true,
          margin:0,
          responsiveClass:false,
          nav:false,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:2
            },
            768:{
              items:3
            },
            992:{
              items:4
            },
            1200:{
              items:6
            }
          }
        });
      }
    });
  });
  
  //var function pupil slider 5
  $(function () {
    $(document).ready(function(){
      if($('.c-pupil-slider').length > 0){
        $('.js-pupil-slider-5').owlCarousel({
          loop:true,
          margin:0,
          responsiveClass:false,
          nav:false,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:2
            },
            768:{
              items:3
            },
            992:{
              items:4
            },
            1200:{
              items:5
            }
          }
        });
      }
    });
  });
  
  //var function online slider
  $(function () {
    $(document).ready(function(){
      if($('.c-online-slider').length > 0){
        $('.js-online-slider').owlCarousel({
          loop:true,
          margin:0,
          responsiveClass:false,
          nav:true,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:1
            },
            768:{
              items:3
            },
            1200:{
              items:4
            }
          }
        });
      }
    });
  });
  
  //var function forcing slider
  $(function () {
    $(document).ready(function(){
      if($('.c-forcing-slider').length > 0){
        $('.js-forcing-slider').owlCarousel({
          loop:true,
          margin:0,
          items:1,
          responsiveClass:false,
          nav:true,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
        });
      }
    });
  });
  
  //var function founder slider
  $(function () {
    $(document).ready(function(){
      if($('.c-founder-slider').length > 0){
        $('.js-founder-slider').owlCarousel({
          loop:true,
          responsiveClass:false,
          nav:false,
          dots:true,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          center: true,
          responsive:{
            0:{
              items:1,
              margin:0
            },
            768:{
              items:3,
              margin:16
            },
            1200:{
              items:3,
              margin:26
            }
          }
        });
        $('.c-founder-slider .b-grid').matchHeight();
      }
    });
  });
  
  // tabs dark click
  $(function () {
    $(document).ready(function(){
      if($('.c-tabs-dark').length > 0){
        $('.c-tabs-dark .c-tabs-dark__title ul li a').click(function(e) {
          e.preventDefault();
          var id = $(this).attr('href');
          var parent = $(this).parent();
          var root = $('.c-tabs-dark');
          if (!parent.hasClass('active')) {
            $('.c-tabs-dark__title ul li.active', root).removeClass('active');
            $('.c-tabs-dark__pane.active', root).removeClass('active').hide();
            parent.addClass('active');
            $(id).addClass('active').show();
          }
        });
      }
    });
  });
  
  // tabs exam project click
  $(function () {
    $(document).ready(function(){
      if($('.c-exam-project-box').length > 0){
        $('.c-exam-project-box .c-exam-project-box__tabs ul li a').click(function(e) {
          e.preventDefault();
          var id = $(this).attr('href');
          var parent = $(this).parent();
          var root = $('.c-exam-project-box');
          if (!parent.hasClass('active')) {
            $('.c-exam-project-box__tabs ul li.active', root).removeClass('active');
            $('.c-exam-project-box__pane.active', root).removeClass('active').hide();
            parent.addClass('active');
            $(id).addClass('active').show();
          }
        });
      }
    });
  });
  
  //var project intro slider
  $(function () {
    $(document).ready(function(){
      if($('.c-project-intro-slider').length > 0){
        $('.js-project-intro-slider').owlCarousel({
          loop:true,
          margin:0,
          items:3,
          responsiveClass:false,
          nav:true,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              margin:10
            },
            768:{
              margin:20
            },
            992:{
              margin:38,
              autoWidth:true
            }
          }
        });
      }
    });
  });
  
  //tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="tooltip-armorial"]').tooltip({
      template: '<div class="tooltip is-armorial" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
    $('[data-toggle="tooltip-tool"]').tooltip({
      template: '<div class="tooltip is-tool" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
  });
  
  // dropdown smart click
  $(function () {
    $(document).ready(function(){
      if($('.c-dropdown-smart-click').length > 0){
        $('.js-dropdown-smart-btn').click(function(e) {
          e.preventDefault();
          var parent = $(this).parent();
          if (parent.hasClass('active')) {
            parent.removeClass('active');
          }else {
            parent.addClass('active');
          }
        });
      }
    });
  });
  
  //var equipment slider
  $(function () {
    $(document).ready(function(){
      if($('.c-equipment-slider').length > 0){
        $('.js-equipment-slider').owlCarousel({
          loop:false,
          margin:10,
          responsiveClass:false,
          nav:true,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:2
            },
            768:{
              items:4
            },
            1200:{
              items:6
            }
          }
        });
      }
    });
  });
  
  //var gallery square slider
  $(function () {
    $(document).ready(function(){
      if($('.c-gallery-square-slider').length > 0){
        $('.js-gallery-square-slider').owlCarousel({
          loop:true,
          margin:10,
          responsiveClass:false,
          nav:true,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:2
            },
            768:{
              items:4
            },
            1200:{
              items:5
            }
          }
        });
      }
    });
  });
  
  //var function sticky scroll
  $(function () {
    $(document).ready(function(){
      if($('.js-sticky-scroll').length > 0){
        $('.js-sticky-scroll').each(function () {
          var contentA = $(this).parent().parent();
          $(this).scrollChaser({
            wrapper: contentA,
            offsetTop: 15
          });
        });
      }
    });
  });
  
  //teacher list sidebar hover show
  $('.c-teacher-small-list').on('mouseover', function(){
    $(this).parent().addClass('is-hover');
  }).on('mouseout', function(){
    $(this).parent().removeClass('is-hover');
  });
  
  //var project pano slider
  $(function () {
    $(document).ready(function(){
      if($('.c-project-pano-slider').length > 0){
        $('.js-project-pano-slider').owlCarousel({
          loop:true,
          margin:0,
          items:1,
          responsiveClass:false,
          nav:false,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false
        });
      }
    });
  });
  
  //var project intro slider
  $(function () {
    $(document).ready(function(){
      if($('.c-course-slider').length > 0){
        $('.js-course-slider').owlCarousel({
          loop:true,
          margin:0,
          responsiveClass:false,
          nav:true,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:1
            },
            768:{
              items:2
            },
            1200:{
              items:3
            }
          }
        });
      }
    });
  });
  
  //var project tool slider
  $(function () {
    $(document).ready(function(){
      if($('.c-tool-slider').length > 0){
        $('.js-tool-slider').owlCarousel({
          loop:true,
          margin:0,
          responsiveClass:false,
          nav:true,
          dots:true,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:1
            },
            768:{
              items:3
            },
            1200:{
              items:4
            }
          }
        });
      }
    });
  });
  
  //var function scroll
  $(function () {
    $(document).ready(function(){
      var viewportGlobal = $(window).width();
      if(viewportGlobal > 991 && $('.scrollbar-outer').length > 0){
        $('.scrollbar-outer').scrollbar();
      }
      if(viewportGlobal > 991 && $('.scrollbar-macosx').length > 0){
        $('.scrollbar-macosx').scrollbar();
      }
    });
  });
  
  //var adviser logo slider
  $(function () {
    $(document).ready(function(){
      if($('.c-adviser-logo-slider').length > 0){
        $('.js-adviser-logo-slider').owlCarousel({
          loop:true,
          margin:20,
          responsiveClass:false,
          nav:false,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:2
            },
            768:{
              items:4
            },
            992:{
              items:5
            }
          }
        });
      }
    });
  });
  
  //var adviser slider
  $(function () {
    $(document).ready(function(){
      if($('.c-adviser-slider').length > 0){
        $('.js-adviser-slider').owlCarousel({
          loop:true,
          margin:10,
          responsiveClass:false,
          nav:true,
          dots:false,
          autoplay:false,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:1
            },
            768:{
              items:3
            }
          }
        });
      }
    });
  });
  
  //var newspaper logo slider
  $(function () {
    $(document).ready(function(){
      if($('.c-newspaper-logo-slider').length > 0){
        $('.js-newspaper-logo-slider').owlCarousel({
          loop:true,
          margin:10,
          responsiveClass:false,
          nav:false,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          responsive:{
            0:{
              items:2
            },
            554:{
              items:3
            },
            768:{
              items:4
            },
            992:{
              items:6
            }
          }
        });
      }
    });
  });
  
  //var newspaper slider
  $(function () {
    $(document).ready(function(){
      if($('.c-newspaper-slider').length > 0){
        var newspaperOwl = $('.js-newspaper-slider');
        newspaperOwl.owlCarousel({
          loop:true,
          margin:20,
          responsiveClass:false,
          nav:false,
          dots:true,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:6000,
          autoplaySpeed:1000,
          autoplayHoverPause:true,
          navText:false,
          dotsContainer: '#newspaper-owl-dots',
          responsive:{
            0:{
              items:1
            },
            768:{
              items:2
            }
          }
        });
        $('.c-newspaper-slider .owl-dot').click(function () {
          newspaperOwl.trigger('to.owl.carousel', [$(this).index(), 300]);
        });
      }
    });
  });
  
  //function js landing about people slider
  $(function () {
    $(document).ready(function(){
      if($('.js-about-people').length > 0){
        $('.js-about-people').owlCarousel({
          loop:true,
          margin:10,
          responsiveClass:true,
          nav:true,
          dots:false,
          autoplay:true,
          autoHeight:false,
          autoplayTimeout:8000,
          autoplayHoverPause:false,
          navText:false,
          responsive:{
            0:{
              items:1
            },
            554:{
              items:2
            },
            768:{
              items:3
            }
          }
        });
      }
    });
  });
  
  // knowledge click
  $(function () {
    $(document).ready(function(){
      if($('.c-knowledge-list').length > 0){
        $('.js-knowledge-show').click(function(e) {
          e.preventDefault();
          var parent = $(this).parent();
          $('.c-knowledge-list ul li.is-hidden').addClass('has-show');
          parent.hide();
        });
      }
    });
  });