/*
 Theme Name: Makeover
 Theme URI: http://themewar.com/html/makeover
 Author: themewar
 Author URI: https://themeforest.net/user/themewar/portfolio
 Description: Makeover - Spa Saloon Responsive HTML5 Template
 Version: 1.0
 License:
 License URI:
*/
 /*=======================================================================
 [Table of contents]
 =========================================================================
 1. Init Vars
 2. All Slider
 3. Counter
 4. Select
 5. Datepicker
 6. All PopUP
 7. Skills
 8. Price Range
 9. Qty
 10. Google Maps
 11. Widget Toggler
 12. PopUp Menu
 13. Sticky Header
 14. Mobile Menu
 15. Back To Top
 16. Payment Accordian
 17. Section Scrolling
 18. Preloader
 19. Contact Form Submission
*/

(function ($) {
    'use strict';
    
    /*--------------------------------------------------------
    / 1. Init Vars
    /---------------------------------------------------------*/
    var select           = $('select'),
        clientSlider     = $('.clientSlider'),
        tw_testiSlider   = $('.tw_testiSlider'),
        gallery_sliders  = $(".gallery_sliders"),
        related_carousel = $(".related_carousel"),
        relatedPost      = $(".relatedPostSlider"),
        popup_video      = $('.popup_video'),
        popup_img        = $('.popup_img'),
        funfact          = $('.funfact'),
        slider_range     = $("#slider-range"),
        spaGallerySlider = $(".spaGallerySlider");
    
    /*--------------------------------------------------------
    / 2. All Slider
    /----------------------------------------------------------*/
    /*-- Rev Slider --*/
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "fullscreen",
        visibilityLevels: [1200, 1140, 778, 480],
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: true,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 40,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 40,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        }
    });
    var revapi2 = jQuery('#rev_slider_2').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "auto",
        minHeight: '973',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                style: "custom",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: true,
                tmp: '',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                }
            },
            bullets: {
                enable: false
            }
        },
        parallax: {
            type: 'mouse+scroll',
            origo: 'slidercenter',
            speed: 400,
            levels: [5,10,15,20,25,30,35,40,
                     45,46,47,48,49,50,51,55],
            disable_onmobile: 'on'
        }
    });
    var revapi3 = jQuery('#rev_slider_3').show().revolution({
        delay: 6000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        jsFileLocation: "js/",
        sliderLayout: "auto",
        minHeight: '853',
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "off",
            arrows: {
                enable: false
            },
            bullets: {
                enable: true,
                hide_onleave: false,
                direction: 'vertical',
                style: 'zeus',
                h_align: 'right',
                v_align: 'center',
                h_offset: 30,
                v_offset: 0,
                space: 10
            }
        }
    });
    /*-- Client Slider --*/
    if(clientSlider.length > 0){
        var clientSlider_obj = clientSlider.owlCarousel({
            margin: 30,
            loop: false,
            nav: false,
            dots: false,
            items: 5,
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1
                },
                768:{
                    items: 3
                },
                1023:{
                    items: 4
                },
                1200:{
                    items: 5
                }
            }
        });
    }
    /*-- Testimonail Slider --*/
    if (tw_testiSlider.length > 0) {
        tw_testiSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.testiNav',
            autoplay: true
        });
        $('.testiNav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.tw_testiSlider',
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true
        });
    }
    /*-- Gallery Slider --*/
    if (gallery_sliders.length > 0) {
        gallery_sliders.lightSlider({
            gallery:true,
            item:1,
            thumbItem:4,
            slideMargin: 0,
            speed:700,
            pause: 5000,
            auto:true,
            loop:true,
            galleryMargin: 0,
            thumbMargin: 9,
            currentPagerPosition: 'left',
            onSliderLoad: function() {
                gallery_sliders.removeClass('cS-hidden');
            }  
        });
    }
    /*-- Related Products Slider --*/
    if(related_carousel.length > 0){
        var related_carousel_obj = related_carousel.owlCarousel({
            margin: 30,
            loop: false,
            nav: false,
            dots: false,
            items: 4,
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1
                },
                768:{
                    items: 2
                },
                991:{
                    items: 3
                },
                1024:{
                    items: 4
                }
            }
        });
    }
    /*-- Related Post Slider --*/
    if(relatedPost.length > 0){
        var relatedPost_obj = relatedPost.owlCarousel({
            margin: 30,
            loop: false,
            nav: false,
            dots: false,
            items: 2,
            responsiveClass:true,
            responsive:{
                0:{
                    items: 1
                },
                768:{
                    items: 2
                },
                991:{
                    items: 2
                }
            }
        });
    }
    /*-- Spa Gallery Slider --*/
    if(spaGallerySlider.length > 0){
        var spaGallerySlider_obj = spaGallerySlider.owlCarousel({
            margin: 30,
            loop: false,
            nav: true,
            navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
            dots: false,
            items: 1
        });
    }
    
    /*--------------------------------------------------------
    / 3. Counter
    /---------------------------------------------------------*/
    var skl = true;
    funfact.appear();
    funfact.on('appear', function() {
        if (skl)
        {
            funfact.each(function() {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-count')}, {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        var num = Math.ceil(this.Counter).toString();
                        $('.counter', $this).html(num);
                    }
                });
            });
            skl = false;
        }
    });
    
    /*--------------------------------------------------------
    / 4. Select
    /---------------------------------------------------------*/
    if (select.length > 0) {
        select.niceSelect();
        select.parent().addClass('select-area');
    };
    /*--------------------------------------------------------
    / 5. Datepicker
    /---------------------------------------------------------*/
    $('.datetime-picker').datetimepicker({
        timepicker: true,
        datepicker: true,
        format: 'y-m-d H:i',
        hours12: false,
        step: 30
    });
    /*--------------------------------------------------------
    / 6. All PopUP
    /--------------------------------------------------------*/
    popup_video.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        showCaption: false,
        controls: true
    });
    popup_img.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: true,
        swipe: true,
        showTitle: false,
        controls: true
    });
    
    /*--------------------------------------------------------
    / 7. Skills
    /----------------------------------------------------------*/
    if ($(".single_skill").length > 0){
        $('.single_skill').appear();
        $('.single_skill').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills(){
        $(".single_skill").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".ss_child", this).animate({'width': datacount + '%'}, 2000);
            if (coun){
                $(this).find('.ss_parent h4').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            }
        });
        coun = false;
    }
    
    /*--------------------------------------------------------
    / 8. Price Slider
    /----------------------------------------------------------*/
    if (slider_range.length > 0) {
        slider_range.slider({
            range: true,
            min: 28,
            max: 600,
            values: [28, 562],
            slide: function (event, ui) {
                $("#amount").html("$" + ui.values[ 0 ] + " — $" + ui.values[ 1 ]);
            }
        });
        $("#amount").html("$" + $("#slider-range").slider("values", 0) + " — $" + $("#slider-range").slider("values", 1));
    }
    /*--------------------------------------------------------
    / 9. Qty
    /----------------------------------------------------------*/
    if ($(".qtyBtn").length > 0) {
        $(".btnMinus").on('click', function() {
            var vals = parseInt($(this).next(".carqty").val(), 10);
            if (vals > 1) {
                vals -= 1;
                $(this).next(".carqty").val(vals).trigger('change');
            } else {
                $(this).next(".carqty").val(vals).trigger('change');
            }
            return false;
        });
        $(".btnPlus").on('click', function() {
            var vals = parseInt($(this).prev(".carqty").val(), 10);
            vals += 1;
            $(this).prev(".carqty").val(vals).trigger('change');
            return false;
        });
    }
    /*--------------------------------------------------------
    / 10. Google Maps
    /----------------------------------------------------------*/
    if ($("#google_map").length > 0){
        var map;
        map = new GMaps({
            el: "#google_map",
            lat: 47.608314,
            lng: -122.337264,
            zoom: 10,
        });
        var image = "";
        map.addMarker({
            lat: 47.608314,
            lng: -122.337264,
            icon: "images/marker.png",
            animation: google.maps.Animation.DROP,
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#d3cfcf"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#aacbd9"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#f5f5f5"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#2c2c2c"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#c9c9c9"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#252525"}
                ]
            }
        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });
        map.setStyle("map_style");
    }
    /*----------------------------------------------------------
    / 11. Widget Toggler
    /----------------------------------------------------------*/
    $('.humBurger').on('click', function (e) {
        e.preventDefault();
        $('.popup_sidebar_sec').toggleClass('active');
    });
    $('.popup_sidebar_overlay, .widget_closer').on('click', function () {
        $('.popup_sidebar_sec').removeClass('active');
    });
    /*--------------------------------------------------------
    / 12. PopUp Menu
    /---------------------------------------------------------*/
    $('#humBurger').on('click', function (e) {
        e.preventDefault();
        $('.popup_menu').addClass('active').fadeIn();
        setTimeout(function () {
            if ($('.popup_menu').hasClass('active')) {
                var tlMenu = new TimelineLite();
                tlMenu.set($(".animated_menu"), {y: 80, opacity: 0});
                $(".animated_menu").each(function (index, element) {
                    tlMenu.to(element, 0.5, {y: 0, opacity: 1, delay: 0.4, ease: Power2.easeOut}, index * 0.1)
                });
            } else {
                var tlMenu = new TimelineLite();
                $(".animated_menu").each(function (index, element) {
                    tlMenu.to(element, 0.25, {y: -80, opacity: 0, ease: Power2.easeIn}, index * 0.05)
                });
            }
        }, 20);
    });
     if ($(".menu_popup").length > 0){
        $(".menu_popup ul li.menu-item-has-children > a").on('click', function (e) {
            e.preventDefault();
            if ($(this).parent('li').hasClass('active')){
                $(this).parent('li').removeClass('active');
                $(this).next('ul.sub-menu').slideUp('slow');
            } else{
                $(".menu-item-has-children ul.sub-menu").slideUp('slow');
                $(".menu-item-has-children.active").removeClass("active");
                $(this).parent().toggleClass('active');
                $(this).next('ul.sub-menu').slideToggle('slow');
            }
        });
    }
    $('#close_menu').on('click', function () {
        var tlMenu = new TimelineLite();
        $(".animated_menu").each(function (index, element) {
            tlMenu.to(element, 0.25, {y: -80, opacity: 0, ease: Power2.easeIn}, index * 0.05)
        });
        $(".popup_menu ul.sub-menu").slideUp('slow', function () {
            $(".menu-item-has-children.active").removeClass("active");
            $('.popup_menu').removeClass('active');
        });
        setTimeout(function () {
            $('.popup_menu').fadeOut();
        }, 500);
    });
    /*--------------------------------------------------------
    / 13. Sticky Header
    /---------------------------------------------------------*/
    if($(".isSticky").length > 0){
        var header_height = $(".isSticky").height();
        $(window).on('scroll', function(){
            if($(window).scrollTop() > 300){
                $(".isSticky").addClass('fixedHeader animated slideInDown');
            }else{
                $(".isSticky").removeClass('fixedHeader animated slideInDown');
            }
        });
    }
    /*--------------------------------------------------------
    / 14. Mobile Menu
    /---------------------------------------------------------*/
    $('.mainMenu ul li.menu-item-has-children > a').on('click', function(e){
        e.preventDefault();
        $(this).siblings('ul').slideToggle();
    });
    $('.menu_btn').on('click', function(e){
        e.preventDefault();
        $('.mainMenu').slideToggle();
        $(this).toggleClass('active');
    });
    
    
    /*--------------------------------------------------------
    / 15. Back To Top
    /---------------------------------------------------------*/
    var back = $("#backtotop"),
        body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()){
            back.css({bottom: '30px', opacity: '1', visibility: 'visible'});
        } else {
            back.css({bottom: '-30px', opacity: '0', visibility: 'hidden'});
        }
    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });
    
    /*--------------------------------------------------------
    / 16. Payment Accordian
    /---------------------------------------------------------*/
     if($(".wc_payment_methods").length > 0)
    {
        $(".wc_payment_methods li").each(function(){
            $('input[type="radio"]', this).on('click', function(e){
                var ids = $(this).attr('id');
                if($('div.' + ids).hasClass('visibales'))
                {

                }else
                {
                    $(".payment_box").removeClass('visibales');
                    $(".payment_box").slideUp('fast');
                    $('div.' + ids).slideDown('fast').addClass('visibales');
                }
            });
        });
    }
    
    if($('.packageSection').length > 0){
        $('.packageSection .theSidebar').theiaStickySidebar({
            additionalMarginTop: 90
        });

        $('.ScrollSpyNav ul li > a').on('click', function(){
            $('html, body').animate({scrollTop : $(this.hash).offset().top - 68}, 1000);
            return false;
        });
    }
    $(window).on('scroll', function(){
        if($('.packageSection').length > 0){
            pageSectionScroll();
        }
    });
    /*--------------------------------------------------------
    / 17. Section Scrolling
    /---------------------------------------------------------*/
    function pageSectionScroll(){
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.ScrollSpyNav').find('a').each(function(){
            var atr = $(this).attr('href');
            if($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function(i){
            if(winTop > contentTop[i] - rangeTop){
                $('.ScrollSpyNav li').removeClass('active').eq(i).addClass('active');
            }
        });
    }
    /*--------------------------------------------------------
    / 18. Preloader
    /---------------------------------------------------------*/
    $(window).on('load', function () {
        var preload = $('.preloader');
        if (preload.length > 0) {
            preload.delay(800).fadeOut('slow');
        }
    });
    
    /*--------------------------------------------------------
    / 19. Contact Form Submission
    /---------------------------------------------------------*/
    $('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);

        $('button[type="submit"]', this).attr('disabled', 'disabled').val('Processing...');
        var form_data = $this.serialize();

        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === ''){
                $(this).addClass('reqError');
                required += 1;
            } else{
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });

        if (required === 0) {
            $.ajax({
                type: 'POST',
                url: 'mail/mail.php',
                data: {form_data: form_data},
                success: function (data) {
                    $('button[type="submit"]', $this).removeAttr('disabled').val('Message');

                    $('.con_message', $this).fadeIn().html('<strong>Congratulations!</strong> Your query successfully sent to site admin.').removeClass('alert-warning').addClass('alert-success');
                    setTimeout(function () {
                        $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
                    }, 5000);
                }
            });
        } else {
            $('button[type="submit"]', $this).removeAttr('disabled').val('Message');
            $('.con_message', $this).fadeIn().html('<strong>Opps!</strong> Error found. Please fix those and re submit.').removeClass('alert-success').addClass('alert-warning');
            setTimeout(function () {
                $('.con_message', $this).fadeOut().html('').removeClass('alert-success alert-warning');
            }, 5000);
        }

    });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });
		

})(jQuery);