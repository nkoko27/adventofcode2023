"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var file = process.argv[2];
var checkObj = {
    green: 13,
    red: 12,
    blue: 14
};
fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
        console.log(err);
    }
    var redArr = [];
    var greenArr = [];
    var blueArr = [];
    var games = data.split("Game").map(function (str) {
        return str.trim();
    });
    games.shift();
    games.map(function (game) {
        redArr.push(colorCounter(game, "red"));
        greenArr.push(colorCounter(game, "green"));
        blueArr.push(colorCounter(game, "blue"));
    });
    var combinedResults = __spreadArray(__spreadArray(__spreadArray([], redArr, true), greenArr, true), blueArr, true).sort(function (a, b) { return a - b; })
        .filter(function (x) { return x !== 0; });
    sumPossibleGames(combinedResults);
});
var colorCounter = function (str, color) {
    var count = 0;
    var val;
    var index = 0;
    while (count !== -1) {
        index = str.indexOf(color, count + 1);
        if (index !== -1) {
            val = parseInt(str[index - 3] + str[index - 2]);
            if (val > checkObj[color]) {
                return 0;
            }
            count = index;
        }
        else {
            break;
        }
    }
    return parseInt(str.split(":")[0]);
};
var sumPossibleGames = function (arr) {
    var val = 0;
    var max = arr[arr.length - 1];
    for (var i = 1; i <= max; i++) {
        var counter = 0;
        while (i === arr[0]) {
            counter++;
            arr.shift();
        }
        if (counter === 3) {
            val += i;
        }
    }
    console.log(val);
};
