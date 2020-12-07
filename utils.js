import fs from 'fs';

const getInput = function(day) {
    try {
        const filePathString = `puzzleInputs/day${day}.txt`
        if ([4,6].includes(day)) return fs.readFileSync(filePathString, 'utf8').split('\n\n');
        return fs.readFileSync(filePathString, 'utf8').split('\n');
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