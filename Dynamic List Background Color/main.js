// Get elements
const forms = document.querySelectorAll('form');

// Functions
function isColor(strColor) {
    if(strColor === '') return false;

    const option = new Option().style;
    option.color = strColor;
    return option.color === strColor;
}

function bgChangeHandler(e) {
    e.preventDefault();
    const color = this.color.value.trim();
    const input = this.color;
    input.style.backgroundColor = isColor(color) ? color : 'pink'; 
}


// Attach event handlers

forms.forEach(form => form.addEventListener('submit', bgChangeHandler));
