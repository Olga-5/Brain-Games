import { cons } from 'hexlet-pairs';
import getRandom from '../utils/random';

const prime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let div = 2; div < num; div += 1) {
    if (num % div === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateExpressionAndAnswer = () => {
  const expression = getRandom(0, 50);
  const trueAnswer = prime(expression);
  return cons(expression, trueAnswer);
};

export default generateExpressionAndAnswer;
