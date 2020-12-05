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

const keyList = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

function countValidPassports(validator) {
    return input.reduce((a, c) => {
        const passport = c.replace(/\s/g, ' ').split(' ').reduce((a2, c2) => {
            a2[c2.split(':')[0]] = c2.split(':')[1];
            return a2;
        }, {});
        return validator(passport) ? a + 1 : a;
    }, 0);
}

function part1() {
    return countValidPassports((passport) => keyList.every((key) => key in passport));
}

function part2() {
    return countValidPassports((passport) => {
        const inclusiveBetween = function (value, low, high) { return (value >= low && value <= high) };

        if (!('byr' in passport && inclusiveBetween(Number(passport['byr']), 1920, 2002))) return false;
        if (!('iyr' in passport && inclusiveBetween(Number(passport['iyr']), 2010, 2020))) return false;
        if (!('eyr' in passport && inclusiveBetween(Number(passport['eyr']), 2020, 2030))) return false;
        if ('hgt' in passport) {
            const match = passport['hgt'].match(/(\d+)(cm|in)/);
            if (!(match && match.length == 3 && ((match[2] == 'in' && inclusiveBetween(match[1], 59, 76) || match[2] == 'cm' && inclusiveBetween(match[1], 150, 193))))) return false;
        } else return false;
        if (!('hcl' in passport && RegExp('#([0-9]|[a-f]){6}').test(passport['hcl']))) return false;
        if (!('ecl' in passport && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(passport['ecl']))) return false;
        if (!('pid' in passport && passport['pid'].length == 9)) return false;

        return true;
    });
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}