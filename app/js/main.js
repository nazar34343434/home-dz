$(function () {
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

    searchBtn.on('click', function () {
        searchBox.addClass('active');
        searchInput.addClass('active');
        searchBtn.addClass('active');
        cancelBtn.addClass('active');
    })

    cancelBtn.on('click', function () {
        searchBox.removeClass('active');
        searchInput.removeClass('active');
        searchBtn.removeClass('active');
        cancelBtn.removeClass('active');
    })


    $(".product-item__star").rateYo({
        starWidth: "15px",
        normalFill: "#ccc",
        ratedFill: "rgba(218, 28, 28, .5)",
    });



    let mixer1 = mixitup('.product__items', {
        selectors: {
            control: '.filter-1'
        }
    });

    let mixer2 = mixitup('.design__items', {
        selectors: {
            control: '.filter-2'
        }
    });

});