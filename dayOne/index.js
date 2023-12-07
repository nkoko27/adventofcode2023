"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var file = process.argv[2];
var numbersObj = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
};
// part 1
// fs.readFile(file, 'utf8', (err: Error | null, data: string) => {
//     if (err) {
//         console.error('There was an error reading the file:', err);
//         return;
//     }
//     const numbers = data.split("\n")
//         .map((x: string): string[] => {
//             return x.split('')
//         })
//     const digits = numbers.map((x: string[]): string[] => {
//         return x.filter((y: string) => {
//             return !Number.isNaN(parseInt(y))
//         })
//     })
//     const concat = digits.map((x: string[]): number => {
//         return parseInt(`${x[0]}${x[x.length - 1]}`)
//     }).reduce((acc: number, curr: number) => {
//         return acc + curr
//     }, 0)
//     console.log(`part one: ${concat}`)
// })
// part 2
var regex = /(one|two|three|four|five|six|seven|eight|nine|\d+)/g;
fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    var regArr = data.split("\n").map(function (x) {
        return x.match(regex);
    });
    var wordToNum = regArr.map(function (x) {
        return x === null || x === void 0 ? void 0 : x.map(function (y) {
            if (!Number.isNaN(parseInt(y))) {
                return y.length > 1 ? y.split('') : y;
            }
            else {
                return y.replace(y, numbersObj[y]);
            }
        }).flat(1);
    });
    var digit = wordToNum.map(function (x) {
        return x ? parseInt("".concat(x[0]).concat(x[x.length - 1])) : undefined;
    });
    console.log(digit);
    var sum = digit.reduce(function (acc, curr) {
        return acc !== undefined && curr !== undefined ? acc + curr : undefined;
    }, 0);
    console.log(sum);
});
