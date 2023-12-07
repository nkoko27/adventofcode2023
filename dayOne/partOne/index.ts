import * as fs from 'fs';

fs.readFile('./input.txt', 'utf8', (err: Error | null, data: string) => {
    if (err) {
        console.error('There was an error reading the file:', err);
        return;
    }
    const numbers = data.split("\n")
        .map((x: string): string[] => {
            return x.split('')
        })
    const digits = numbers.map((x: string[]): string[] => {
        return x.filter((y: string) => {
            return !Number.isNaN(parseInt(y))
        })
    })
    const concat = digits.map((x: string[]): number => {
        return parseInt(`${x[0]}${x[x.length - 1]}`)
    }).reduce((acc: number, curr: number) => {
        return acc + curr
    }, 0)
    console.log(concat)
})