import readline from 'readline-sync';

const DEFAULT_ROUNDS_COUNT = 3;
const say = (text) => console.log(text);
const ask = (text) => readline.question(text);

export default ({
  roundsCount = DEFAULT_ROUNDS_COUNT,
  description,
  generateRoundData,
}) => {
  say('Welcome to the Brain Games!');
  const name = ask('May I have your name? ');
  say(`Hello, ${name}!`);
  say(description);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRoundData();
    const playerAnswer = ask(`Question: ${question} `);
    if (playerAnswer !== correctAnswer) {
      say(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      say(`Let's try again ${name}!`);
      return;
    }
    say('Correct!');
  }
  say(`Congratulations, ${name}!`);
};
