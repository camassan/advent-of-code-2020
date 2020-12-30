import { expenses } from './expenseReport.mjs'

// Part 2
// find 3 numbers in expense report that add up to 2020
// result = multiply those 3 numbers
function findThreeMatchingEntries(expArray) {
  let result;

  for (let i = 0; i < expArray.length; i++) {
    const firstNumber = expArray[i];
    const sumRestNumbers = 2020 - firstNumber;

    for (let j = i; j < expArray.length; j++) {
      const secondNumber = expArray[j];
      const thirdNumber = sumRestNumbers - secondNumber;
      const matchingIdx = expArray.indexOf(thirdNumber, j + 1);
      if (matchingIdx !== -1) {
        result = firstNumber * secondNumber * thirdNumber;
        break;
      }
    }
  }

  return result;
}

console.log(findThreeMatchingEntries(expenses));