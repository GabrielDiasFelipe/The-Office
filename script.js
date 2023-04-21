$(window).on('load', function() {
    const loader = $('#loader-wrapper');
    loader.delay(2000).fadeOut();
  });
  
  $('nav a').click(function(e) {
    e.preventDefault();
    const url = $(this).attr('href');
    $('#loader-wrapper').fadeIn(500, function() {
      window.location.href = url;
    });
  });
  