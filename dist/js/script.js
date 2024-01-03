$(document).ready(function () {

    // создание невидимого меню для контактов
    $('.contact').on('click', function () {
        $('.contact').toggleClass('active');
    });

    // плавная анимация при скролле
    $('a[href^="#"').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
        return false;
    });
})