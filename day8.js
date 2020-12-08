/**
 * 
 * Advent of Code 2020
 * Day 8:
 * https://adventofcode.com/2020/day/
 * 
 * Solution for input: 
 * Part 1: 2051
 * Part 2: 
 * 
 */

import { getInput, formatAnswer } from './utils.js';
const input = getInput(8);

function part1() {
    return runProgram(input.map((x) => ({ cmd: x.split(' ')[0], val: Number(x.split(' ')[1]) }))).accumulator;
}

function runProgram(instructions){
    let visited = [];
    let current = 0;
    let accumulator = 0;
    while (!visited.includes(current) && current < instructions.length && current >= 0  ) {
        visited.push(current);
        switch(instructions[current].cmd) {
            case 'acc':
                accumulator+=instructions[current].val;
                current += 1;
                break;
            case 'jmp':
                current += instructions[current].val
                break;
            case 'nop':
                current += 1;
                break;
        }
    }

    if (visited.includes(current)) {
        return { accumulator, reason: 'loop' };
    } else if (current < 0 || current > instructions.length) {
        return { accumulator, reason:'out of bounds' };
    } else if (current == instructions.length) {
        return { accumulator, reason: 'terminate' };
    } else {
        return { accumulator, reason: 'FATAL ERROR' };
    }
}

function part2() {
    const instructions = input.map((x) => ({ cmd: x.split(' ')[0], val: Number(x.split(' ')[1]) }));
    for (const [i, instruction] of instructions.entries()) {
        let newCommand =  { val:instruction.val };
        if (instruction.cmd == 'jmp') newCommand.cmd = 'nop';
        if (instruction.cmd == 'nop') newCommand.cmd = 'jmp';
        const result = runProgram([...instructions.slice(0, i), newCommand, ...instructions.slice(i+1, instructions.length)]);
        if (result.reason == 'terminate') return result.accumulator;
    }
    return "FATAL ERROR";
}

//console.log(part1());
formatAnswer(part1(), part2());

export {
    part1,
    part2
}