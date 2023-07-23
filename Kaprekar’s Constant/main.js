const form = document.querySelector('form');
const result = document.getElementById('result');

function submitHandler(e) {
    e.preventDefault();
    const num = this.num.value.trim();
    if(num.length > 4 || num.length < 4) {
        result.innerText = 'Please adjust your values';
        return;
    }

    result.innerHTML = `<strong>4634</strong> will take <strong>4</strong> steps`;
    
}

form.addEventListener('submit', submitHandler);