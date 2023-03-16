(function($){

    $(".w-55-p").animate({width: "55%"}, 2500);
    $(".w-65-p").animate({width: "65%"}, 2500);
    $(".w-70-p").animate({width: "70%"}, 2500);
    $(".w-80-p").animate({width: "80%"}, 2500);

    $('.counter').counterUp();

    new WOW().init();

    var $grid = $('.filter-items').isotope();
    $('.filter ul').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $(this).siblings(".active").removeClass('active');
        $(this).addClass("active");
    });

    $(document).ready(function(){
        $('.testimonial-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            mouseDrag:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:false
                },
                1000:{
                    items:1,
                    nav:true,
                    loop:false
                }
            }
        });
        $('.client-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            mouseDrag:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1
                },
                400:{
                    items:2
                },
                600:{
                    items:3
                },
                800:{
                    items:4
                },
                1000:{
                    items:5
                }
            }
        });
        $('.photo-carousel').owlCarousel({
            loop:false,
            margin:10,
            nav:true,
            dots:false,
            mouseDrag:false,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true
                },
                1000:{
                    items:1,
                    nav:true
                }
            }
        });
    });

    $(window).on('load',function(){
        $('#preloader_inner').fadeOut();
        $('#preloader').fadeOut();
    });

    $(window).on('scroll',function(){
        if($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').on('click',function(){
        $('html,body').animate({scrollTop:0},400);
        return false;
    });

})(jQuery);