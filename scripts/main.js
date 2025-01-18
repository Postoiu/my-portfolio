const hamburgerBtn = document.querySelector('.hamburger-container');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

const toggle = () => {
    hamburgerBtn.classList.toggle('open');
    overlay.classList.toggle('active');
    body.classList.toggle('locked');
};

const delegateClickEvent = (e) => {
    if(e.target.tagName !== 'A') return;

    toggle();
}

hamburgerBtn.addEventListener('click', toggle);
overlay.addEventListener('click', delegateClickEvent);
