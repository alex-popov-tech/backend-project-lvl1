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
  return firstOperand / secondOperand;
};

export default () => createGameWith({
  rules: 'What is the result of the expression?',
  roundData: () => {
    const [firstOperand, secondOperand] = [randomPositiveInteger(), randomPositiveInteger()];
    const operator = randomItemOf(['-', '+', '*']);
    return [`Question: ${firstOperand} ${operator} ${secondOperand} `, String(calculate(firstOperand, secondOperand, operator))];
  },
  roundError: (playerName, correctAnswer, playerAnswer) => `"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again ${playerName}!`,
});