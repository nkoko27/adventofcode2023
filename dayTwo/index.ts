import * as fs from 'fs';

const file = process.argv[2]

const checkObj: { [key: string]: number } = {
    green: 13,
    red: 12,
    blue: 14
}

fs.readFile(file, 'utf8', (err: Error | null, data: string) => {
    if (err) {
        console.log(err)
    }
    const redArr: number[] = [];
    const greenArr: number[] = []
    const blueArr: number[] = []
    const games = data.split("Game").map((str) => {
        return str.trim();
    })
    games.shift()
    games.map((game) => {
        redArr.push(colorCounter(game, "red"));
        greenArr.push(colorCounter(game, "green"))
        blueArr.push(colorCounter(game, "blue"))
    })
    const combinedResults = [...redArr, ...greenArr, ...blueArr]
        .sort((a, b) => a - b)
        .filter((x) => x !== 0)

    sumPossibleGames(combinedResults)
})

const colorCounter = (str: string, color: string): number => {
    let count = 0;
    let val: number
    let index: number = 0
    while (count !== -1) {
        index = str.indexOf(color, count + 1)
        if (index !== -1) {
            val = parseInt(str[index - 3] + str[index - 2])
            if (val > checkObj[color]) {
                return 0;
            }
            count = index
        } else {
            break
        }
    }
    return parseInt(str.split(":")[0]);
}

const sumPossibleGames = (arr: number[]) => {
    let val: number = 0;
    const max = arr[arr.length - 1]
    for (let i = 1; i <= max; i++) {
        let counter: number = 0;
        while (i === arr[0]) {
            counter++
            arr.shift()
        }
        if (counter === 3) {
            val += i
        }
    }
    console.log(val);
}