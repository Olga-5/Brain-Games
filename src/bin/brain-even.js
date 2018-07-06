#!/usr/bin/env node

import readlineSync from 'readline-sync';
import even from '../even';
import getRandomInt from '../getRandomInt';
import greeting from '..';


console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"\n');
const userName = greeting();


const game = (num, counter) => {
  if (counter > 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');
  const evenNumber = even(num);
  if ((evenNumber === true && answer === 'yes') || (evenNumber === false && answer === 'no')) {
    console.log('Correct!');
    return game(getRandomInt(0, 100), counter + 1);
  }
  console.log(`${answer === 'yes' ? 'yes' : 'no'} is wrong answer ;(.Correct answer was ${answer === 'yes' ? 'no' : 'yes'}.`);
  return console.log(`Let's try again, ${userName}!`);
};
game(getRandomInt(0, 100), 1);
