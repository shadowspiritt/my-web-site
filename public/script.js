document.addEventListener("DOMContentLoaded", function () {
    function animateText(selector) {
        let text = document.querySelector(selector);
        let splitText = text.innerText.split(""); 
        text.innerHTML = ""; 

        splitText.forEach((char, i) => {
            let span = document.createElement("span");
            span.innerText = char === " " ? "\u00A0" : char; // Boşlukları koru
            span.style.display = "inline-block"; 
            span.style.opacity = 0;
            span.style.animation = `fadeInGlow 0.5s ease-out forwards ${i * 0.2}s`; // Harf harf geçiş
            text.appendChild(span);
        });
    }

    animateText(".animated-text");

});

window.addEventListener("load", function() {
    document.body.classList.add("loaded");
});




