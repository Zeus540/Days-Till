

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
var values = document.getElementById('search');
var search = document.getElementById('searchDate');
var popup = document.createElement("div");

var tes = '';


values.onclick = function() {
if (search.value == '') {
        popup.className = 'popup'
        popup.id = 'popup'
        popup.innerHTML= ('<div><p>PLEASE ENTER <br>A<br> VALID DATE</p></div>')
        document.body.append(popup)

} else {

 tes = search.value
 console.log(tes)

 countdown()

 setInterval(countdown,1000);

}
}


popup.onclick = function() {
   var popupState = document.getElementById('popup')
   popupState.remove()

   console.log("error")

}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

function countdown() {
    const newYearsDate = new Date(tes);
    const currentDate = new Date();

    const totalSeconds = new Date(newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 3600 ) % 60;
    const seconds = Math.floor(totalSeconds ) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
    
    console.log(newYearsDate)
}



 