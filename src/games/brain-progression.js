import { cons, car, cdr } from 'hexlet-pairs';
import getRandom from '../utils/random';

const generateProgression = (startItem) => {
  let nextStep = startItem;
  let generatedProgression = '';
  let missingItem = 0;
  const positionInProgression = getRandom(1, 9);
  const startPosition = 1;
  const finalPosition = 10;
  const stepInProgression = 2;
  for (let positionCount = startPosition; positionCount < finalPosition; positionCount += 1) {
    if (positionCount === positionInProgression) {
      missingItem = nextStep;
      generatedProgression += '.. ';
      nextStep += stepInProgression;
    }
    generatedProgression += `${String(nextStep)} `;
    nextStep += stepInProgression;
  }
  return cons(generatedProgression, missingItem);
};

export default () => {
  const startItem = getRandom(0, 10);
  const progression = generateProgression(startItem);
  const getGeneratedProgression = progressionAndItem => car(progressionAndItem);
  const getMissingItem = progressionAndItem => cdr(progressionAndItem);

  const expression = getGeneratedProgression(progression);
  const trueAnswer = String(getMissingItem(progression));
  return cons(expression, trueAnswer);
};
