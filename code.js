const calculatorDisplay = document.querySelector('.calculatorDisplay');

let firstOperand = '';
let secondOperand = '';
let selectedOperator = '';

// EventListeners

/* numbers generator */
document.querySelectorAll('.numbers')
.forEach(numberButton => {
    numberButton.addEventListener('click', (e) => {
        if (!selectedOperator) {
            firstOperand += e.target.textContent;
            calculatorDisplay.textContent = firstOperand;
            // console.log('firstOperand: ', firstOperand);
        }
        if (firstOperand && selectedOperator) {
            secondOperand += e.target.textContent;
            calculatorDisplay.textContent = secondOperand;
            // console.log('secondOperand: ', secondOperand);
        }
    });
});

/* arithmetic operator identifier */
document.querySelectorAll('.operators')
.forEach(operatorButton => {
    operatorButton.addEventListener('click', (e) => {
        if (firstOperand) {
            selectedOperator = e.target.textContent;
            // console.log('selectedOperator: ', selectedOperator);
        }
    });
});

/* equation solver */
document.querySelector('.equate')
.addEventListener('click', () => {
    switch (selectedOperator) {
        case '+':
            calculatorDisplay.textContent = parseInt(firstOperand) + parseInt(secondOperand);
            // Resetting Values 
            firstOperand = '';
            secondOperand = '';
            selectedOperator = '';
            break;
    }
});

/* clear display */
document.querySelector('.clearDisplay')
.addEventListener('click', () => {
    calculatorDisplay.textContent = 0;
    firstOperand = '';
    secondOperand = '';
    selectedOperator = '';
});















// let canResetCalculatorDisplay = 'NO';
// let calculatorValue = 0;

// /* clear button */
// document.querySelector('.clearButton')
// .addEventListener('click', () => {
//     calculatorDisplay.textContent = 0;
// });


// // /* when + button is clicked */
// document.querySelector('.addButton')
// .addEventListener('click', () => {
//     calculatorValue += parseInt(calculatorDisplay.textContent);
//     calculatorDisplay.textContent = calculatorValue;
//     canResetCalculatorDisplay = 'YES';
// });

// /* number one button */
// document.querySelector('.oneButton')
// .addEventListener('click', () => {
//     if ((parseInt(calculatorDisplay.textContent) === 0) || (canResetCalculatorDisplay === 'YES')) {
//         calculatorDisplay.textContent = 1;
//         canResetCalculatorDisplay = 'NO';
//     } else {
//         calculatorDisplay.textContent += 1;
//     }
// });






























// /* arithmetic operator */
// let arithmeticOperator = null;

// const numberTrackerBeforeOperation = (captureCalculatorDisplayNumber) => {
//     const numberBefore = parseInt(captureCalculatorDisplayNumber.textContent);
//     return numberBefore;
// };

// const numberTrackerAfterOperation = (captureCalculatorDisplayNumber) => {
//     const numberAfter = parseInt(captureCalculatorDisplayNumber.textContent);
//     return numberAfter; 
// };



/* when = button is clicked */
// document.querySelector('.equalButton')
// .addEventListener('click', () => {

// })




/* Calculator Numbers */
// const zeroButton = document.querySelector('.zeroButton');
// const oneButton = document.querySelector('.oneButton');
// const twoButton = document.querySelector('.twoButton');
// const threeButton = document.querySelector('.threeButton');
// const fourButton = document.querySelector('.fourButton');
// const fiveButton = document.querySelector('.fiveButton');
// const sixButton = document.querySelector('.sixButton');
// const sevenButton = document.querySelector('.sevenButton');
// const eightButton = document.querySelector('.eightButton');
// const nineButton = document.querySelector('.nineButton');

// const zeroButton = () => {
//     document.querySelector('.zeroButton')
//     .addEventListener('click', () => {
//         calculatorDisplay.textContent = 0;
//     })
// };