/**
 * 
 * Advent of Code 2020
 * Day 1: Report Repair
 * https://adventofcode.com/2020/day/1
 * 
 * Solution for input: 
 * Part 1: 921504
 * Part 2: 195700142
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const TARGET_NUMBER = 2020;
const input = getInput(1).map((x) => Number(x));

function part1(expenses = input, target = TARGET_NUMBER) {
    const workingSet = new Set();
    let product;
    for (let expense of expenses) {
        const complement = target - expense;
        if (workingSet.has(complement)) {
            product = expense * complement;
            break;
        }
        workingSet.add(expense);
    }
    return product;
}

function part2(expenses = input) {
    let product;
    for (let [idx, expense] of expenses.entries()) {
        const complement = TARGET_NUMBER - expense;
        const result = part1([...expenses.slice(0, idx), ...expenses.slice(idx + 1)], complement);
        if (result) {
            product = result * expense;
            break;
        }
    }
    return product;
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}