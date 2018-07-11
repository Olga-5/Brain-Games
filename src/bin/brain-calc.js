#!/usr/bin/env node
import generateExpressionAndAnswer from '../games/brain-calc';
import runGame from '..';

const ruleOfGame = 'What is the result of the expression?\n';
runGame(ruleOfGame, generateExpressionAndAnswer);
