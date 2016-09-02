$('document').ready(function(){
	$('.how-to').show('slow');
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate({
			'left': '900px'},
			500,
			function(){
				$(this).stop();
				$(this).hide();
				$(this).css('left', '570px')
			}
		);
	})
	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
	$('body').keydown(function(e) {
		if (e.keyCode == 88) {
			$('.ryu-still').hide();
			$('.ryu-cool').show();
		}
	})
	.keyup(function(e){
		if (e.keyCode == 88) {
			$('.ryu-cool').hide();
			$('.ryu-still').show();
		}
	});

})
function doIntro() {
  $('.sf-logo').fadeIn(3500, function() {
    $('.sf-logo').fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $('.brought-by').fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(1500, function() {
            $('.jquery-logo').fadeOut(1500, function() {
              $('.how-to').fadeIn(1000);
            });
          })
        })
      })
    })
  })
};