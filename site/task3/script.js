const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');

function makeGreen() {
    trafficLightGreen.style.background = ('green');
    trafficLightGreen.removeEventListener('click', makeGreen);
    trafficLightYellow.removeEventListener('click', makeGreen);
    trafficLightRed.removeEventListener('click', makeGreen);
    trafficLightGreen.addEventListener('click', clearGreen);
    trafficLightYellow.addEventListener('click', clearGreen);
    trafficLightRed.addEventListener('click', clearGreen);
    trafficLightGreen.addEventListener('click', makeYellow);
    trafficLightYellow.addEventListener('click', makeYellow);
    trafficLightRed.addEventListener('click', makeYellow);
}

function clearGreen() {
    trafficLightGreen.style.background = ('black');
}

function makeYellow() {
    trafficLightYellow.style.background = ('yellow');
    trafficLightGreen.removeEventListener('click', makeYellow);
    trafficLightYellow.removeEventListener('click', makeYellow);
    trafficLightRed.removeEventListener('click', makeYellow);
    trafficLightGreen.addEventListener('click', clearYellow);
    trafficLightYellow.addEventListener('click', clearYellow);
    trafficLightRed.addEventListener('click', clearYellow);
    trafficLightGreen.addEventListener('click', makeRed);
    trafficLightYellow.addEventListener('click', makeRed);
    trafficLightRed.addEventListener('click', makeRed);
}

function clearYellow() {
    trafficLightYellow.style.background = ('black');
}

function makeRed() {
    trafficLightRed.style.background = ('red');
    trafficLightGreen.removeEventListener('click', makeRed);
    trafficLightYellow.removeEventListener('click', makeRed);
    trafficLightRed.removeEventListener('click', makeRed);
    trafficLightGreen.addEventListener('click', clearRed);
    trafficLightYellow.addEventListener('click', clearRed);
    trafficLightRed.addEventListener('click', clearRed);
    trafficLightGreen.addEventListener('click', makeGreen);
    trafficLightYellow.addEventListener('click', makeGreen);
    trafficLightRed.addEventListener('click', makeGreen);
}

function clearRed() {
    trafficLightRed.style.background = ('black');
}

trafficLightGreen.addEventListener('click', makeGreen);
trafficLightYellow.addEventListener('click', makeGreen);
trafficLightRed.addEventListener('click', makeGreen);

