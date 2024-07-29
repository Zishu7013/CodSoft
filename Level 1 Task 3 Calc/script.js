let display = document.getElementById('display');
let buttons = document.querySelectorAll('button[type="button"]');

let calculator = {
  displayValue: '',
  firstOperand: '',
  operator: '',
  secondOperand: '',
  result: '',

  init: function() {
    buttons.forEach(button => {
      button.addEventListener('click', this.handleButtonPress);
    });
  },

  handleButtonPress: function(event) {
    let buttonValue = event.target.value;

    if (buttonValue === 'C') {
      calculator.clear();
    } else if (buttonValue === '=') {
      calculator.calculate();
    } else if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
      calculator.setOperator(buttonValue);
    } else {
      calculator.appendDigit(buttonValue);
    }

    display.value = calculator.displayValue;
  },

  clear: function() {
    this.displayValue = '';
    this.firstOperand = '';
    this.operator = '';
    this.secondOperand = '';
    this.result = '';
  },

  setOperator: function(operator) {
    this.operator = operator;
    this.firstOperand = this.displayValue;
    this.displayValue = '';
  },

  appendDigit: function(digit) {
    this.displayValue += digit;
  },

  calculate: function() {
    this.secondOperand = this.displayValue;
    let result = eval(`${this.firstOperand} ${this.operator} ${this.secondOperand}`);
    this.displayValue = result;
    this.firstOperand = '';
    this.operator = '';
    this.secondOperand = '';
  }
};

calculator.init();