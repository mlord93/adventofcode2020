/**
 * 
 * Advent of Code 2020
 * Day 3: Toboggan Trajectory
 * https://adventofcode.com/2020/day/3
 * 
 * Solution for input: 
 * Part 1: 159
 * Part 2: 6419669520
 * 
 */

import { getInput, formatAnswer } from './utils.js';
let input = getInput(3);

function part1(right=3, down=1) {
    let treeCount = 0;
    let position = 0;
    for (let row=0;row<input.length;row+=down) {
        if (input[row][(position % input[row].length)] == '#') treeCount++;
        position+=right;
    }
    return treeCount;
}

function part2() {
    return part1(1) * part1(3) * part1(5) * part1(7) * part1(1,2);
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}
