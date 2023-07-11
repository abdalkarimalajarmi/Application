// change page directions 
function changeToLTR() {
    $('body').removeClass('direction-rtl').addClass('direction-ltr');

    $('#EN').removeClass('disBlock').addClass('disNone');
    $('#AR').removeClass('disNone ').addClass('disBlock');

    $(".cardDir").css("direction", "ltr");
    $(".revImg").css("transform", " rotateY(180deg) ");
    document.getElementById("revImg").style.cssText = `
    transform: rotateY(180deg); `;


}

function changeToRTL() {
    $('body').removeClass('direction-ltr').addClass('direction-rtl');

    $('#EN').removeClass(' disNone').addClass('disBlock');
    $('#AR').removeClass('disBlock ').addClass('disNone');

    $(".cardDir").css("direction", "rtl");
    $(".revImg").css("transform", "rotateY(0deg) ");
    $('body').css("font-family", "Roman55");
    document.getElementById("revImg").style.cssText = `
    transform: rotateY(0deg); `;
}

// change page directions

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    ltr: true,
    rtl: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        ltr: true,
        rtl: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    mousewheel: true,
    keyboard: true,
});

//
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()


$('#pas, #pas2').on('keyup', function() {
    if ($('#pas').val() == $('#pas2').val()) {
        $('#message').html('متطابقتان').css('color', 'green');
    } else
        $('#message').html('غير متطابقتان  ').css('color', 'red');
});