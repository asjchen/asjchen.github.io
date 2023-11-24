
function highlightCategory(cat) {
    $('.topic-' + cat).on('mouseenter mouseleave', function() {
        if ($('.' + cat).hasClass('highlight')) {
        $('.' + cat).removeClass('highlight');
    } else {
        $('.' + cat).addClass('highlight');
    }
    });
}

$(document).ready(function(){
    highlightCategory('math');
    highlightCategory('climbing');
    highlightCategory('food');
});