gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.servicios',
        // markers: true,
        start: 'top 40%',
        end: 'bottom 0'
    }
})

tl.to('.bgfixed.main',{ display: 'block' },5);


/****************************************************** */

$('header .content-nav nav li a').on('click', function () {
    if ($('.fa.fa-bars').css('display') == 'block') {
        $('header .content-nav').slideUp();
    }
});


$('.fa.fa-bars').on('click', function (e) {
    e.preventDefault();
    $('header .content-nav').slideToggle();
});

$('.solicita-demo').on('click', function (e) {
    e.preventDefault();
    $('.bgfixed.main').show();
    /*$('.bgfixed').css('height', '100%');*/
});

$('.close').on('click', function (e) {    
    e.preventDefault();
    $('.bgfixed').hide();
})

$('.close').on('click', function (e) {    
    e.preventDefault();
    $('.bgfixed_soporte').hide();
})

$('header .soporte a').on('click', function (e) {    
    e.preventDefault();
    $('.bgfixed_soporte').show();
})
