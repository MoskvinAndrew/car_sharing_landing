$(function () {
    $(".top__slider").slick({
        arrows: false,
        dots: true,
        autoplay:true,
        fade:true

    });
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll:1,
        slidesToShow: 4,
        responsive:[
            {
                breakpoint:1050,
                settings:{
                    slidesToScroll:1,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint:800,
                settings:{
                    slidesToScroll:1,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint:550,
                settings:{
                    slidesToScroll:1,
                    slidesToShow: 1,
                }
            }
        ]


    })
   $('.menu__btn').on('click',function (){
        $('.menu__list').toggleClass('menu__list-active');

   })
});




