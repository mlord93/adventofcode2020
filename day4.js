/**
 * 
 * Advent of Code 2020
 * Day 4: Passport Processing
 * https://adventofcode.com/2020/day/
 * 
 * Solution for input: 
 * Part 1: 190
 * Part 2: 121
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(4);

const list = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']


function part1() {
    return input.reduce((a, c) => {
        return (list.reduce((n, m) => {
            return c.toString().includes(m) ? n + 1 : n
        }, 0) == 7) ? a + 1 : a;
    }, 0);
}

function part2() {
    return input.reduce((a, c) => {
        return (c.replace(/\s/g, ' ').split(' ').reduce((n, m) => {
            const key = m.split(':')[0];
            const value = m.split(':')[1];
            let valid = false;

            if (key == 'byr' && value.length == 4 && Number(value) >= 1920 && Number(value) <= 2002) valid = true;
            if (key == 'iyr' && value.length == 4 && Number(value) >= 2010 && Number(value) <= 2020) valid = true;
            if (key == 'eyr' && value.length == 4 && Number(value) >= 2020 && Number(value) <= 2030) valid = true;
            if (key == 'hgt' && value.substring(value.length - 2) == 'cm' && Number(value.substring(0, value.length - 2)) >= 150 && Number(value.substring(0, value.length - 2)) <= 193) valid = true;
            if (key == 'hgt' && value.substring(value.length - 2) == 'in' && Number(value.substring(0, value.length - 2)) >= 59 && Number(value.substring(0, value.length - 2)) <= 76) valid = true;
            if (key == 'hcl' && RegExp('#([0-9]|[a-f]){6}').test(value)) valid = true;
            if (key == 'ecl' && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)) valid = true;
            if (key == 'pid' && value.length == 9) valid = true;

            return (valid ? n + 1 : n)
        }, 0) == 7) ? a + 1 : a;
    }, 0);
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}