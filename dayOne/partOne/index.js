"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
fs.readFile('./input.txt', 'utf8', function (err, data) {
    if (err) {
        console.error('There was an error reading the file:', err);
        return;
    }
    var numbers = data.split("\n")
        .map(function (x) {
        return x.split('');
    });
    var digits = numbers.map(function (x) {
        return x.filter(function (y) {
            return !Number.isNaN(parseInt(y));
        });
    });
    var concat = digits.map(function (x) {
        return parseInt("".concat(x[0]).concat(x[x.length - 1]));
    }).reduce(function (acc, curr) {
        return acc + curr;
    }, 0);
    console.log(concat);
});
