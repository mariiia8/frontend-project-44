#!/usr/bin/env node
import gameBody from '../src/gameBody.js';

import brainGcd from '../games/gcd.js';

gameBody('Find the greatest common divisor of given numbers.', brainGcd);
