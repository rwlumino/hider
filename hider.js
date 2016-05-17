//	//	//	//	//	//	//	//	//	//	//	//	//	//
//													//
//	Hider Plugin by Reuben @dalegroup	          	//
//													//
//	//	//	//	//	//	//	//	//	//	//	//	//	//



$(document).ready(function() {
    //Show-Hide script

    // hider-toggle HTML data method
    $('*[hider-target]').click( function toggleData() {
        // On click of element with data-toggle-target attribute
        var toggleTarget = $(this).attr('hider-target'); // Stores the value of the attribute
        event.preventDefault();
        if ( $(this).attr('hider-style') == 'horizontal' ){
            // Horizontal toggle collapse
            $('[hider="'+toggleTarget+'"]').animate({
                width: 'toggle',
            }, 500); // Toggles the matching element
            $(this).toggleClass('collapsed'); // Toggles collapsed class for styling
            $('[hider="'+toggleTarget+'"]').closest('div').find('.hider-fade-in').fadeToggle(); // Fades in certain elements that may look weird during toggle animation
        }
        else if ( $(this).attr('hider-style') == 'fade' ){
            $('[hider="'+toggleTarget+'"]').fadeToggle(); // Toggles the matching element
            $(this).toggleClass('collapsed'); // Toggles collapsed class for styling
            $('[hider="'+toggleTarget+'"]').closest('div').find('.hider-fade-in').fadeToggle(); // Fades in certain elements that may look weird during toggle animation
        }
        else if ( $(this).attr('hider-style') == 'no-anim' ){
            $('[hider="'+toggleTarget+'"]').toggle(); // Toggles the matching element
            $(this).toggleClass('collapsed'); // Toggles collapsed class for styling
            $('[hider="'+toggleTarget+'"]').closest('div').find('.hider-fade-in').fadeToggle(); // Fades in certain elements that may look weird during toggle animation
        }
        else if ( $(this).attr('hider-style') == 'opacity' ){
            $('[hider="'+toggleTarget+'"]').toggle( function (){
                $(this).css('opacity', '0');
            }, function() {
                $(this).css('opacity', '1');
            });
            $(this).toggleClass('collapsed'); // Toggles collapsed class for styling
            $('[hider="'+toggleTarget+'"]').closest('div').find('.hider-fade-in').fadeToggle(); // Fades in certain elements that may look weird during toggle animation
        }
        else {
            // Default vertical toggle collapse
            $('[hider="'+toggleTarget+'"]').slideToggle(); // Toggles the matching element
            $(this).toggleClass('collapsed'); // Toggles collapsed class for styling
            $('[hider="'+toggleTarget+'"]').closest('div').find('.hider-fade-in').fadeToggle(); // Fades in certain elements that may look weird during toggle animation
        }
    });

    // Old methods
    $('.show-more').attr('title', 'Press to view more');    // Add this to the show button/link
    $('a.show-more').attr('href', 'javascript:void()'); // Clears anchors from the show/hide button
    $('.show-more').on( "click", function() { // Button click function
        $(this).closest('div').find('.hide-this').slideToggle();  //Use .hide-this on a div adjacent to the .show-more button to slideToggle it on click
        $(this).closest('div').find('.notoggle').slideDown(); // Only appears once, clicking again doesnt hide
        $(this).closest('div').find('.hide-this-mobile').slideToggle(); //This element is only hidden on mobile devices
        $(this).closest('div').find('.hide-this-low-desktop').slideToggle(); //This element is only hidden on low res
        $(this).closest('div').find('.hide-arrow').toggleClass('down'); //If .hide-arrow is used, rotates it 180 degrees
        $(this).closest('div').find('.more-text').html($('.more-text').text() == 'Show less options' ? 'Show more options' : 'Show less options');  //Changes hide/show button text
    });
});
