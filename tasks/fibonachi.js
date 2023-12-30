function fibonaci(position) {
    const fib = [0, 1];
    for (let i = 2; i <= position; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[position];
}

module.exports = fibonaci