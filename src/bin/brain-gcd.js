#!/usr/bin/env node
import generateExpressionAndAnswer from '../games/brain-gcd';
import runGame from '..';

const ruleOfGame = 'Find the greatest common divisor of given numbers.\n';
runGame(ruleOfGame, generateExpressionAndAnswer);
