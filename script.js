let inputString = "";
let history = [];
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            let result = eval(inputString);
            input.value = result;
            addToHistory(inputString, result);
            inputString = result;
        }
        else if (e.target.innerHTML == 'AC') {
            inputString = "";
            input.value = inputString;
        }
        else if (e.target.innerHTML == 'DEL') {
            inputString = inputString.substring(0, inputString.length - 1);
            input.value = inputString;
        }
        else if (e.target.innerHTML == 'Hist.') {
            showHistory();
        }
        else {
            inputString = inputString + e.target.innerHTML;
            input.value = inputString;
        }
    });
});

function addToHistory(inputExpression, result) {
    history.push({ input: inputExpression, result: result });
}

function showHistory() {
    let historyText = 'Calculation History:\n';
    history.forEach((entry, index) => {
        historyText += `${entry.input} -> ${entry.result}\n`;
    });
    alert(historyText);
}
