$(document).ready(function(){

    function getSlidesNumber(){
        if($(window).width() < 680){
            return 1;
        }
        return 3;
    }



    $('.team__slider').slick({
        slidesToShow: getSlidesNumber(),
        slidesToScroll: 1,
        appendArrows: $(".slider__arrow"),
        prevArrow: $(".slider__arrow-prev"),
        nextArrow: $(".slider__arrow-next"),
        infinite: true,
      });

    $(".reviewSlider").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    })
      
    var elems = $(".skills__loader-inner");
    var top = $(elems).offset().top;
    var triggered = false;
    var classes = ["per-90", "per-70", "per-75", "per-85"];
    var countersEl = $(".skills__pers");
    var percent = [90,70,75,85];
    $(window).on("scroll", function(e){
        if($(this).scrollTop() + $(this).height() > top && !triggered){
            triggered = true;
            $(elems).each(function(i){
                $(this).addClass(classes[i]);
                
            })
            
        }
    });

    $(".portfolio__category").click(function(){
        var category = $(this).data("cat");
        $(".portfolio__category.active").removeClass("active");
        $(this).addClass("active");
        var layout = $(".portfolio__layout");

        layout.css("display", "block");

        layout.animate({
            "opacity" : "1.0"
        }, 400, function(){
            if(category != 1){
                $(".portfolio__item").css("display", "none");
                $(".portfolio__item[data-cat=" + category + "]").css("display", "block");
            }else{
                $(".portfolio__item").css("display", "block");
            }
            
            layout.animate({
                "opacity" : "0.0"
            }, 400, function(){
                layout.css("display", "none");
            });
        });


    });
});