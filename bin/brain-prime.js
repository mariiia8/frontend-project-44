#!/usr/bin/env node
import gameBody from '../src/gameBody.js';
import brainPrime from '../games/prime.js';

gameBody('Answer "yes" if given number is prime. Otherwise answer "no".', brainPrime);
