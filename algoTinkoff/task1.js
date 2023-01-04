function isSimilar(str1, str2) {
    const len1 = str1.length;
    if (len1 !== str2.length) return false;
    const values = {};
    for (let i = 0; i < len1; i++) {
        const val1 = str1.charCodeAt(i);
        const val2 = str2.charCodeAt(i);
        if (values.hasOwnProperty(val1)) {
            if(values[val1] !== (val1 & val2)) return false;
        } else if (values.hasOwnProperty(val2)) {
            if(values[val2] !== (val1 & val2)) return false;
        } else {
            values[val1] = val1 & val2;
            values[val2] = val1 & val2;
        }
    }
    return true;
}

module.exports = isSimilar