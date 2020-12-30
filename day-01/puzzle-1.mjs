import { expenses } from './expenseReport.mjs'

// Part 1
// find numbers in expense report that add up to 2020
// result = multiply those 2 numbers
function findTwoMatchingEntries(expArray) {
  let result;

  for (let i = 0; i < expArray.length; i++) {
    const currentNr = expArray[i]
    const matchingNr = 2020 - currentNr;
    const matchingIdx = expArray.indexOf(matchingNr, i + 1);

    if (matchingIdx !== -1) {
      result = currentNr * matchingNr;
      break;
    }
  }

  return result;
}

console.log(findTwoMatchingEntries(expenses));