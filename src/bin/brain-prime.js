#!/usr/bin/env node
import generateExpressionAndAnswer from '../games/brain-prime';
import runGame from '..';

const ruleOfGame = 'Is this number prime?\n';
runGame(ruleOfGame, generateExpressionAndAnswer);
