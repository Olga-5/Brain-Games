import { cons, car, cdr } from 'hexlet-pairs';
import getRandom from '../utils/random';

export default () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 20);
  const numMathExpreission = getRandom(1, 3);
  const getRandomExpression = (numRandomExpression) => {
    switch (numRandomExpression) {
      case 1:
        return cons(`${a} + ${b}`, a + b);
      case 2:
        return cons(`${a} - ${b}`, a - b);
      default:
        return cons(`${a} * ${b}`, a * b);
    }
  };
  const getExpression = randomExpression => car(randomExpression);
  const getCalcExpression = randomExpression => cdr(randomExpression);

  const expression = getExpression(getRandomExpression(numMathExpreission));
  const trueAnswer = String(getCalcExpression(getRandomExpression(numMathExpreission)));
  return cons(expression, trueAnswer);
};
