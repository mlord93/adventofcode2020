import fs from 'fs';

const INPUT_FILE_MAP = {
    1:  'puzzleInputs/day1.txt',
    2:  'puzzleInputs/day2.txt'
}

const getInput = function(day) {
    try {
        return fs.readFileSync(INPUT_FILE_MAP[day], 'utf8').split('\n');
    } catch (e) {
        throw e;
    }
}

const formatAnswer = function(part1, part2) {
    console.log(`Part 1: ${part1}\nPart 2: ${part2}`);
}

export {
    getInput,
    formatAnswer
}