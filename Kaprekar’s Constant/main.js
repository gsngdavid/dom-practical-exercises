const form = document.querySelector('form');
const result = document.getElementById('result');

function kaprekarConstant(num, steps = 0) {
    if(num == 6174) return steps;
    
    const large = num.split('').sort((a, b) => b - a).join('');
    const small = num.split('').sort((a, b) => a - b).join('');
    
    return kaprekarConstant((large - small).toString(), ++steps);
}

function submitHandler(e) {
    e.preventDefault();
    const num = this.num.value.trim();
    if(num.length > 4 || num.length < 4) {
        result.innerText = 'Please adjust your values';
        return;
    }
    const steps = (kaprekarConstant(num));
    result.innerHTML = `<strong>${num}</strong> will take <strong>${steps}</strong> steps`;
}

form.addEventListener('submit', submitHandler);