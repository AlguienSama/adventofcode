import getData from "./data.js";

let data = getData('./day3.txt').split(/\r\n/g);
data.forEach((num, i, a) => { a[i] = num.split('');})


/** PART 1 */
const part1 = (array) => {
    let gamma = '', epsilon = '';
    for (let i = 0; i < array[0].length; i++) {
        let one = 0, zero = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j][i] == '0') { zero++; }
            else { one++; }
        }
        gamma += parseInt(one) > parseInt(zero) ? '1' : '0';
        epsilon += parseInt(one) > parseInt(zero) ? '0' : '1';
    }
    gamma = parseInt(gamma, 2);
    epsilon = parseInt(epsilon, 2)
    return gamma * epsilon;
}
console.log(part1(data));


/** PART 2 */
const part2 = (array) => {
    const getNums = (array, col) => {
        let one = 0, zero = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j][col] == '0') { zero++; }
            else { one++; }
        }
        return [ zero, one ];
    }

    const delNums = (array, num, i) => {
        let newArray = [];
        array.forEach((val) => {
            if (val[i] == num) {
                newArray.push(val) 
            } 
        });
        return newArray;
    }

    const getOxygen = (array) => {
        let oxygen = array;
        for (let i = 0; i < array[0].length; i++) {
            const [ zero, one ] = getNums(oxygen, i);
            const num = zero > one ? 0 : 1;
            oxygen = delNums(oxygen, num, i);
        }
        return oxygen[0].join('');
    }

    const getScrubber = (array) => {
        let scrubber = array;
        for (let i = 0; i < array[0].length; i++) {
            const [ zero, one ] = getNums(scrubber, i);
            const num = zero > one ? 1 : 0;
            scrubber = delNums(scrubber, num, i);
            if (scrubber.length == 1) { return scrubber[0].join(''); }
        }
        return scrubber[0].join('');
    }

    const oxygen = parseInt(getOxygen(array), 2);
    const scrubber = parseInt(getScrubber(array), 2);
    
    return oxygen * scrubber;
}

console.log(part2(data));