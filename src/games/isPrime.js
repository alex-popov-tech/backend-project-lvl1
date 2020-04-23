import createGameWith from './main.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => createGameWith({
  description,
  roundData: () => {
    const numberToCheck = Math.round(Math.random() * 100);
    return [`Question: ${numberToCheck} `, isPrime(numberToCheck) ? 'yes' : 'no'];
  },
});
