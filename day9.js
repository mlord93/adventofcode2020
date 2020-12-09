/**
 * 
 * Advent of Code 2020
 * Day 9: Encoding Error
 * https://adventofcode.com/2020/day/9
 * 
 * Solution for input: 
 * Part 1: 31161678
 * Part 2: 5453868
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(9).map((x) => Number(x));

function part1() {
    let current = 25;
    while (current < input.length) {
        if (!containsSumPair(input.slice(current - 25, current), input[current])) break;
        current++;
    }
    return input[current];
}

function containsSumPair(list, target) {
    for (let x = 0; x < list.length; x++) {
        for (let y = 0; y < list.length; y++) {
            if (x !== y && list[x] + list[y] == target) return true;
        }
    }
    return false;
}

function part2() {
    const target = part1();
    let headIndex = 0;
    while (headIndex < input.length) {
        let sum = 0;
        let tailIndex = headIndex + 1;
        while (sum < target && tailIndex < input.length) {
            sum = input.slice(headIndex, tailIndex).reduce((a, c) => a + c);
            tailIndex++;
        }
        if (sum == target) return Math.min(...input.slice(headIndex, tailIndex)) + Math.max(...input.slice(headIndex, tailIndex));
        headIndex++;
    }
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}