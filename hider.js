// hider by rwlumino
function hider() {
    // hider-toggle w/ html data method
    $('*[hider-target]').click( function toggleData( e ) {
        // On click of element with data-toggle-target attribute
        var toggleTarget = $(this).attr('hider-target'); // Stores the value of the attribute
        e.preventDefault();
        if ( $(this).attr('hider-style') == 'horizontal' ){
            // Horizontal toggle collapse
            $('[hider="'+toggleTarget+'"]').toggleClass('collapsed');
            $('[hider="'+toggleTarget+'"]').animate({
                width: 'toggle',
            }, 500); // Toggles the matching element
            $(this).toggleClass('collapsed'); // Toggles collapsed class for styling
            $('[hider="'+toggleTarget+'"]').closest('div').find('.hider-fade-in').fadeToggle(); // Fades in certain elements that may look weird during toggle animation
        }
        else {
            // Default vertical toggle collapse
            $('[hider="'+toggleTarget+'"]').toggleClass('collapsed');
            $('[hider="'+toggleTarget+'"]').slideToggle(); // Toggles the matching element
            $(this).toggleClass('collapsed'); // Toggles collapsed class for styling
            $('[hider="'+toggleTarget+'"]').closest('div').find('.hider-fade-in').fadeToggle(); // Fades in certain elements that may look weird during toggle animation
        }
    });
}

$(document).on('ready', hider);

