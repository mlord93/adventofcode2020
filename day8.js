/**
 * 
 * Advent of Code 2020
 * Day 8: Handheld Halting
 * https://adventofcode.com/2020/day/8
 * 
 * Solution for input: 
 * Part 1: 2051
 * Part 2: 2304
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const instructions = getInput(8).map((x) => ({ cmd: x.split(' ')[0], val: Number(x.split(' ')[1]) }));

function part1() {
    return runProgram(instructions).accumulator;
}

function part2() {
    for (const [i, instruction] of instructions.entries()) {
        let { val, cmd } = instruction;
        cmd = { 'jmp': 'nop', 'nop': 'jmp' }[cmd] || cmd;
        const { accumulator, end } = runProgram([...instructions.slice(0, i), { cmd, val }, ...instructions.slice(i + 1, instructions.length)]);
        if (end == 'success') return accumulator;
    }
}

function runProgram(instructions) {
    const visited = [];
    let [current, accumulator] = [0, 0];
    while (!visited.includes(current) && current < instructions.length & current >= 0) {
        const { val, cmd } = instructions[current];
        visited.push(current);
        switch (cmd) {
            case 'acc':
                accumulator += val;
                break;
            case 'jmp':
                current += val;
                continue;
            case 'nop':
                break;
        }
        current++;
    }
    return current == instructions.length ? { accumulator, end: 'success' } : { accumulator, end: 'fail' }
}

formatAnswer(part1(), part2());

export {
    part1,
    part2
}