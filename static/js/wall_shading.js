
function highlightCategory() {
    var topicList = ['math', 'food', 'climbing'];
    var currIdx = 0;
    for (var topicIdx = 0; topicIdx < topicList.length; topicIdx++) {
        if ($('#wall').hasClass(topicList[topicIdx])) {
            currIdx = topicIdx;
            $('.' + topicList[topicIdx]).removeClass('highlight-text');
            $('#wall').removeClass(topicList[topicIdx])
        }
    }
    currIdx = (currIdx + 1) % topicList.length;
    $('#wall').addClass(topicList[currIdx])
    $('.' + topicList[currIdx]).addClass('highlight-text');
}

// It takes a bit of time to load the content, so we put an initial delay on top of the interval.
window.setTimeout(highlightCategory, 500);
window.setInterval(highlightCategory, 2000);
