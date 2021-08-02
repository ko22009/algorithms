function brackets(str) {
    let opened = 0
    let closed = 0;
    const len = str.length;
    for (let i = 0; i < len; i++) {
        let char = str.charAt(i);
        if (char === ')' && closed < opened) {
            closed += 1;
        } else if (char === '(' && (opened - closed < len / 2)) {
            opened += 1;
        } else {
            return false;
        }
    }
    return true;
}

module.exports = brackets
