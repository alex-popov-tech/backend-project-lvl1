import { randomPositiveInteger, generateGameWith } from '../engine/main.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => generateGameWith({
  description,
  generateRoundData: () => {
    const question = randomPositiveInteger();
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  },
});
