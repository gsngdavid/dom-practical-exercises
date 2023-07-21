// Get elements

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const error = document.getElementById('error');


// Functions

function inputChangeHandler(e) {
    if(+num1.value > +num2.value) {
        error.textContent = 'First number is larger';
    }
    else if(+num1.value < +num2.value) {
        error.textContent = 'Second number is larger';
    }
    else {
        error.textContent = '';
    }
}

// Attach event handlers

num1.addEventListener('input', inputChangeHandler);
num2.addEventListener('input', inputChangeHandler);