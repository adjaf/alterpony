function updateThermo(params) {
    setInterval(updateThermoProgress, 3000);
}


function updateThermoProgress() {
    const text = document.querySelector('.progress-label');
    const progress = document.querySelector('.progress');
    let val = parseInt(text.textContent.split('%')[0]);
    val += 1;
    const newPercenteage = `${val}%`;
    progress.style.height = newPercenteage
    text.textContent = newPercenteage;
}

async function getDataFromAPI() {
    const call = new XMLHttpRequest();
}   

window.onload = updateThermo;