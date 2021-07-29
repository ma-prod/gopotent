$(document).ready(function () {

  $('.scroll_toform').on('click', function () {
    $('html, body').animate({scrollTop: $('form').offset().top - 150}, 500);
  });

  showElements();

});

$(document).on('scroll', showElements);

function showElements() {

  if ($(window).width() >= 768) {
    var wrapPosition;
    var scroll = $(document).scrollTop();
    var elementWrap = $('[data-unshow-wrap]');

    elementWrap.each(function () {
      var element = $(this).find($('[data-unshow-element]'));

      if ($(window).width() >= 990) {
        wrapPosition = $(this).offset().top - 700;
      } else {
        wrapPosition = $(this).offset().top - 300;
      }

      if (scroll >= wrapPosition) {
        element.addClass('show');
      } else {
        element.removeClass('show');
      }
    });
  }

}