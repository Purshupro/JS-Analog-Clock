const secondHand = document.querySelector('.second_hand');
const minuteHand = document.querySelector('.min_hand');
const hourHand = document.querySelector('.hour_hand');

function setDate() {
    
        const date = new Date();
        const seconds = date.getSeconds();
        const oneSecond = (seconds / 60) * 360 + 90;
        if (oneSecond >= 444 && oneSecond <= 450 ) {
            secondHand.style.transition = "none";
        } else {
            secondHand.style.transition = "all cubic-bezier(0.26, 3.12, 1, 1) 0.05s";
            secondHand.style.transform = `rotate(${oneSecond}deg)`;
        }

        const minutes = date.getMinutes();
        const oneMinute = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
        minuteHand.style.transform = `rotate(${oneMinute}deg)`;

        const hours = date.getHours();
        const oneHour = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
        hourHand.style.transform = `rotate(${oneHour}deg)`;
    



}

function setMinute() {

}

setInterval(() => {
    setDate();
}, 1000);