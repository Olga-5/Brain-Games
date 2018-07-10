#!/usr/bin/env node
import generationPair from '../games/brain-even';
import runGame from '..';

runGame('Answer "yes" if number even otherwise answer "no".\n')(generationPair);
