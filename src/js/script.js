$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/carousel/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/carousel/right.svg"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false,
                    adaptiveHeight: true
                }
            }
        ]
    });
  });