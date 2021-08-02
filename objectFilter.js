function objectFilter(arr, filter) {
    const keys = Object.keys(filter);
    return arr.filter(el => {
        for (let key of keys) {
            if (filter[key][el[key]]) return false;
        }
        return true;
    });
}

module.exports = objectFilter
