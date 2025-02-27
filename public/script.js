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


const tracks = [
    { src: "musics/goodforyou.mp3", title: "Good For You", cover: "images/goodforyou.jpg" },
    { src: "musics/gangunit.mp3", title: "Gang Unit", cover: "images/gangunit.jpg" },
    { src: "musics/ımgod.mp3", title: "I'm God", cover: "images/imgod.jpeg" }
];

let currentTrackIndex = 0;
let audio = new Audio(tracks[currentTrackIndex].src);
audio.volume = 0.5; // Varsayılan ses seviyesi

// HTML Elemanlarını Seç
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const songTitle = document.getElementById("song-title");
const songCover = document.getElementById("song-cover");

// Şarkıyı Güncelle
function updateTrack() {
    audio.src = tracks[currentTrackIndex].src;
    songTitle.textContent = tracks[currentTrackIndex].title;
    songCover.src = tracks[currentTrackIndex].cover;

    if (!audio.paused) {
        audio.play();
    }
}

// Oynatma Fonksiyonu
function playMusic() {
    audio.play();
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
}

// Durdurma Fonksiyonu
function pauseMusic() {
    audio.pause();
    pauseBtn.classList.add("hidden");
    playBtn.classList.remove("hidden");
}

// Şarkıyı Değiştirme Fonksiyonu
function changeTrack(step) {
    currentTrackIndex += step;

    if (currentTrackIndex < 0) {
        currentTrackIndex = tracks.length - 1;
    } else if (currentTrackIndex >= tracks.length) {
        currentTrackIndex = 0;
    }

    updateTrack();
    playMusic();
}

// Event Listener'lar
playBtn.addEventListener("click", playMusic);
pauseBtn.addEventListener("click", pauseMusic);
prevBtn.addEventListener("click", () => changeTrack(-1));
nextBtn.addEventListener("click", () => changeTrack(1));




