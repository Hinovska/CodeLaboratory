$('.show-card').click(function(e) {
  $('.card').addClass('show').css('display', 'block');
  $('.show-card').addClass('hide');
});

$('.card .close').click(function(e) {
  $('.card').addClass('hide');
  setTimeout(function() {
    $('.card').css('display', 'none').removeClass('show').removeClass('hide');
  }, 1000);
  $('.show-card').removeClass('hide');
});