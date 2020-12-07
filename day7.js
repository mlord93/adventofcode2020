/**
 * 
 * Advent of Code 2020
 * Day 7: Handy Haversacks
 * https://adventofcode.com/2020/day/7
 * 
 * Solution for input: 
 * Part 1: 265
 * Part 2: 14177
 * 
 */

import { getInput, formatAnswer } from './utils.js';

const input = getInput(7);
let visited = [];

function part1() {
    let innerMap = {};
    input.forEach((line) => {
        const match = line.match(/(?<outer>.+) bags contain (?<inner>.+)+/);
        if (match.groups.inner !== 'no other bags.') {
            const outer = match.groups.outer;
            match.groups.inner.split(', ').forEach((x) => {
                const inner = x.match(/\d (?<color>.+) bags?/).groups.color;
                innerMap[inner] = innerMap[inner] ? [...innerMap[inner], outer] : [outer];
            });
        }
    });

    getOuterBags(innerMap, 'shiny gold');
    return visited.length-1;
}

function part2() {
    let outerMap = {};
    input.forEach((line) => {
        const match = line.match(/(?<outer>.+) bags contain (?<inner>.+)+/);
        const outer = match.groups.outer;
        if (match.groups.inner !== 'no other bags.') {
            outerMap[outer] = match.groups.inner.split(', ').reduce((a,c) => {
                const { num, color } = c.match(/(?<num>\d) (?<color>.+) bags?/).groups;
                a.push({num : Number(num), color});
                return a;
            }, []);
        } else {
            outerMap[outer] = [];
        }
    });

    return getInnerBags(outerMap, {num: 1, color: 'shiny gold'}) -1 ;
}

function getOuterBags(innerMap, current) {
    visited.push(current);
    for (let x of (innerMap[current] || [])) {
        if (!visited.includes(x)) {
            getOuterBags(innerMap, x);
        }
    }
}

function getInnerBags(outerMap, current) {
    if (outerMap[current.color].length == 0) return current.num;
    return current.num + current.num * outerMap[current.color].reduce((a,c) => {
        a += getInnerBags(outerMap, c);
        return a;
    }, 0);
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}