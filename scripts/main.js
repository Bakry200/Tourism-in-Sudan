document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    particlesJS.load('particles-js', 'scripts/particles.json', function() {
        console.log('particles.js loaded - callback');
    });

    // Function to change images every 3 seconds
    var galleryItems = document.getElementsByClassName('gallery-item');
    setInterval(function() {
        for (var i = 0; i < galleryItems.length; i++) {
            var imgElement = galleryItems[i].getElementsByTagName('img')[0];
            var currentSrc = imgElement.getAttribute('src');
            var destinationFolder = currentSrc.substring(0, currentSrc.lastIndexOf('/'));
            var currentImgIndex = parseInt(currentSrc.match(/img(\d+)\.jpg/)[1]);
            var nextImgIndex = currentImgIndex % 3 + 1;
            imgElement.setAttribute('src', destinationFolder + '/img' + nextImgIndex + '.jpg');
        }
    }, 3000);
});