/**
 * Should sum from 1 to N
 * @param number
 * @returns number
 */
function sumRange(number) {
    let min = 1;
    let max = number;
    let result = 0;
    if (max < min) {
        let temp = min;
        min = max;
        max = temp;
    }
    for (let i = min; i <= max; i++) {
        result += i;
    }
    return result;
}

module.exports = sumRange
