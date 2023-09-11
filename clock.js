const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".seconds");
const toggler = document.querySelector(".toggle__clock-type");
const clock = document.querySelector(".clock");
const digiClock = document.querySelector(".digi__clock");
const digiHour = document.querySelector(".digi__hour");
const digiMinute = document.querySelector(".digi__minute");
const digiSecs = document.querySelector(".digi__seconds");

let timeFormat = '24-hour';

function getDateCalc() {
    let time = new Date();
    let secondRate = time.getSeconds() / 60;
    let minuteRate = (time.getMinutes() + secondRate) / 60;
    let HourRate = (time.getHours() + minuteRate) / 12;
    setRotatingVal(second, secondRate);
    setRotatingVal(minute, minuteRate);
    setRotatingVal(hour, HourRate);
}

function setRotatingVal(ElemVal, rate) {
    ElemVal.style.setProperty("--rotating", rate * 360);
}

function getDigi() {
    const time = new Date();
    if (timeFormat == "24-hour") {
        digiHour.textContent = (time.getHours() < 10 ? "0" : "") + time.getHours()
    } else {
        const finalTime = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
        digiHour.textContent = (finalTime < 10 ? "0" : "") + finalTime
    }

    digiMinute.textContent =
        (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();

    digiSecs.textContent =
        (time.getSeconds() < 10 ? "0" : "") + time.getSeconds();
}


toggler.addEventListener("click", (e) => {
    if (timeFormat == "24-hour") {
        timeFormat = '12-hour'
    }else{
        timeFormat = '24-hour'
    }
})

getDateCalc();
getDigi();
setInterval(getDigi, 0);
setInterval(getDateCalc, 0);
