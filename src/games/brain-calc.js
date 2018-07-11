import { cons } from 'hexlet-pairs';
import getRandom from '../utils/random';
import length from '../utils/length';

const generateExpressionAndAnswer = () => {
  const a = getRandom(0, 100);
  const b = getRandom(0, 20);
  const mathExpression1 = `${a} + ${b}`;
  const mathExpression2 = `${a} - ${b}`;
  const mathExpression3 = `${a} * ${b}`;
  const numMathExpreission = getRandom(1, 3);
  const getRandomExpression = (randomIndex) => {
    switch (randomIndex) {
      case 1:
        return mathExpression1;
      case 2:
        return mathExpression2;
      default:
        return mathExpression3;
    }
  };
  const calculateExpression = (str) => {
    let i = 0;
    while (i < length(str)) {
      switch (str[i]) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        default:
          i += 1;
      }
    }
    return 'error';
  };

  const expression = getRandomExpression(numMathExpreission);
  const trueAnswer = String(calculateExpression(expression));
  return cons(expression, trueAnswer);
};

export default generateExpressionAndAnswer;
