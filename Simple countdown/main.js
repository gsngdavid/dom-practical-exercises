let counter = 10;

// Get elements
const timer = document.getElementById('timer');
const actions = document.getElementById('actions');

// Functions

const timerChange = setInterval (() => {
    if(counter === 1) {
        actions.remove();
        timer.textContent = 0;
        return clearInterval(timerChange);
    }
    timer.textContent = --counter;
} , 1000);