/**
 * 
 * Advent of Code 2020
 * Day 2: Password Philosophy
 * https://adventofcode.com/2020/day/2
 * 
 * Solution for input: 
 * Part 1: 465
 * Part 2: 294
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(2);

function part1(passwords = input) {
    let validCount = 0;
    for (let line of passwords) {
        const { positions, policyChar, password } = formatInputLine(line);
        const numOccurances = (password.match(new RegExp(policyChar, 'g')) || []).length;
        if (numOccurances >= positions[0] && numOccurances <= positions[1]) validCount++;
    }
    return validCount;
}

function part2(passwords = input) {
    let validCount = 0;
    for (let line of passwords) {
        const { positions, policyChar, password } = formatInputLine(line);
        if ((password[positions[0] - 1] == policyChar) != (password[positions[1] - 1] == policyChar)) validCount++;
    }
    return validCount;
}

function formatInputLine(line) {
    const splitLine = line.split(' ');
    const positions = splitLine[0].split('-');
    const policyChar = splitLine[1][0];
    const password = splitLine[2];
    return { positions, policyChar, password };
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}