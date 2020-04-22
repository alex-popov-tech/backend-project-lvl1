import readline from 'readline-sync';

export {
  playCalcGame,
  playGcdGame,
  playIsEvenGame,
  playIsPrimeGame,
  playProgressionGame,
} from './games/index.js';
export const greet = () => console.log('Welcome to the Brain Games!');
export const askName = () => readline.question('May I have your name? ');
export const greetPlayer = (name) => console.log(`Hello, ${name}!`);
