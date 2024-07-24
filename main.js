let DaysItem = document.querySelector("#days");
let HoursItem = document.querySelector("#hours");
let MinItem = document.querySelector("#min");
let SecItem = document.querySelector("#sec");

let countDown = () =>{
    let futureDate = new Date ("1 jan 2025");
    let currentDate = new Date ();
    let myDate = futureDate - currentDate;
    // console.log(myDate);

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);

    let hours = Math.floor(myDate / 1000 / 60 / 60 ) % 24;

    let min = Math.floor(myDate / 1000 / 60 ) % 24;

    let sec = Math.floor(myDate /1000) % 60;

    DaysItem.innerHTML = days;
    HoursItem.innerHTML = hours;
    MinItem.innerHTML = min;
    SecItem.innerHTML = sec;
}

countDown()

setInterval(countDown, 1000)

