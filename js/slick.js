$('.slider').slick({
    centerMode: true,
    variableWidth: true,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    dots: true,
    customPaging: function(slider, i) {
        return '<span>&#9675;</span>';
    },


});