#!/usr/bin/env node

import {
  greet,
  askName,
  greetPlayer,
  playCalcGame,
} from '../src/index.js';

greet();
const name = askName();
greetPlayer(name);
playCalcGame(name);
