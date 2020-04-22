#!/usr/bin/env node

import {
  greet,
  askName,
  greetPlayer,
  playIsPrimeGame,
} from '../src/index.js';

greet();
const name = askName();
greetPlayer(name);
playIsPrimeGame(name);
