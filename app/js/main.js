$(function(){
    $('.top-slider__inner').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });


    const searchBtn = $('.search__btn');
    const cancelBtn = $('.search__cancel');
    const searchBox = $('.search');
    const searchInput = $('.search__input');

    searchBtn.on('click', function(){
        searchBox.addClass('active');
        searchInput.addClass('active');
        searchBtn.addClass('active');
        cancelBtn.addClass('active');
    })

    cancelBtn.on('click', function(){
        searchBox.removeClass('active');
        searchInput.removeClass('active');
        searchBtn.removeClass('active');
        cancelBtn.removeClass('active');
    })



});