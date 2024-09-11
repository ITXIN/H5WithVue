export function add() {
    console.log('add');
}

const fn = function (params) {
    console.log('🚀 ~ fn ~ params:', params);
};
fn('dd');

export const name = 'john';

export const obj = {
    name: 'john',
};
