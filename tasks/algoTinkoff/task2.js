function getSum(arr, k) {
    arr.sort(function (a, b) {
        return a - b;
    });
    let lI = 0;
    let rI = arr.length - 1;
    while (lI < rI) {
        const sum = arr[lI] + arr[rI];
        if(sum === k) return [arr[lI], arr[rI]];
        if(sum > k) {
            rI--;
        }
        if(sum < k) {
            lI++;
        }
    }
    return null;
}

module.exports = getSum