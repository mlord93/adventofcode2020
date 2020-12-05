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

function validatePassportCustom(passport) {

}

// function validatePassportFieldsExist(passport) {
//     return (list.reduce((n, m) => {
//         return c.toString().includes(m) ? n + 1 : n
//     }, 0) == 7) ? a + 1 : a;
// }

function countValidPassports(validator) {
    return input.reduce((a, c) => {
        const passport = c.replace(/\s/g, ' ').split(' ').reduce((a2,c2) => {
            a2[c2.split(':')[0]] = c2.split(':')[1];
            return a2;
        }, {});
        return validator(passport) ? a + 1 : a;
    }, 0);
}

function part1Rewrite() {
    return countValidPassports((passport) => list.every((key) => key in passport));
}

function part2Rewrite() {
    return countValidPassports((passport) => {

            const inclusiveBetween = function(value, low, high) { return (value >= low && value <=high) };
            
            if (!('byr' in passport && inclusiveBetween(Number(passport['byr']), 1920, 2002))) return false;
            if (!('iyr' in passport && inclusiveBetween(Number(passport['iyr']), 2010, 2020))) return false;
            if (!('eyr' in passport && inclusiveBetween(Number(passport['eyr']), 2020, 2030))) return false;
            // if ('hgt' in passport) {
            //     console.log(passport['hgt']);
            //     const [full, value, measurement] = passport['hgt'].match(/(\d+)(cm|in)/g);
            //     console.log(`v: ${value} m: ${measurement}`);
            // }
            if (!('ecl' in passport && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(passport['ecl']))) return false;
            if (!('pid' in passport && passport['pid'].length == 9 )) return false;

            return true;

    });
}

// console.log(part2Rewrite());

console.log('hello world');
//formatAnswer(part1(), part2());

export {
    part1,
    part2
}