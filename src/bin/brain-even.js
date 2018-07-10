#!/usr/bin/env node
import generateExpressionAndAnswer from '../games/brain-even';
import runGame from '..';

const ruleOfGame = 'Answer "yes" if number even otherwise answer "no".\n';
runGame(ruleOfGame, generateExpressionAndAnswer);
