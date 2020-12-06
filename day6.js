/**
 * 
 * Advent of Code 2020
 * Day 6:
 * https://adventofcode.com/2020/day/
 * 
 * Solution for input: 
 * Part 1: 
 * Part 2: 
 * 
 */

import { getInput, formatAnswer } from './utils.js';
import _ from 'lodash';

const input = getInput(6);

function part1() {
    return input.reduce((a, c) => {
        return a + _.uniq([...c.split('\n').join('')]).length;
    }, 0);
}

function part2() {
    return input.reduce((a, c) => {
        return a + _.intersection(...c.split('\n').map((x) => x.split(''))).length
    }, 0);
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}