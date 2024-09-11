let expression = '';

function appendDigit(digit) {
    expression += digit;
    updateDisplay();
}

function appendOperator(operator) {
    expression += operator;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function deleteDigit() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        expression = eval(expression).toString();
        updateDisplay();
    } catch (error) {
        expression = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    document.getElementById('result').textContent = expression || '0';
}
