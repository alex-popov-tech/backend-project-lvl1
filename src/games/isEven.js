import createGameWith from './main.js';

export default () => createGameWith({
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  roundData: () => {
    const question = Math.round(Math.random() * 100);
    const isEven = question % 2 === 0;
    return [`Question: ${question} `, isEven ? 'yes' : 'no'];
  },
});
