import createGameWith from './main.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => createGameWith({
  description,
  generateRoundData: () => {
    const question = Math.round(Math.random() * 100);
    const isEven = question % 2 === 0;
    return [question, isEven ? 'yes' : 'no'];
  },
});
