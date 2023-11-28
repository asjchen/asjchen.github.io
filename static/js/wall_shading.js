
function highlightCategory() {
    var topicList = ['math', 'food', 'climbing'];
    var currIdx = 0;
    for (var topicIdx = 0; topicIdx < topicList.length; topicIdx++) {
        if ($('#wall').hasClass(topicList[topicIdx])) {
            currIdx = topicIdx;
            $('.' + topicList[topicIdx]).removeClass('highlight-text');
            $('#wall-words').removeClass('fade-text');
            $('#wall-topics').removeClass('fade-text');
            $('#wall').removeClass(topicList[topicIdx])
        }
    }
    currIdx = (currIdx + 1) % topicList.length;
    $('#wall').addClass(topicList[currIdx])
    $('.' + topicList[currIdx]).addClass('highlight-text');
    $('#wall-words').addClass('fade-text');
    $('#wall-topics').addClass('fade-text');
}

window.setInterval(highlightCategory, 700);
