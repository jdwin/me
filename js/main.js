sentence = "My name is Jonathan and I'm a freelance web developer.";
target = document.getElementById("textTarget");

function deployText(sentence, target) {
    for(i = 0; i < sentence.length; i++) {
        delayText(sentence[i], target);
    }
}

function delayText(letter, target) {
    setTimeout(function() {
        target.innerHTML += letter;
    }, 100 * i);
}

$(".navButton").click(function() {
    $(".navMenu ul").toggle();
});

deployText(sentence, target);

$(document).ready(function() {
    $(".targetScroll").click(function(e) {
        e.preventDefault();

        var id = $(this).attr("href");
        var offset = $(id).offset();

        $("html, body").animate({
        scrollTop: offset.top
        }, 1000);
    });
});


//make project section side scrolling. Populate text boxes depending on what prject shown. 
////context menu on left side that shows different project and can go to different ones
