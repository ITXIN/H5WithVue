export function test() {
    const array = [2, 4, 5, 5, 6, 7, 8, 87];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log('🚀 ~ element:', element);
    }
    return 'test';
}
