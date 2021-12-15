import getData from './data.js';

let data = getData('./day1.txt').split(/\r\n/g);
data.forEach((num, i, a) => { a[i] = parseInt(num);})


/** PART 1 */
const part1 = (array = data) => {
    let count = 0;
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i-1]) { count++; }
    }
    return count;
}
console.log(part1());


/** PART 2 */
const part2 = () => {
    let newData = [];
    for (let i = 2; i < data.length; i++) {
        newData.push(data[i-2] + data[i-1] + data[i])
    }
    return part1(newData);
}
console.log(part2());