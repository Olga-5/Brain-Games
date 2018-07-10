import { cons } from 'hexlet-pairs';
import getRandom from '../random';


const even = num => (num % 2 === 0 ? 'yes' : 'no');

const generationPair = () => {
  const question = getRandom(0, 100);
  const trueAnswer = even(question);
  return cons(question, trueAnswer);
};

export default generationPair;
