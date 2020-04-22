import readline from 'readline-sync';
import createGameWith from './main.js';

export default (playerName) => createGameWith({
  showRules: () => console.log('What is the result of the expression?'),
  playRound: () => {
    const [first, second] = [Math.round(Math.random() * 100), Math.round(Math.random() * 100)];
    const operators = ['-', '+', '*'];
    const operator = operators[first % operators.length];
    const expression = `${first} ${operator} ${second}`;
    // eslint-disable-next-line no-eval
    const correctAnswer = eval(expression);

    console.log(`Question: ${expression}`);
    const answer = readline.question('Your answer: ');

    if (answer === String(correctAnswer)) {
      console.log('Correct!');
      return true;
    }
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
    console.log(`Let's try again, ${playerName}!`);
    return false;
  },
  showCongratulations: () => console.log(`Congratulations, ${playerName}!`),
});
