/**
 * 
 * Advent of Code 2020 Day 1
 * https://adventofcode.com/2020/day/1
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const TARGET_NUMBER = 2020;
const input = getInput(1);

function part1(expenses = input, target = TARGET_NUMBER) {
    const workingSet = new Set();
    let product;
    for (let expense of expenses){
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
    for (let expense of expenses){
        const complement = TARGET_NUMBER - expense;
        const result = part1(expenses, complement);
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