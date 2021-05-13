const calculatorDisplay = document.querySelector('.calculator-display');
// Initialize variables that will be useful
let firstOperand = '';
let secondOperand = ''; 
let arithmeticOperator = ''; 
// let canAddDecimal = true;
let currentResult = 0; // Should always remain a number

// Conditions that can initialize 1st operand:
// * arithmetic operator must not exist 
// * secondOperand must not exist 
// * currentResult can be reassigned to firstOperand

// Conditions that can initialize arithmetic operator(s):
// * firstOperand must exist or current result must exist

// Conditions that can initialize 2nd operand:
// * firstOperand must exist
// * arithmetic operator must exist


// Conditions solver can be invoked
// * firstOperand, arithmetic operator, secondOperand exists

/* Numbers Generator */
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', (e) => {
        if (!arithmeticOperator) {
            firstOperand += e.target.textContent;
            calculatorDisplay.textContent = firstOperand;
            console.log('firstOperand: ', firstOperand);
        }
        if (firstOperand && arithmeticOperator) {
            secondOperand += e.target.textContent;
            calculatorDisplay.textContent = secondOperand;
            console.log('secondOperand: ', secondOperand);
        }
    });
});

const addDecimalToOperand = (operand) => {
    const operandArray = operand.split('');
    if (operandArray.indexOf('.') === -1) {
        operandArray.push('.');
    }
    return operandArray.join('');
};

/* Decimal Button */
// can add decimal only once for firstOperand and secondOperand 
const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
    if (!arithmeticOperator) {
        firstOperand = addDecimalToOperand(firstOperand);
        calculatorDisplay.textContent = firstOperand;
        // firstOperand += e.target.textContent;
        // calculatorDisplay.textContent += e.target.textContent;
        // canAddDecimal = false;
    }
    else if (firstOperand && arithmeticOperator) {
        secondOperand = addDecimalToOperand(secondOperand);
        calculatorDisplay.textContent = secondOperand;
        // secondOperand += e.target.textContent;
        // calculatorDisplay.textContent += e.target.textContent;
        // canAddDecimal = false;
    }
    // && canAddDecimal
});

/* Arithmetic Operator */
const arithmeticOperatorButtons = document.querySelectorAll('.arithmetic-operator')
arithmeticOperatorButtons.forEach(arithmeticOperatorButton => {
    arithmeticOperatorButton.addEventListener('click', (e) => {
        if (firstOperand) {
            arithmeticOperator = e.target.textContent;
            // canAddDecimal = true;
            console.log('arithmeticOperator: ', arithmeticOperator);
        } 
        // if firstOperand doesn't exist and arithmetic operator is invoked
        else if (!firstOperand) {
            firstOperand = currentResult;
            arithmeticOperator = e.target.textContent;
            // canAddDecimal = true; 
            console.log('arithmeticOperator: ', arithmeticOperator);
        }
    });
});

/* Equation Solver */
const equationSolver = document.querySelector('.equation-solver');
equationSolver.addEventListener('click', () => {
    firstOperand = parseFloat(firstOperand);
    if (firstOperand && secondOperand) {
        secondOperand = parseFloat(secondOperand);
        switch (arithmeticOperator) {
            case '+':
                currentResult = firstOperand + secondOperand;
                console.log(currentResult);
                break;
            case '-':
                currentResult = firstOperand - secondOperand;
                break;
            case '×':
                currentResult = firstOperand * secondOperand;
                break;
            case '÷':
                currentResult = firstOperand / secondOperand;
                break;
        } 
        // Continuous Functionality
        currentResult = parseFloat(currentResult.toFixed(3));
        console.log('CurrentResult: ', currentResult);
        calculatorDisplay.textContent = currentResult;
        firstOperand = secondOperand = arithmeticOperator = '';
        // canAddDecimal = true; 
    } 
    // // currentResult, arithmeticOperation, firstOperand
    // // second operand does not exist
    // else if (firstOperand && !secondOperand) {
    //     switch (arithmeticOperator) {
    //         case '+':
    //             currentResult += firstOperand;
    //             break;
    //         case '-':
    //             currentResult -= firstOperand;
    //             break;
    //         case '×':
    //             currentResult *= firstOperand;
    //             break;
    //         case '÷':
    //             currentResult /= firstOperand;
    //             break;
    //     } 
    //     // Continuous Functionality
    //     currentResult = parseFloat(currentResult.toFixed(3));
    //     console.log('CurrentResult: ', currentResult);
    //     calculatorDisplay.textContent = currentResult;
    //     firstOperand = secondOperand = arithmeticOperator = '';
    //     canAddDecimal = true; 
    // }
});

/* Clear All Button */
const clearDisplayButton = document.querySelector('.clear-display');
clearDisplayButton.addEventListener('click', () => {
    // Resets all values 
    calculatorDisplay.textContent = 0;
    firstOperand = secondOperand = arithmeticOperator = '';
    currentResult = 0;
    // canAddDecimal = true;
});


// check if number has at least one decimal
// if so, decimals are not allowed
// otherwise decimals are allowed

