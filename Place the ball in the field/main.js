const parent = document.querySelector('div');
const ball = document.getElementById('ball');

const ballTop = `${parent.offsetHeight / 2}px`;
const ballLeft = `${parent.offsetWidth / 2}px`;

ball.style.top = ballTop;
ball.style.left = ballLeft;

ball.style.transform = 'translate(-50%, -50%)';