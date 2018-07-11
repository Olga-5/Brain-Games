import { cons } from 'hexlet-pairs';
import getRandom from '../utils/random';


const even = num => (num % 2 === 0 ? 'yes' : 'no');

export default () => {
  const expression = getRandom(0, 100);
  const trueAnswer = even(expression);
  return cons(expression, trueAnswer);
};
