import readline from 'readline-sync';

const greet = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => readline.question('May I have your name? ');

const greetPlayer = (name) => {
  console.log(`Hello, ${name}!`);
};

const playIsEvenGame = (playerName) => {
  const GAMES_TO_WIN = 3;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < GAMES_TO_WIN; i += 1) {
    const question = Math.round(Math.random() * 100);
    const isEven = question % 2 === 0;

    console.log(`Question: ${question}`);
    const answer = readline.question('Your answer: ');

    if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
      console.log('Correct!');
    } else {
      console.log('oops!');
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};

export {
  greet,
  askName,
  greetPlayer,
  playIsEvenGame,
};
