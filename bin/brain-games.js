#!/usr/bin/env node

import { greet, askName, greetPlayer } from '../src/index.js';

greet();
const name = askName();
greetPlayer(name);
