import { cons, car, cdr } from 'hexlet-pairs';
import getRandom from '../utils/random';

const generateProgression = (startItem, positionMissingItem, stepInProgression) => {
  const iter = (positionsCount, resultOfGenetation, missingItem, nextItem) => {
    const positionLastItem = 10;
    if (positionsCount > positionLastItem) {
      return cons(resultOfGenetation, missingItem);
    } if (positionsCount === positionMissingItem) {
      return iter(positionsCount + 1, `${resultOfGenetation}.. `, nextItem, nextItem + stepInProgression);
    }
    return iter(positionsCount + 1, `${resultOfGenetation}${String(nextItem)} `, missingItem, nextItem + stepInProgression);
  };
  const positionFirstItem = 1;
  const initialResult = '';
  const initialValueMissingItem = 0;
  return iter(positionFirstItem, initialResult, initialValueMissingItem, startItem);
};

export default () => {
  const startItem = getRandom(0, 10);
  const positionMissingItem = getRandom(1, 9);
  const stepInProgression = 2;
  const resultOfGenetation = generateProgression(startItem, positionMissingItem, stepInProgression);
  const getGeneratedProgression = progressionAndMissingItem => car(progressionAndMissingItem);
  const getMissingItem = progressionAndMissingItem => cdr(progressionAndMissingItem);

  const expression = getGeneratedProgression(resultOfGenetation);
  const trueAnswer = String(getMissingItem(resultOfGenetation));
  return cons(expression, trueAnswer);
};
