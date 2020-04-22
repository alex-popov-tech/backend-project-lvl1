import readline from 'readline-sync';
import createGameWith from './main.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export default (playerName) => createGameWith({
  showRules: () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".'),
  playRound: () => {
    const numberToCheck = Math.round(Math.random() * 100);

    console.log(`Question: ${numberToCheck}`);
    const answer = readline.question('Your answer: ');

    if (isPrime(numberToCheck) ? (answer === 'yes') : (answer === 'no')) {
      console.log('Correct!');
      return true;
    }
    return false;
  },
  showCongratulations: () => console.log(`Congratulations, ${playerName}!`),
});
