import { randomPositiveInteger, generateGameWith } from '../engine/main.js';

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

export default () => generateGameWith({
  description,
  generateRoundData: () => {
    const [firstOperand, secondOperand] = [randomPositiveInteger(), randomPositiveInteger()];
    const operator = randomItemOf(['-', '+', '*']);
    const question = `${firstOperand} ${operator} ${secondOperand}`;
    const answer = String(calculate(firstOperand, secondOperand, operator));
    return [question, answer];
  },
});
