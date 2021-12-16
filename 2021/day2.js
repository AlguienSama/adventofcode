import getData from "./data.js";

let data = getData('./day2.txt').split(/\r\n/g);
data.forEach((val, i, a) => {
    val = val.split(/\s+/g);
    a[i] = { pos: val[0], val: parseInt(val[1]) }
});


/** PART 1 */
const part1 = (array) => {
    let map = { forward: 0, up: 0, down: 0 };
    array.forEach((v) => { map[v.pos] += v.val; });
    return map.forward * Math.abs(map.up - map.down);
}
console.log(part1(data));

/** PART 2 */
const part2 = (array) => {
    let map = { depth: 0, horizontal: 0, aim: 0 };
    array.forEach((v) => { 
        if (v.pos === 'forward') {
            map.horizontal += v.val;
            if (map.aim !== 0) { map.depth += v.val * map.aim }
        } else if (v.pos === 'down') { map.aim += v.val }
        else if (v.pos === 'up') { map.aim -= v.val }
    });
    return map.depth * map.horizontal;
}
console.log(part2(data));