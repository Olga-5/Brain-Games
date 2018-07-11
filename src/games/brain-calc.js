import { cons, car, cdr } from 'hexlet-pairs';
import getRandom from '../utils/random';

export default () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 20);
  const numMathExpression = getRandom(1, 3);
  const getRandomExpression = (numRandomExpression) => {
    switch (numRandomExpression) {
      case 1:
        return cons(`${a} + ${b}`, a + b);
      case 2:
        return cons(`${a} - ${b}`, a - b);
      case 3:
        return cons(`${a} * ${b}`, a * b);
      default:
        return 'expression not found';
    }
  };
  const randomExpression = getRandomExpression(numMathExpression);
  const getExpression = expressionForShowAndCalced => car(expressionForShowAndCalced);
  const getCalcExpression = expressionForShowAndCalced => cdr(expressionForShowAndCalced);

  const expression = getExpression(randomExpression);
  const trueAnswer = String(getCalcExpression(randomExpression));
  return cons(expression, trueAnswer);
};
