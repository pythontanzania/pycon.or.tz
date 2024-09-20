(function ($) {

  'use strict';

  function initNavbar () {
    if (!$('section:first').is('.parallax-bg, .dark-bg, .colored-bg') && $('#home-slider').length == 0) {
      $('#topnav').addClass('stick affix-top');
      $('body').addClass('top-padding');
    }

    if ($('section:first').is('.parallax-bg-text-dark')) {
      $('body').addClass('light-slide');
    }

    $('#topnav .navigation-menu a[data-scroll="true"], #aside-nav .navigation-menu a[data-scroll="true"]').on('click', function(){
      if ($(window).width() < 992) {
        $(".menu-toggle").click();
      }
    });

    $('body').scrollspy({
      target: '#navigation'
    });

    $('.menu-toggle').on('click', function(event) {
      event.preventDefault();
      $(this).toggleClass('is-active');

      $('#navigation').slideToggle(400);
      $('#topnav .cart-open').removeClass('opened');

    });

    $('.navigation-menu>li').slice(-2).addClass('last-elements');

    $('.navigation-menu li.menu-item-has-children>a').on('click', function(e) {
      if ($(window).width() < 992) {
        e.preventDefault();
        $(this).parent('li').toggleClass('opened').find('.submenu:first').toggleClass('opened');
      }
    });

    $('#scroll-section').on('click', function(event) {
      event.preventDefault();

      var parentSection = $(this).closest('section');
      var nextSection = parentSection.next('section');

      $('html,body').animate({
        scrollTop: nextSection.offset().top - 60
      }, 1000);

    });

    $('.open-search-form').on('click', function(e) {
      e.preventDefault();
      $('#search-modal').addClass('active');
      $('body').addClass('modal-open');
      $('#topnav .cart-open').removeClass('opened');
    });

    $('#close-search-modal').on('click', function(e) {
      e.preventDefault();
      $('#search-modal').removeClass('active');
      $('body').removeClass('modal-open');
    });

    $('#topnav').on('click', '.cart-open>a', function(event) {
      if ($(window).width() < 992) {
        event.preventDefault();
        event.stopPropagation();

        if ($('#navigation').is(':visible')) {
          $('.menu-toggle').click();
        }

        $(this).parent('.cart-open').toggleClass('opened');
      }
    });
  }

  function initScroll() {
    $(window).scroll(function() {

      if($('section:first').is('.parallax-bg, .dark-bg, #home, .colored-bg') || $('#home-slider').length){

        if($(window).width() > 991){
          if ($(window).scrollTop() >= $('#topnav').height() && $(window).scrollTop() <= 200) {
            $('#topnav').addClass('op-0');
          } else{
            $('#topnav').removeClass('op-0');
          }

          if ($(window).scrollTop() >= 100 ) {
            $('#topnav').addClass('stick');
          } else{
            $('#topnav').removeClass('stick');
          }

          if ($(window).scrollTop() > 400) {
            $('#topnav').addClass('affix-top');
          } else{
            $('#topnav').removeClass('affix-top');
          }
        }

      }

      if ($(window).scrollTop() >= 900 ) {
        $('.go-top').addClass('showed-up');
      } else{
        $('.go-top').removeClass('showed-up');
      }

      initParallax();

    }).trigger('scroll');
  }

  function initParallax() {
    $('.parallax-bg-element img').each(function(index, el) {
      var container = $(this).parent('.parallax-bg-element');
      var image = $(this).attr('src');

      $(container).css('background-image', 'url('+image+')');

      $(this).remove();
    });

    $('.parallax-wrapper, .img-holder').each(function(index, el) {
      var elOffset = $(el).parent().offset().top;
      var winTop = $(window).scrollTop();
      var scrll = (winTop - elOffset) * .15;

      if ($(el).isOnScreen()) {
        $(el).css('transform', 'translate3d(0, '+(scrll)+'px, 0)');
      }

    });
  }

  function initGeneral() {

    $("a[href='#top']").on('click', function() {
      $("html, body").animate({ scrollTop: 0 }, 1000);
      return false;
    });

    if ($('#home-slider').length) {
      $('body').addClass('has-home-slider');
    }

    $('#topnav .navigation-menu a[href*="#"], #aside-nav .navigation-menu a[href*="#"], a.btn[href*="#"]').not('[href="#"]').attr('data-scroll', 'true');

    $('a[data-scroll="true"]').on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    $('#home-slider').closest('section').css({
      'padding-top': 0,
      'padding-bottom': 0,
    });

    $('.bg-img, .thumb-placeholder, .box>img').each(function(index, el) {
      var image = $(el).attr('src');
      $(el).parent().css('background-image', 'url(' + image + ')');

      if ($(el).parent().hasClass('box')) {
        $(el).parent().addClass('box-with-image');
      }

      $(el).remove();
    });

    $('#topnav li a[data-hc-icon]').each(function(index, el) {
      var iconClass = $(el).data('hc-icon');
      var icon = '<i class="'+iconClass+'"></i>';

      $(el).prepend(icon);

    });

    $('[data-toggle="tooltip"]').tooltip();

    $('.alert').on('closed.bs.alert', function () {
      fixScroll();
    });

    $('a[data-toggle=tab]').on('shown.bs.tab', function(e) {

      $(window).trigger('resize');

      var container = $($(this).attr('href'));

      if (container.find('.progress-bar').length) {
        container.find('.progress-bar').each(function(index, el) {
          $(el).css('width', $(this).data('progress') + '%');
          $(el).parents('.skill').find('.skill-perc').css('right', 100 - $(el).data('progress') + '%');
        });
      }

    });

    $('body').on('click', '#newsletter-modal', function() {
      $(this).modal('hide');
    });

    $('body').on('click', '#newsletter-modal .modal-content', function(e) {
      e.stopPropagation();
    });

    $('.tab-content').each(function(index, el) {
      $(el).find('.tab-pane:first').addClass('active in');
    });

    $('.progress-bar').appear(function() {
      $(this).css('width', $(this).data('progress') + '%');
      $(this).parents('.skill').find('.skill-perc').css('right', 100 - $(this).data('progress') + '%');
    });

    $('.circle-bar-wrap').each(function(index, el) {
      $(el).appear(function() {

        var options = {
          color: $(el).data('color'),
          number: $(el).data('number'),
          trailColor: $(el).data('color') == '#fff' ? 'rgba(255,255,255,0.25)' : '#eee'
        }

        var bar = new ProgressBar.Circle(el, {
          strokeWidth: 1,
          easing: 'easeInOut',
          duration: 1400,
          color: options.color,
          trailColor: options.trailColor,
          trailWidth: 1,
          svgStyle: null,
          text: {
            autoStyleContainer: false
          },
          from: { color: options.color, width: 1 },
          to: { color: options.color, width: 1 },
          step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
              circle.setText('');
            } else {
              circle.setText(value);
            }

          }
        });

        bar.animate(options.number/100);

      });

    });

    $('[data-negative-margin]').each(function(index, el) {
      $(el).css('margin-top', -$(el).data('negative-margin'));
    });

    $('.share-btn').on('click', function(event) {
      event.preventDefault();

      var left  = ($(window).width()/2)-(600/2),
          top   = ($(window).height()/2)-(400/2);

      window.open($(this).attr('href'), 'window', 'left='+left+',top='+top+',width=600,height=400,toolbar=0');
    });

  }

  function initLoad () {
    $(window).load(function() {

      $("#loader").delay(500).fadeOut();
      $("#mask").delay(1000).fadeOut("slow");

      var $grid = $('#works-grid').isotope({
        itemSelector: '.work-item'
      });

      $('.blog-masonry').isotope({
        masonry: {
         columnWidth: 0
        },
        itemSelector: '.masonry-post'
      });

      $grid.on('layoutComplete', function(event) {
        $(window).trigger('resize');
        fixScroll();
      });

      $('#filters').on('click', 'li', function() {
        $('#filters li').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $('#works-grid').isotope({ filter: filterValue });
        $(window).trigger('resize');
      });

    });
  }

  function initHomeSlider() {

    $('#home-slider .slides>li>img').each(function(index, el) {
      var slide = $(this).parent('li');
      var image = $(this).attr('src');

      $(slide).prepend($('<div class="slide-image"></div>').css('background-image', 'url('+image+')'));

      if (navigator.userAgent.indexOf("Firefox") != -1 && $('#home').hasClass('bordered')) {
        $('.slide-image').addClass('ff-fix');
      }

      $(this).remove();
    });

    var options = {
      prevText: '<i class="hc-arrow-left"></i>',
      nextText: '<i class="hc-arrow-right"></i>',
      keyboard: true,
    };

    if ($('#home-slider .slides > li').length < 2) {
      options.directionNav = false
    }

    options.start = function () {
      var delay = 0;
      var currentSlide = $('#home-slider').find(".slides > li.flex-active-slide");

      if ($(currentSlide).find('.slide-wrap').hasClass('light')) {
        $('body').addClass('light-slide');
      } else{
        $('body').removeClass('light-slide');
      }

      $('#home-slider').find(".slides > li.flex-active-slide .slide-content > .container").children().each(function () {
        var $content = $(this);
        setTimeout(function () {
          $content.css({
            'opacity': 1,
            '-webkit-transform': 'translateY(0)',
            '-moz-transform': 'translateY(0)',
            'transform': 'translateY(0)',
          });

        }, delay);

        delay += 200;
      })
    }

    options.before = function () {
      $('#home-slider').find(".slides > li .slide-content > .container").children().each(function () {
        var $content = $(this);
        $content.css({
          'opacity': 0,
          '-webkit-transform': 'translateY(20px)',
          '-moz-transform': 'translateY(20px)',
          'transform': 'translateY(20px)',
        });
      })
    }

    options.after = options.start;

    $('#home-slider').flexslider(options);

    $(window).resize(function(event) {

      $('#home-slider .slide-content').each(function(index, el) {
        if ($(el)[0].scrollWidth > $(el).innerWidth() && $(window).width() < 768) {
          $(el).find('h1').addClass('xs-smaller-font');
        }
      });

    }).trigger('resize');

  }

  function initVideos(){

    if ($('.player').length) {
      $('.player').each(function(index, el) {
        $(el).mb_YTPlayer({
          autoPlay: true,
          mute: true,
          containment: $(el).closest('section').find('.video-wrapper'),
        });
      });

      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.video-wrapper').append('<div class="fallback-bg"></div>');
        $('#fallback-bg').css('background-image', 'url('+$('.video-wrapper').data('fallback-bg')+')');
      }

      if ($('.video-wrapper').length > 1) {
        $('.video-wrapper').css('position', 'absolute');
      }

      $('.video-wrapper').each(function(index, el) {
        if ($(el).closest('section').find('#home-slider').length) {
          $(el).closest('section').find('#home-slider').css('background-color', 'transparent');
        }
      });


    }

    var videoEl = $('.slide-video>video, .video-wrapper>video');

    var setProportion = function () {
      var proportion = getProportion();
      videoEl.width(proportion*1280);
      videoEl.height(proportion*780);

      centerVideo();
    }

    var getProportion = function () {
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();
      var windowProportion = windowWidth / windowHeight;
      var origProportion = 1280 / 720;
      var proportion = windowHeight / 720;

      if (windowProportion >= origProportion) {
        proportion = windowWidth / 1280;
      }

      return proportion;
    }

    var centerVideo = function() {
      var centerX = (($(window).width() >> 1) - (videoEl.width() >> 1)) | 0;
      var centerY = (($(window).height() >> 1) - (videoEl.height() >> 1)) | 0;

      videoEl.css({ 'left': centerX, 'top': centerY });

    }

    if (videoEl.length) {
      $(window).resize(function() {
        setProportion();
      }).trigger('resize');
    }
  }

  function initSliders () {

    $('#product-slider').flexslider({
      controlNav: 'thumbnails',
      directionNav: false
    });

    $('.flexslider').each(function(index, el) {
      var dataOptions = $(this).data('options') || {};

      var options = {
        animation: dataOptions.animation === 'slide' ? 'slide' : 'fade',
        controlNav: dataOptions.controlNav === true ? true : false,
        directionNav: dataOptions.directionNav === true ? true : false,
        prevText: '<i class="hc-arrow-left"></i>',
        nextText: '<i class="hc-arrow-right"></i>',
      };

      options.start = function () {
        var delay = 0;

        $(el).find(".slides > li.flex-active-slide .slide-caption").children().each(function () {
          var $content = $(this);
          setTimeout(function () {
            $content.css({
              'opacity': 1,
              '-webkit-transform': 'translateY(0)',
              '-moz-transform': 'translateY(0)',
              'transform': 'translateY(0)',
            });

          }, delay);

          delay += 200;
        })
      }

      options.before = function () {
        $(el).find(".slides > li .slide-caption").children().each(function () {
          var $content = $(this);
          $content.css({
            'opacity': 0,
            '-webkit-transform': 'translateY(20px)',
            '-moz-transform': 'translateY(20px)',
            'transform': 'translateY(20px)',
          });
        })
      }

      options.after = options.start;

      if ($(el).attr('id') != 'product-slider') {
        $(el).flexslider(options);
      }

    });
  }

  function initCarousels () {
    $('.owl-carousel').each(function(index, el) {
      var dataOptions = $(this).data('options') || {};

      var options = {
        items: dataOptions.items || 4,
        loop: dataOptions.loop || true,
        center: dataOptions.center || false,
        dots: dataOptions.dots || false,
        nav: dataOptions.nav || false,
        navText: ['<i class="hc-angle-left"></i>', '<i class="hc-angle-right"></i>'],
        margin: dataOptions.margin || 0,
        autoplay: dataOptions.autoplay || false,
        responsiveClass: true,
        responsive:{
          0:{
            items: dataOptions.xsItems || 1,
            margin: 25
          },
          768:{
            items: dataOptions.smItems || 2,
          },
          992:{
            items:dataOptions.mdItems || 3,
          },
          1200: {
            items: dataOptions.items || 4
          }
        }
      }

      if (options.autoplay) {
        options.autoplayTimeout = dataOptions.autoplayTimeout || 2000;
        options.autoplayHoverPause = true;
      }


      $(el).owlCarousel(options);
    });
  }

  function initPhotoGallery () {

    var imagesArray = [];

    $('.photo-gallery').on('click', '.gallery-item a', function(event) {
      event.preventDefault();

      var gallery = $(this).parents('.photo-gallery');
      var galleryElements = gallery.find('.gallery-item>a');

      for (var i = 0; i < galleryElements.length; i++) {
        imagesArray.push($(galleryElements[i]).attr('href'));
      };
      var image = $(this).attr('href');

      var template = '<div id="gallery-modal">';
      template += '<div class="centrize">';
      template += '<div class="v-center">';
      template += '<div class="gallery-image">';
      template += '<a href="#" id="gallery-close"><i class="hc-close"></i></a>';
      template += '<a href="#" class="gallery-control gallery-prev"><i class="hc-angle-left"></i></a>';
      template += '<img src="'+imagesArray[imagesArray.indexOf(image)]+'" alt="">';
      template += '<a href="#" class="gallery-control gallery-next"><i class="hc-angle-right"></i></a>';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      template += '</div>';

      $('body').append(template);
      $('body').addClass('modal-open');

      $('#gallery-modal').fadeIn(300);

    });

    $('body').on('click', '.gallery-control', function(event) {
      event.preventDefault();
      event.stopPropagation();

      var currentImage = $('.gallery-image').find('img');

      if ($(this).hasClass('gallery-next')) {
        if (imagesArray.indexOf(currentImage.attr('src')) >= (imagesArray.length - 1)) {
          return false;
        }

        currentImage.fadeOut(300, function() {
          var nextImage = imagesArray[imagesArray.indexOf(currentImage.attr('src')) + 1]
          $(currentImage).attr('src', nextImage);
        }).fadeIn(300);
      }

      else if ($(this).hasClass('gallery-prev')) {
        if (imagesArray.indexOf(currentImage.attr('src')) < 1) {
          return false;
        }

        currentImage.fadeOut(300, function() {
          var nextImage = imagesArray[imagesArray.indexOf(currentImage.attr('src')) - 1]
          $(currentImage).attr('src', nextImage);
        }).fadeIn(300);

      }

    });

    $('body').on('click', '#gallery-close', function(event) {
      event.preventDefault();
      $('#gallery-modal').fadeOut(300, function() {
        $('#gallery-modal').remove();
        imagesArray = [];
      });
      $('body').removeClass('modal-open');
    });

    $('body').on('click', '.gallery-image', function(event) {
      event.stopPropagation();
    });

    $('body').on('click', '#gallery-modal', function(event) {
      $('#gallery-close').trigger('click');
    });

    $(document).keyup(function(e) {
      if (e.keyCode == 27) {
        $('#gallery-close').trigger('click');
      }
      if (e.keyCode == 37) {
        $('.gallery-control.gallery-prev').trigger('click');
      }
      if (e.keyCode == 39) {
        $('.gallery-control.gallery-next').trigger('click');
      }
    });
  }

  function fixScroll() {
    $('#sscr').css('height', 0);
    $('#sscr').css('height', document.documentElement.scrollHeight + 'px');
  }

  function initCountdowns () {
    $('.countdown').each(function(index, el) {
      var theDate = $(el).data('date');
      $(el).downCount({
        date: theDate,
        offset: 0
      });
    });
  }

  function initAccordions () {

    $('.accordion').each(function(index, el) {
      if ($(el).data('open-first')) {
        $(el).find('li:first').addClass('active');
        $(el).find('li:first .accordion-content').show();
      }
    });

    $('.accordion-title').on('click', function(event) {
      var accordion = $(this).parents('.accordion');

      if (!accordion.data('multiple')) {
        accordion.find('li').not($(this).parent()).removeClass('active');
        accordion.find('li').not($(this).parent()).find('.accordion-content').slideUp(300);
      }

      $(this).parent('li').toggleClass('active');
      $(this).next().slideToggle(300, function () {
        fixScroll();
      });

    });
  }

  function initCounters () {

    $('.counter').appear(function() {
      var counter = $(this).find('.number-count');
      var toCount = counter.data('count');

      $(counter).countTo({
        from: 0,
        to: toCount,
        speed: 1000,
        refreshInterval: 50
      })

    });
  }

  function initVideoModal () {
    $('.play-button, a[data-play-button]').on('click', function(e) {
      e.preventDefault();

      var videoUrl = $(this).data('src') || $(this).attr('href');

      var template = '<div id="gallery-modal">';
      template += '<div class="centrize">';
      template += '<div class="v-center">';
      template += '<div class="gallery-image">';
      template += '<div class="media-video">';
      template += '<a href="#" id="gallery-close"><i class="hc-close"></i></a>';
      template += '<iframe src="'+ videoUrl +'" frameborder="0">';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      template += '</div>';
      template += '</div>';

      $('body').append(template);

      $('body').addClass('modal-open');

      $('#gallery-modal').fadeIn(300);

    });
  }

  function initMap() {

    var lat = $('#map').data('lat');
    var long = $('#map').data('long');
    var mapTitle = $('#map').data('title') || '';

    var myLatlng = new google.maps.LatLng(lat, long);

    var styles = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fcfcfc"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fcfcfc"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]}];

    var mapOptions = {
      zoom: 12,
      center: myLatlng,
      mapTypeControl: false,
      disableDefaultUI: true,
      zoomControl: true,
      scrollwheel: false,
      draggable: !("ontouchend" in document),
      styles: styles
    }

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var infowindow = new google.maps.InfoWindow({
      content: '<h6>' + mapTitle + '</h6>'
    });

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: '/images/marker.svg',
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });
  }

  function initForms () {

    $('form[data-mailchimp]').each(function(index, el) {
      $(el).ajaxChimp({
        url: $(el).data('url'),
        callback: function (res) {
          var template = '<div class="modal fade" id="newsletter-modal" tabindex="-1" role="dialog">';
          template += '<div class="centrize">';
          template += '<div class="v-center">';
          template += '<div class="modal-dialog">';
          template += '<div class="modal-content">';
          template += '<div class="modal-header">';
          template += '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="hc-close"></i></span></button>';
          if (res.result === 'success') {
            template += '<h4 class="modal-title">Thank you!</h2>';
          } else{
            template += '<h4 class="modal-title">There was an error.</h2>';          }

          template += '</div>';
          template += '<div class="modal-body">';
          template += '<p>' + res.msg + '</p>';
          template += '</div>';
          template += '</div>';
          template += '</div>';
          template += '</div>';
          template += '</div>';
          template += '</div>';

          $(template).modal().on('hidden.bs.modal', function () {
            $(this).remove();
          });
        }
      });
    });
  }

  function initContactForm() {

    var requiredInputs = $('#contact-form').find('input[data-required], textarea[data-required]').toArray();

    var isValidForm = function() {
      var toReturn;

      requiredInputs.forEach(function(element, index){
        if (!$(element).val()) {
          toReturn = false;
        } else{
          toReturn = true;
        }
      });

      return toReturn;
    }

    $('#contact-form').on('submit', function(event) {

      event.preventDefault();

      requiredInputs.forEach(function(element, index){
        if (!$(element).val()) {
          $(element).parent('.form-group').addClass('has-error');
        } else{
          $(element).parent('.form-group').removeClass('has-error');
        }
      });

      if (isValidForm()) {
        $.ajax({
          url: $(this).attr('action'),
          type: 'POST',
          data: $(this).serialize(),
        })
        .done(function() {
          var message = $('#contact-form').data('success-text') || 'Your message has been sent. We will get back to you shortly!';
          var succesTemplate = '<div role="alert" class="alert alert-success alert-colored">'+ message +'</div>';
          $('#contact-form input, #contact-form textarea, #contact-form button').attr('disabled', 'disabled');
          $('#contact-form .alert').fadeOut(300);
          $(succesTemplate).insertBefore($('#contact-form .btn'));
        })
        .fail(function() {
          var message = $('#contact-form').data('error-text') || 'There was an error. Try again later.';
          var errorTemplate = '<div role="alert" class="alert alert-danger alert-colored">'+ message +'</div>';
          $('#contact-form .alert').fadeOut(300);
          $(errorTemplate).insertBefore($('#contact-form .btn'));
        })
      }

    });

    $('#contact-form input, #contact-form textarea').on('keyup', function(event) {
      event.preventDefault();
      if ($(this).val()) {
        $(this).parent('.form-group').removeClass('has-error');
      }
    });
  }

  function initCustom() {
    // Your custom code here
  }

  function init() {

    $.fn.isOnScreen = function(){
      var viewport = {};
      viewport.top = $(window).scrollTop();
      viewport.bottom = viewport.top + $(window).height();
      var bounds = {};
      bounds.top = this.offset().top;
      bounds.bottom = bounds.top + this.outerHeight();
      return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
    };

    initHomeSlider();
    initGeneral();
    initContactForm();
    initScroll();
    initNavbar();
    initLoad();
    initVideos();
    initSliders();
    initCarousels();
    initPhotoGallery();
    initCountdowns();
    initAccordions();
    initCounters();
    initVideoModal();
    initForms();
    initCustom();

    if ($('#map').length) {
      google.maps.event.addDomListener(window, 'load', initMap);
      $('#map').css('position', 'absolute');
    }
  }

  init();

})(jQuery);
