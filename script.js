const possibleKeys = ["A", "B", "C", "D", "E", "F", "G"];
let cooldownSec = 3
let changeKeyFunc = "stop"

const keyElement = document.getElementById("key");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const cooldownInputField = document.getElementById("cooldown");

function keyPressed(key) {
    console.log(key)
}

function checkStatus() {
    if (changeKeyFunc == "stop") {
        if (cooldownInputField.value < 1) {cooldownInputField.value = 1};
        cooldownSec = cooldownInputField.value;
        cooldownInputField.disabled = true;

        setKey()
        changeKeyFunc = self.setInterval(setKey, cooldownSec * 1000);
        startButton.style.display = "none";
        stopButton.style.display = "block";
    }
}

function stop() {
    window.clearInterval(changeKeyFunc); 
    changeKeyFunc = 'stop';
    cooldownInputField.disabled = false;
    stopButton.style.display = "none";
    startButton.style.display = "block";
}

function setKey() {
    keyElement.innerHTML = getRandomKey();
}

function getRandomKey() {
    let randomNum = Math.floor(Math.random() * 10);
    while (randomNum > 6 || possibleKeys[randomNum] == keyElement.innerHTML) {
        randomNum = Math.floor(Math.random() * 10);
    }
    return possibleKeys[randomNum];
}