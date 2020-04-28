import generateGameWith from '../engine/index.js';
import randomPositiveInteger from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

export default () => generateGameWith({
  description,
  generateRoundData: () => {
    const question = randomPositiveInteger();
    const answer = isEven(question) ? 'yes' : 'no';
    return [question, answer];
  },
});
