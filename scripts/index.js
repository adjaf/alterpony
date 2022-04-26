const dataOrigin = "https://pastebin.com/raw/qVy6ZWxA";

async function updateThermo(params) {
    getDataFromAPI();
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
    let xhr = new XMLHttpRequest();
    xhr.open("GET", dataOrigin);
    xhr.send();
    xhr.onload = function () {
        if (xhr.status == 200) {
            console.log(xhr.responseText);
        }
    }
}   

window.onload = updateThermo;