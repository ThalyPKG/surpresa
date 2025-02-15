const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {},
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,   
    autoplay: {  
        delay: 3000,
    },
});

const audio = document.getElementById("audiom");
const playPauseBtn = document.getElementById("playPause");
const volumeSlider = document.getElementById("volumeSlider");

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = "&#9208;";
    } else {
        audio.pause();
        playPauseBtn.innerHTML = "&#9654;"; 
    }
});

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
});



const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {   
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))



    