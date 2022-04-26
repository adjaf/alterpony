function updateThermo(params) {
    updateThermoProgress();
}


function updateThermoProgress() {
    const text = document.querySelector('.progress-label');
    const progress = document.querySelector('.progress');
    let val = 40.00;
    const initTime = new Date().setHours(10, 00);
    const now = new Date();
    const difference = ((now - initTime) / 60000 ) / 15;
    const add = difference * 0.02 * 100;
    val += add;
    const newPercenteage = `${val.toFixed(2)}%`;

    progress.style.height = newPercenteage;
    text.textContent = newPercenteage;
}

async function getDataFromAPI() {
    const call = new XMLHttpRequest();
}   

window.onload = updateThermo;