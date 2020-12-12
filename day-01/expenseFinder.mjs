import { expenses } from './expenseReport.mjs'

// Part 1
// find numbers in expense report that add up to 2020
// result = multiply those 2 numbers
function findMatchingEntries(expenses) {
  let result;

  for (let i = 0; i < expenses.length; i++) {
    const currentNr = expenses[i]
    const matchingNr = 2020 - currentNr;
    const matchingIdx = expenses.indexOf(matchingNr, i + 1);

    if (matchingIdx !== -1) {
      result = currentNr * matchingNr;
      break;
    }
  }

  return result;
}

console.log(findMatchingEntries(expenses));