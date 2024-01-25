function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', function () {
        const keyCode = this.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

        audio.currentTime = 0;
        audio.play();
        this.classList.add('playing');
    });
});