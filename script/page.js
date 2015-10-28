$(document).ready(function(ev) {
    console.log('document ready', Math.floor(Date.now()));

    setHomeInnerHeight();
});

$(window).load(function() {
    console.log('window loaded', Math.floor(Date.now()));
});

$(window).resize(function() {
    setHomeInnerHeight();
});

setHomeInnerHeight = function() {
    var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

    $('#home').height(h);
};