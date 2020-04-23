import createGameWith from './main.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => createGameWith({
  description,
  roundData: () => {
    const question = Math.round(Math.random() * 100);
    const isEven = question % 2 === 0;
    return [`Question: ${question} `, isEven ? 'yes' : 'no'];
  },
});
