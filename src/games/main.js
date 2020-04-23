import readline from 'readline-sync';

const DEFAULT_ROUNDS_COUNT = 3;
const say = (text) => console.log(text);
const ask = (text) => readline.question(text);

export default ({
  roundsCount = DEFAULT_ROUNDS_COUNT,
  description = '',
  roundData = () => { },
  roundError = () => { },
} = {}) => {
  say('Welcome to the Brain Games!');
  const name = ask('May I have your name? ');
  say(`Hello, ${name}!`);
  say(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = roundData();
    const playerAnswer = ask(`Question: ${question} `);
    if (playerAnswer !== correctAnswer) {
      say(roundError(name, correctAnswer, playerAnswer));
      return;
    }
    say('Correct!');
    if (i === roundsCount - 1) {
      say(`Congratulations, ${name}!`);
    }
  }
};
