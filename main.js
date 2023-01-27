const currentOperandElement = document.querySelector('[data-current-operand]');
const previousOperandElement = document.querySelector('[data-previous-operand]');
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const calculator = new Calculator(previousOperandElement, currentOperandElement);

class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperand,
      this.currentOperandElement = currentOperand
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }
}

appendNumber(number)
{
  if (number === "." && this.currentOperand.includes("."))
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

clear()
{
  this.previousOperand = "";
  this.currentOperand = "";
  this.operation = undefined;
}

chooseOperation(operation)
{
  if (this.currentOperand === "")
    if(this.previousOperand != "") {
      this.compute()
    }
  this.operation = operation;
  this.previousOperand = this.currentOperand;
  this.currentOperand = "";
}


compute()
{
  let computation
  const prev = parseFloat(this.previousOperand)
  const current = parseFloat(this.currentOperand)
  if (isNaN(prev) || isNaN(current))
    switch (this.operation) {
      case '+':
        computation = prev + current
        break;
      case '-':
        computation = prev - current
        break;
      case '*':
        computation = prev * current
        break;
      case '÷':
        computation = prev / current
        break;


    }
  this.currentOperand = computation;
  this.operation = undefined;
  this.previousOperand = '';
}


updateDisplay()
{
  this.currentOperandElement.innerText =
    this.getDisplayNumber(this.currentOperand)
  if (this.operation != null) {
    this.previousOperandElement.innerText =
      `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
  } else {
    this.previousOperandElement.innerText = ''
  }
}

numberButtons.forEach(button =>{
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})

getDisplayNumber(number)
{
  const stringNumber = number.toString() // for splitting on decimal characters inside it.
  const integerDigits = parseFloat(stringNumber.split('.')[0]) // turning a string to an array.
  const decimalDigits = stringNumber.split('.')[1] // getting second portion out of the array, which is number after decimal place.
  let integerDisplay
  if (isNaN(integerDigits)) {
    integerDisplay = ''
  } else {
    integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 }) // "en" in the localeString means : english.
  }
}

