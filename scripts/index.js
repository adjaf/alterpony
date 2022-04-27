function updateThermo(params) {
    updateThermoProgress();
}


function updateThermoProgress() {
    const text = document.querySelector('.progress-label');
    const progress = document.querySelector('.progress');
    let val = 80.93;
    const initTime = new Date().setHours(11, 00);
    const now = new Date();
    const difference = ((now - initTime) / 60000 ) / 5;
    const add = difference * 0.104;
    if (difference > 0) {
        val += add;
    }
    const newPercenteage = `${val.toFixed(2)}%`;

    progress.style.height = newPercenteage;
    text.textContent = newPercenteage;
}

window.onload = updateThermo;
