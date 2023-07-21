// Get elements
const form = document.querySelector('form');
const result = document.getElementById('result');


// Functions

function startCountdownHandler(e) {
    e.preventDefault();
    document.querySelector('button').remove();

    let hrs = +form.hours.value;
    let mins = +form.mins.value;
    let sec = +form.sec.value;

    const countdown = setInterval(() => {
        if (sec === 0) {
            if(mins === 0) {
                if(hrs === 0) {
                    result.innerHTML = "<p>Time's up (❁´◡`❁)</p>";
                    return clearInterval(countdown);
                }
                else {
                    hrs--;
                    mins = 60;
                }
            }
            mins--;
            sec = 60;
        }
        else {
            sec--;
        }
        result.innerHTML = `<span>${hrs}:${mins}:${sec}</span>`;
    }, 1000);
}


// Attach event handlers

form.addEventListener('submit', startCountdownHandler);