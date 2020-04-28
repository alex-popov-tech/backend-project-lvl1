import generateGameWith from '../engine/index.js';
import randomPositiveInteger from '../utils.js';

const gcd = (first, second) => {
  let x = Math.abs(first);
  let y = Math.abs(second);
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => generateGameWith({
  description,
  generateRoundData: () => {
    const [firstNumber, secondNumber] = [randomPositiveInteger(), randomPositiveInteger()];
    const question = `${firstNumber} ${secondNumber}`;
    const answer = String(gcd(firstNumber, secondNumber));
    return [question, answer];
  },
});
