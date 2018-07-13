import { cons } from 'hexlet-pairs';
import getRandom from '../utils/random';

const compareNumbers = (a, b) => a - b;

const balance = (numberAsString) => {
  const sortArray = numberAsString.split('').sort(compareNumbers).map(Number);
  const lengthArray = sortArray.length;
  let firstItemOfArray = sortArray[0];
  let lastItemOfArray = sortArray[lengthArray - 1];
  if (lastItemOfArray - firstItemOfArray <= 1) {
    return sortArray.join('');
  }
  while (lastItemOfArray - firstItemOfArray > 1) {
    sortArray.pop();
    sortArray.shift();
    lastItemOfArray -= 1;
    firstItemOfArray += 1;
    sortArray.push(lastItemOfArray);
    sortArray.unshift(firstItemOfArray);
  }
  if (lengthArray === 4) {
    let secondItemOfArray = sortArray[1];
    let thirdItemOfArray = sortArray[2];
    while (secondItemOfArray - thirdItemOfArray > 1) {
      secondItemOfArray -= 1;
      sortArray.splice(2, 1, secondItemOfArray);
      thirdItemOfArray += 1;
      sortArray.splice(1, 1, thirdItemOfArray);
    }
    return balance(sortArray.join(''));
  }
  if (lengthArray === 3) {
    return balance(sortArray.join(''));
  }
  return sortArray;
};

export default () => {
  const numberAsString = String(getRandom(100, 2000));
  const expression = numberAsString;
  const trueAnswer = balance(numberAsString);
  return cons(expression, trueAnswer);
};
