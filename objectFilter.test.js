const objectFilter = require('./objectFilter');
test('object by filter', () => {
    const goods = [
        {model: 'iPhone'},
        {model: 'iPhone 2'},
        {model: 'iPhone 3'},
        {model: 'iPhone 4'},
    ]
    const res = [
        {model: 'iPhone 3'},
        {model: 'iPhone 4'},
    ]
    const filter = [
        {key: 'model', value: 'iPhone'},
        {key: 'model', value: 'iPhone 2'}
    ]
    const filterObject = filter.reduce((acc, cur) => {
        if (!acc[cur.key]) {
            acc[cur.key] = {};
        }
        acc[cur.key][cur.value] = true;
        return acc;
    }, {});
    const result = objectFilter(goods, filterObject);
    expect(result).toEqual(res);
})
