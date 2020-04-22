#!/usr/bin/env node

import {
  greet,
  askName,
  greetPlayer,
  playProgressionGame,
} from '../src/index.js';

greet();
const name = askName();
greetPlayer(name);
playProgressionGame(name);
