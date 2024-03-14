const display = document.getElementById('display');

function handleButtonClick(val) {    
    display.value += val;
}

function allClear() {
    display.value = "";
}

function clearS() {
    let str = display.value;
    let len = str.length;
    display.value = str.slice(0, len - 1);
}

function solution() {
    let equation = display.value;
    let answer = eval(equation);
    display.value = answer;
}