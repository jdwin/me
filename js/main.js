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

deployText(sentence, target);
