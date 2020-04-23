import createGameWith from './main.js';

const gcdOf = (first, second) => {
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
  roundData: () => {
    const [firstNumber, secondNumber] = [randomPositiveInteger(), randomPositiveInteger()];
    const gcd = gcdOf(firstNumber, secondNumber);
    return [`${firstNumber} ${secondNumber}`, String(gcd)];
  },
});
