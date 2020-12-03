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
const input = getInput(3);

function part1(right=3, down=1, i=input) {
    let count = 0;
    let position = 0;
    for (let row=0;row<i.length;row+=down) {
        if (i[row][(position % i[row].length)] == '#') count++;
        position+=right;
    }
    return count;
}

function part2() {
    return part1(1,1) * part1(3,1) * part1(5,1) * part1(7,1) * part1(1,2);
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}
