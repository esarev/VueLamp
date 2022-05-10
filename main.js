const btn = document.querySelector('.btn'),
    light = document.querySelector('.light');

function toggleBtn() {
    btn.classList.toggle('active');
    light.classList.toggle('on');
}

// btn.addEventListener('click', toggleBtn());