"use strict"
// 1
const btnOne = document.querySelector('#btnOne');
let limit = 0;
btnOne.addEventListener('click', () => {
const interval = setInterval(() => {
    alert('Message');
    limit++;
    if (limit > 5){
        clearInterval(interval);
    }
}, 1000);
});
// 2
const animationBtn = document.querySelector('#animationBtn');
let isAnimating = false; 
let animInterval; 

animationBtn.addEventListener('click', () => {
    const firstEl = document.querySelector('#elOne');
    const secondEl = document.querySelector('#elTwo');
    const thirdEl = document.querySelector('#elThree');

    if (isAnimating) {
        clearInterval(animInterval);
        isAnimating = false;
        return;
    }
    isAnimating = true;
    animInterval = setInterval(() => {
        firstEl.style.height = '400px';
        secondEl.style.borderRadius = '15px';
        thirdEl.style.width = '400px';

        setTimeout(() => {
            firstEl.style.height = '250px';
            secondEl.style.borderRadius = '4px';
            thirdEl.style.width = '250px';
        }, 500);
    }, 1000);
});
// 3
const gameBtn = document.querySelector('#gameBtn');
let clicks = 0;
let points = 0;
gameBtn.addEventListener('click', () => {
const gameEl = document.querySelector('.gameElement');
const clickNum = document.querySelector('#clickNum');
const pointsEl = document.querySelector('#points');
const gameInterval = setInterval(() => {
    gameEl.style.backgroundColor = 'green';
    gameEl.addEventListener('click', (e) => {
        clicks = clicks + 1;
        points = points + 1;
        clickNum.textContent = clicks;
         pointsEl.textContent = points;
    })
    setTimeout(() => {
        gameEl.style.backgroundColor = 'red';
        gameEl.addEventListener('click', (e) => {
            clicks++;
            clickNum.textContent = clicks;
        })
    }, 1000);
    if (points === 10){
        alert('You have achieved all points');
        clearInterval(gameInterval);
    }
}, 2000);
});
// 4
const controlBtn = document.querySelector('#controlBtn');
let controlInterval = null; 

controlBtn.addEventListener('click', () => {
    const controlInput = document.querySelector('#controlInput');
    const intervalValue = parseFloat(controlInput.value);

    if (isNaN(intervalValue) || intervalValue <= 0) {
        alert('Please enter a valid number greater than 0.');
        return;
    }
    if (controlInterval !== null) {
        clearInterval(controlInterval);
    }
    controlInterval = setTimeout(() => {
        alert(`Ok. You selected ${intervalValue} ms`);
    }, intervalValue);
});