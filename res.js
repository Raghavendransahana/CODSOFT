document.addEventListener("DOMContentLoaded", function() {
    const textDivs = document.querySelectorAll('.text-div');
    const imageDisplay = document.getElementById('imageDisplay');

    textDivs.forEach(div => {
        div.addEventListener('mouseover', function() {
            const imageUrl = div.getAttribute('data-image');
            imageDisplay.style.backgroundImage = `url(${imageUrl})`;
        });

        div.addEventListener('mouseout', function() {
            imageDisplay.style.backgroundImage = '';
        });
    });
});
