#!/usr/bin/env node
import generateExpressionAndAnswer from '../games/brain-balance';
import runGame from '..';

const ruleOfGame = 'Balance the given number.\n';
runGame(ruleOfGame, generateExpressionAndAnswer);
