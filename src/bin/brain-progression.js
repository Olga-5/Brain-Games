#!/usr/bin/env node
import generateExpressionAndAnswer from '../games/brain-progression';
import runGame from '..';

const ruleOfGame = 'What number is missing in this progression?\n';
runGame(ruleOfGame, generateExpressionAndAnswer);
