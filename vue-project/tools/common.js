const mock = require('../mock/test.json');
console.log('mock', mock);
function test() {
    const a = 'outa';
    const b = 'd';
    if (b) {
        // eslint-disable-next-line no-use-before-define
        console.log('a ', a);
        // const a = 'in';
    }
}

test();
