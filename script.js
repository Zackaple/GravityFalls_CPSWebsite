// HOMEPAGE SLIDER CONTROLLER
const track = document.querySelector('.slider_track');
const nextBtn = document.querySelector('.next_btn');
const prevBtn = document.querySelector('.prev_btn');
const progressFill = document.querySelector('.progress_fill');


if (track && nextBtn && prevBtn && progressFill) {
    let currentPosition = 0;

    nextBtn.addEventListener('click', () => {
        if (currentPosition === 0) {
            currentPosition = -100; 
            track.style.transform = `translateX(${currentPosition}%)`;
            progressFill.style.left = '50%'; 
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentPosition === -100) {
            currentPosition = 0; 
            track.style.transform = `translateX(${currentPosition}%)`;
            progressFill.style.left = '0%'; 
        }
    });
}
