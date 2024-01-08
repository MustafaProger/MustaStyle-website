$(document).ready(function () {

    // создание невидимого меню для контактов
    $('.contact').on('click', function () {
        $('.contact').toggleClass('show_contact');
    });

    // плавная анимация при скролле
    $('a[href^="#"').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });

    //появление скрытого navbar при нажатии на бургер
    //анимация на список ul
    $('.burger__menu').on('click', function () {
        $('.burger__menu').toggleClass('active');
        $('.navbar').toggleClass('active');
        $('.list__item').toggleClass('fadeindown');
        $('body').toggleClass('lock');
    });

    //работа с slick-слайдер
    $('.carousel__inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/arrowLeft.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/arrowRight.svg"></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 618,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    });

    //работы с формами
    $('.consultation__btn').on('click', function () {
        $('.contact').toggleClass('active');
    });


    $('ul.tabs__caption').each(function(i) {
        var storage = localStorage.getItem('tab' + i);
        if (storage) {
          $(this).find('li').removeClass('active').eq(storage).addClass('active')
          .closest('div.tabs').find('div.tabs__content').removeClass('active').eq(storage).addClass('active');
        }
      });
   
      $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        var ulIndex = $('ul.tabs__caption').index($(this).parents('ul.tabs__caption'));
        localStorage.removeItem('tab' + ulIndex);
        localStorage.setItem('tab' + ulIndex, $(this).index());
      });
    
})