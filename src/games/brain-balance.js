import { cons } from 'hexlet-pairs';
import getRandom from '../utils/random';

const compareNumbers = (a, b) => a - b;

const balance = (numberAsString) => {
  const sortArray = numberAsString.split('').sort(compareNumbers).map(Number);
  const lengthArray = sortArray.length;
  const firstItemOfArray = sortArray[0];
  const lastItemOfArray = sortArray[lengthArray - 1];
  const permissibleValue = 1;
  if (lastItemOfArray - firstItemOfArray <= permissibleValue) {
    return sortArray.join('');
  }
  const changeArrayItems = (currentValue, indexCurrentItem, array) => {
    const indexFirstItemOfArray = 0;
    if (indexCurrentItem === indexFirstItemOfArray) {
      return currentValue + 1;
    }
    const indexLastItemsOfArray = array.length - 1;
    if (indexCurrentItem === indexLastItemsOfArray) {
      return currentValue - 1;
    }
    return currentValue;
  };
  const changedArray = sortArray.map(changeArrayItems);
  return balance(changedArray.join(''));
};

export default () => {
  const numberAsString = String(getRandom(100, 2000));
  const expression = numberAsString;
  const trueAnswer = balance(numberAsString);
  return cons(expression, trueAnswer);
};
