
function highlightCategory(cat) {
    $('.topic-' + cat).on('mouseenter mouseleave', function() {
        if ($('.' + cat).hasClass('highlight-text')) {
            $('.' + cat).removeClass('highlight-text');
            $('#wall-words').removeClass('fade-text');
            $('#wall-topics').removeClass('fade-text');
        } else {
            $('.' + cat).addClass('highlight-text');
            $('#wall-words').addClass('fade-text');
            $('#wall-topics').addClass('fade-text');
        }
    });
}

$(document).ready(function(){
    highlightCategory('math');
    highlightCategory('climbing');
    highlightCategory('food');
});