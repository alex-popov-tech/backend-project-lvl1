import readline from 'readline-sync';

const play = ({
  roundsCount = 3,
  showRules,
  playRound,
  showCongratulations,
}) => {
  showRules();
  for (let i = 0; i < roundsCount; i += 1) {
    const isWin = playRound();
    if (!isWin) {
      return;
    }
  }
  showCongratulations();
};

const playCalcGame = (playerName) => play({
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

const playIsEvenGame = (playerName) => play({
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

const gcdOf = (first, second) => {
  let x = Math.abs(first);
  let y = Math.abs(second);
  while (y) {
    [x, y] = [y, x % y];
  }
  return x;
};

const playGcdGame = (playerName) => play({
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

export { playIsEvenGame, playCalcGame, playGcdGame };
