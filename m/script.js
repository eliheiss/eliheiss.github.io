$(function() {

	/*nav*/
	$('._UI').click(function() {
        $('#vp').toggleClass('_ii');
	});
  $('._ii ._UI').click(function() {
      $('#vp').removeClass('_ii');
  });
	$('._EJ').click(function() {
        $('#vp').toggleClass('_ss');
				if ($('#vp').hasClass('_ss')) {
					$('#ew').height(
						$(window).height()
					);
				}

  $(document).not( $('#vp') ).bind({
				'click.fb': function(){
						$('#vp').removeClass('_ss');
						$(document).unbind('click.fb');
				}
 	 });

	});
  $('._ss #ew').click(function() {
      $('#vp').removeClass('_ss');
  });/*/nav*/

	/*shrink*/
	$(window).scroll(function () {
	  if ($(document).scrollTop() > 1 ) {
	    $('#ehb,#efb').addClass('_sh');
	  } else {
	    $('#ehb,#efb').removeClass('_sh');
	  }
	});/*/shrink*/

});/*/$*/
