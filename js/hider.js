//	//	//	//	//	//	//	//	//	//	//	//	//	//
//													//
//	Show-More Plugin by Reuben @dalegroup	       	//
//													//
//	//	//	//	//	//	//	//	//	//	//	//	//	//
$(document).ready(function() {
    $('.show-more').attr('title', 'Press to view more');
    $('a.show-more').attr('href', '#');
    $('.show-more').click(function() {
		$(this).closest('div').find('.hide-this').slideToggle();
        $(this).closest('div').find('.hide-this-notoggle').slideDown();
        $(this).closest('div').find('.hide-this-mobile').slideDown();
        $(this).closest('div').find('.hide-arrow').toggleClass('spin180');
        $(this).closest('div').find('.more-text').html($('.more-text').text() == 'Show less options' ? 'Show more options' : 'Show less options');
    });
});