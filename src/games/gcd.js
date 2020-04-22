import readline from 'readline-sync';
import createGameWith from './main.js';

const gcdOf = (first, second) => {
  let x = Math.abs(first);
  let y = Math.abs(second);
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
};

export default (playerName) => createGameWith({
  showRules: () => console.log('Find the greatest common divisor of given numbers.'),
  playRound: () => {
    const [first, second] = [Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
    const gcd = gcdOf(first, second);

    console.log(`Question: ${first} ${second}`);
    const answer = readline.question('Your answer: ');

    if (answer === String(gcd)) {
      console.log('Correct!');
      return true;
    }
    return false;
  },
  showCongratulations: () => console.log(`Congratulations, ${playerName}!`),
});
