#!/usr/bin/env node

import {
  greet,
  askName,
  greetPlayer,
  playIsEvenGame,
} from '../src/index.js';

greet();
const name = askName();
greetPlayer(name);
playIsEvenGame(name);
