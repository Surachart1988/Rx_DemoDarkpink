(function ($) {
    'use strict'; jQuery('.mean-menu').meanmenu({ meanScreenWidth: "991" });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150) { $('.navbar-area').addClass("is-sticky"); }
        else { $('.navbar-area').removeClass("is-sticky"); }
    });
    $('.popup-youtube').magnificPopup({ disableOn: 320, type: 'iframe', mainClass: 'mfp-fade', removalDelay: 160, preloader: false, fixedContentPos: false });
    $('.banner-slider').owlCarousel({ loop: true, margin: 0, dots: false, nav: true, navText: ["<i class='icofont-rounded-double-left'></i>", "<i class='icofont-rounded-double-right'></i>"], autoplay: false, items: 1, mouseDrag: false, autoplayHoverPause: true, autoplayTimeout: 4000, animateOut: 'fadeOut', animateIn: 'fadeIn' });
    $('.feedback-slider').owlCarousel({ loop: true, margin: 10, dots: false, autoplayTimeout: 2000, autoplayHoverPause: true, nav: true, navText: ["<i class='icofont-rounded-double-left'></i>", "<i class='icofont-rounded-double-right'></i>"], autoplay: true, smartSpeed: 1500, responsive: { 0: { items: 1 }, 992: { items: 2 } } });
    $('.feedback-slider-area').owlCarousel({ loop: true, margin: 10, dots: false, autoplayTimeout: 2000, autoplayHoverPause: true, nav: true, navText: ["<i class='icofont-rounded-double-left'></i>", "<i class='icofont-rounded-double-right'></i>"], autoplay: true, smartSpeed: 1500, items: 1 });
    $('.company-slider').owlCarousel({ loop: true, margin: 10, dots: false, nav: false, autoplay: true, autoplayTimeout: 2000, smartSpeed: 2000, autoplayHoverPause: true, responsive: { 0: { items: 1 }, 600: { items: 2 }, 768: { items: 3 }, 1000: { items: 5 } } });
    $(".accordion-title").click(function (e) {
        var accordionitem = $(this).attr("data-tab"); $("#" + accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();
        $(this).toggleClass("active-title"); $("#" + accordionitem).parent().siblings().find(".accordion-title").removeClass("active-title");
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) { $('.top-btn').fadeIn(); }
        else { $('.top-btn').fadeOut(); }
    });
    $('.top-btn').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 1500); return false;
    });
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else { event.preventDefault(); }
    });
    function callbackFunction(resp) {
        if (resp.result === "success") { formSuccessSub(); }
        else { formErrorSub(); }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function () {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg) {
        if (valid) { var msgClasses = "validation-success"; }
        else { var msgClasses = "validation-danger"; }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({ url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", callback: callbackFunction });
    new WOW().init();
    $(window).on('load', function () {
        $('.top-btn').fadeOut();
    });
    $(window).on('load', function () {
        $(".loader-content").fadeOut(1000);
    })
    $('body').append("<a href='https://themeforest.net/checkout/from_item/26399931?license=regular&support=bundle_6month&_ga=2.207335315.1464546313.1649253347-1356931366.1645330919&_gac=1.57078104.1649351773.Cj0KCQjwl7qSBhD-ARIsACvV1X34Yvc4XKSYFq60iQ6auDlKjNhJLJW5j_1joCsZJCKQ-4m75Uw8RNcaArtlEALw_wcB' target='_blank' class='buy-now-btn'><img src='assets/img/envato.png' alt='envato'/>Buy Now</a>");
    $('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
})(jQuery);
function setTheme(themeName) {
    localStorage.setItem('fixa_theme', themeName); document.documentElement.className = themeName;
}
function toggleTheme() {
    if (localStorage.getItem('fixa_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}
(function () {
    if (localStorage.getItem('fixa_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();