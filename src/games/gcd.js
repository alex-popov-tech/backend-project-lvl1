import createGameWith from './main.js';

const gcd = (first, second) => {
  let x = Math.abs(first);
  let y = Math.abs(second);
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
};

const randomPositiveInteger = (to = 100) => Math.round(Math.random() * to);

const description = 'Find the greatest common divisor of given numbers.';

export default () => createGameWith({
  description,
  generateRoundData: () => {
    const [firstNumber, secondNumber] = [randomPositiveInteger(), randomPositiveInteger()];
    const answer = String(gcd(firstNumber, secondNumber));
    return [`${firstNumber} ${secondNumber}`, answer];
  },
});
