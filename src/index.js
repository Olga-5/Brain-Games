import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (ruleOfGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(ruleOfGame);
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!\n`);
  return (generationPair) => {
    const iter = (counter) => {
      if (counter === 3) {
        return console.log(`Congratulations, ${userName}`);
      }
      const pairQuestAndAnswer = generationPair();
      console.log(`Question: ${car(pairQuestAndAnswer)}`);
      const userAnswer = readlineSync.question('Your answer: ');
      const trueAnswer = cdr(pairQuestAndAnswer);
      if (userAnswer === trueAnswer) {
        console.log('Correct!');
        return iter(counter + 1);
      }
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}`);
      return console.log(`Let's try again, ${userName}!`);
    };
    iter(0);
  };
};
