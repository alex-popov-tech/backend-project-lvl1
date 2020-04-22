import readline from 'readline-sync';
import createGameWith from './main.js';

export default (playerName) => createGameWith({
  showRules: () => console.log('What number is missing in the progression?'),
  playRound: () => {
    const DEFAULT_PROGRESSION_LENGTH = 10;
    const seed = Math.round(Math.random() * (DEFAULT_PROGRESSION_LENGTH - 1));
    const progression = new Array(DEFAULT_PROGRESSION_LENGTH)
      .fill(null)
      .map((_, i) => i + 1)
      .map((it) => it * seed);
    const missingElement = progression[seed];
    progression[seed] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const answer = readline.question('Your answer: ');

    if (answer === String(missingElement)) {
      console.log('Correct!');
      return true;
    }
    return false;
  },
  showCongratulations: () => console.log(`Congratulations, ${playerName}!`),
});
