function containsSubstring(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;

    if (len1 > len2) return false;

    const charCount = {};
    for (const char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let count = 0;
    const windowCount = {};

    for (let i = 0; i < len1; i++) {
        const char = str2[i];
        windowCount[char] = (windowCount[char] || 0) + 1;

        if (windowCount[char] <= charCount[char]) {
            count++;
        }
    }

    if (count === len1) return true;

    for (let i = len1; i < len2; i++) {
        const leftChar = str2[i - len1];
        const rightChar = str2[i];


        windowCount[leftChar]--;
        if (windowCount[leftChar] < charCount[leftChar]) {
            count--;
        }

        windowCount[rightChar] = (windowCount[rightChar] || 0) + 1;
        if (windowCount[rightChar] <= charCount[rightChar]) {
            count++;
        }

        if (count === len1) return true;
    }

    return false;
}

module.exports = containsSubstring