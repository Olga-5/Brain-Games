import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getExpression = ExpressionAndAnswer => car(ExpressionAndAnswer);
const getAnswer = ExpressionAndAnswer => cdr(ExpressionAndAnswer);

export default (ruleOfGame, generateExpressionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(ruleOfGame);
  const userName = readlineSync.question('May I have you name? ');
  console.log(`Hello, ${userName}!\n`);
  const iter = (counter) => {
    const finalCounter = 3;
    if (counter === finalCounter) {
      return console.log(`Congratulations, ${userName}`);
    }
    const ExpressionAndAnswer = generateExpressionAndAnswer();
    console.log(`Question: ${getExpression(ExpressionAndAnswer)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = getAnswer(ExpressionAndAnswer);
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}`);
    return console.log(`Let's try again, ${userName}!`);
  };
  const startCounter = 0;
  return iter(startCounter);
};
