const hourEI = document.getElementById("hour")

const minutesEI = document.getElementById("minutes")

const secondsEI = document.getElementById("seconds")

const ampmEI = document.getElementById("ampm")

function updateclock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if(h > 12){
        h = h - 12
        ampm = "PM"
    }
    hourEI.innerText = h;
    minutesEI.innerText = m;
    secondsEI.innerText = s;
    ampmEI, (innerText = ampm);
    
}
updateclock();


