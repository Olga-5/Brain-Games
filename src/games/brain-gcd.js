import { cons } from 'hexlet-pairs';
import getRandom from '../utils/random';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, (a % b));
};

const generationExpressionAndAnswer = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const expression = `${num1} ${num2}`;
  const trueAnswer = String(gcd(num1, num2));
  return cons(expression, trueAnswer);
};

export default generationExpressionAndAnswer;
