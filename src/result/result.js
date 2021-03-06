import calculateResult from './calculate/calculate-result.js';

let answers = null;

const json = window.localStorage.getItem('answers');
if(json) {
    answers = JSON.parse(json);
}
else {
    window.location = '/';
}

const houseNode = document.getElementById('house');
houseNode.textContent = calculateResult(answers);
const house = houseNode.textContent;

const htmlNode = document.querySelector('html');
htmlNode.style.backgroundImage = 'url(../assets/' + house + '.gif)';