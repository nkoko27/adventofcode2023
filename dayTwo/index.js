"use strict";
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
    var d = data.split("Game").map(function (x) {
        return x.trim();
    });
    d.shift();
    var arrGame = [];
    d.forEach(function (x) {
        arrGame.push(x.split(", ")[0].split(": ")[0]);
        var games = x.split(", ");
        games.forEach(function (y) {
            console.log(y.split("; "));
        });
    });
});
var strToObj = function (str) {
};
