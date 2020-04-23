import createGameWith from './main.js';

const randomPositiveInteger = (to = 100) => Math.round(Math.random() * to);
const randomItemOf = (arr) => arr[randomPositiveInteger() % arr.length];
const calculate = (firstOperand, secondOperand, operator) => {
  if (operator === '+') {
    return firstOperand + secondOperand;
  }
  if (operator === '-') {
    return firstOperand - secondOperand;
  }
  if (operator === '*') {
    return firstOperand * secondOperand;
  }
  throw new Error(`Cannot calculate expression with operator "${operator}"`);
};

const description = 'What is the result of the expression?';

export default () => createGameWith({
  description,
  roundData: () => {
    const [firstOperand, secondOperand] = [randomPositiveInteger(), randomPositiveInteger()];
    const operator = randomItemOf(['-', '+', '*']);
    return [`Question: ${firstOperand} ${operator} ${secondOperand} `, String(calculate(firstOperand, secondOperand, operator))];
  },
  roundError: (playerName, correctAnswer, playerAnswer) => `"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again ${playerName}!`,
});
