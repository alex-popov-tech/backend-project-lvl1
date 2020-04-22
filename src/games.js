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

const playProgressionGame = (playerName) => play({
  showRules: () => console.log('What number is missing in the progression?'),
  playRound: () => {
    const DEFAULT_PROGRESSION_LENGTH = 10;
    const seed = Math.round(Math.random() * 10);
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

const playIsPrimeGame = (playerName) => play({
  showRules: () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".'),
  playRound: () => {
    const numberToCheck = Math.round(Math.random() * 100);
    const isPrime = (num) => {
      for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    };

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

export {
  playIsEvenGame,
  playCalcGame,
  playGcdGame,
  playProgressionGame,
  playIsPrimeGame,
};