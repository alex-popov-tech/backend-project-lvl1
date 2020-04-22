import readline from 'readline-sync';
import { playIsEvenGame, playCalcGame, playGcdGame } from './games.js';

const greet = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => readline.question('May I have your name? ');

const greetPlayer = (name) => {
  console.log(`Hello, ${name}!`);
};


export {
  greet,
  askName,
  greetPlayer,
  playIsEvenGame,
  playCalcGame,
  playGcdGame,
};
