import readline from 'readline-sync';
import createGameWith from './main.js';

export default (playerName) => createGameWith({
  showRules: () => console.log('Answer "yes" if the number is even, otherwise answer "no".'),
  playRound: () => {
    const question = Math.round(Math.random() * 100);
    const isEven = question % 2 === 0;

    console.log(`Question: ${question}`);
    const answer = readline.question('Your answer: ');

    if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
      console.log('Correct!');
      return true;
    }
    return false;
  },
  showCongratulations: () => console.log(`Congratulations, ${playerName}!`),
});
