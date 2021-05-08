const calculatorDisplay = document.querySelector('.calculatorDisplay');

// resetting the calculator display to zero
const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', () => {
    calculatorDisplay.textContent = 0;
});

let arithmeticOperator = null;
let canResetCalculatorDisplay = 'NO'; 
let firstNumber = 0;

const number2Button = document.querySelector('.number2Button');
number2Button.addEventListener('click', () => {
    // if the current value of calculatorDisplay is zero 
    if ((parseInt(calculatorDisplay.textContent) === 0) || (canResetCalculatorDisplay === 'YES')) {
        calculatorDisplay.textContent = 2;
        canResetCalculatorDisplay = 'NO'; 
    }
    else {
        calculatorDisplay.textContent += 2;
    }
});

// addition operator
const additionButton = document.querySelector('.additionButton');
additionButton.addEventListener('click', () => {
    firstNumber = parseInt(calculatorDisplay.textContent);
    canResetCalculatorDisplay = 'YES'; 
    arithmeticOperator = '+';
});

// solve button
const solveButton = document.querySelector('.solveButton');
solveButton.addEventListener('click', () => {
    switch (arithmeticOperator) {
        case '+':
            calculatorDisplay.textContent = firstNumber + parseInt(calculatorDisplay.textContent);
            canResetCalculatorDisplay = 'YES';
            break;
    }
});


// set isDivEmpty to true, then false once solved,
// clear should reset it back to true

