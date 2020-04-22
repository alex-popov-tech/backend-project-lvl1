#!/usr/bin/env node

import {
  greet,
  askName,
  greetPlayer,
  playGcdGame,
} from '../src/index.js';

greet();
const name = askName();
greetPlayer(name);
playGcdGame(name);
