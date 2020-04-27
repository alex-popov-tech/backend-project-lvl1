import createGameWith from './main.js';

const randomPositiveInteger = (to = 100) => Math.round(Math.random() * to);
const randomItemOf = (arr) => arr[randomPositiveInteger() % arr.length];
const calculate = (firstOperand, secondOperand, operator) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Cannot calculate expression with operator "${operator}"`);
  }
};

const description = 'What is the result of the expression?';

export default () => createGameWith({
  description,
  generateRoundData: () => {
    const [firstOperand, secondOperand] = [randomPositiveInteger(), randomPositiveInteger()];
    const operator = randomItemOf(['-', '+', '*']);
    return [`${firstOperand} ${operator} ${secondOperand}`, String(calculate(firstOperand, secondOperand, operator))];
  },
});
