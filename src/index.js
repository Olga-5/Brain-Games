import readlineSync from 'readline-sync';
import { car, cdr, toString } from 'hexlet-pairs';

const getExpression = expressionAndAnswer => car(expressionAndAnswer);
const getAnswer = expressionAndAnswer => cdr(expressionAndAnswer);

export default (ruleOfGame, generateExpressionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(ruleOfGame);
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!\n`);
  const iter = (attemptsCount) => {
    const finalCounter = 3;
    if (attemptsCount === finalCounter) {
      return console.log(`Congratulations, ${userName}`);
    }
    const expressionAndAnswer = generateExpressionAndAnswer();
    console.log(toString(expressionAndAnswer));
    console.log(`Question: ${getExpression(expressionAndAnswer)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = getAnswer(expressionAndAnswer);
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      return iter(attemptsCount + 1);
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}`);
    return console.log(`Let's try again, ${userName}!`);
  };
  const startCounter = 0;
  return iter(startCounter);
};
