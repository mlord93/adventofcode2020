/**
 * 
 * Advent of Code 2020
 * Day 5: Binary Boarding
 * https://adventofcode.com/2020/day/
 * 
 * Solution for input: 
 * Part 1: 904
 * Part 2: 669
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(5);

function part1() {
   return Math.max(...input.map((code) => getSeatID(code)));
}

function part2() {
    const manifest = input.map((x) => getSeatID(x));
    let sum = 0;
    for (let x = Math.min(...manifest); x <= Math.max(...manifest); x++) {
        sum += x;
    }
    return sum - manifest.reduce((a,c) => a + c, 0);
}

function getSeatID(code) {
    const directions = code.split('');
    let [ minRow, maxRow, minCol, maxCol ] = [0, 128, 0, 8 ];

    for(let x = 0; x<directions.length; x++){
        if(directions[x] == 'F') {
            maxRow = (maxRow + minRow) / 2;
        } else if (directions[x] == 'B') {
            minRow = (minRow + maxRow) / 2;
        } else if (directions[x] == 'L') {
            maxCol = (maxCol + minCol) / 2;
        } else if (directions[x] == 'R') {
            minCol = (maxCol + minCol) / 2;
        }
    }
    return (minRow * 8) + minCol;
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}