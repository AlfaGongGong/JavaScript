window.onload = function () {
    var images = document.getElementsByTagName('img');

    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('src', images[i].getAttribute('src'));
    }
};