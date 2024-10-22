// export function add() {
//     console.log('add');
// }

// const fn = function (params) {
//     console.log('🚀 ~ fn ~ params:', params);
// };
// fn('dd');

// export const name = 'john';

// export const obj = {
//     name: 'john',
// };

class EventEmitter {
    constructor() {
        this.events = {};
    }

    $on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    $off(eventName, callback) {
        if (!this.events[eventName]) {
            return;
        }
        if (!callback) {
            this.events[eventName] = [];
        } else {
            this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
        }
    }

    $emit(eventName, ...args) {
        if (!this.events[eventName]) {
            return;
        }
        this.events[eventName].forEach(callback => callback.apply(this, args));
    }

    $once(eventName, callback) {
        const onceCallback = (...args) => {
            callback.apply(this, args);
            this.$off(eventName, onceCallback);
        };
        this.$on(eventName, onceCallback);
    }
}

const eventEmitter = new EventEmitter();
eventEmitter.$on('test', data => {
    console.log('🚀 ~ data:', data);
});
eventEmitter.$emit('test', 'hello');
eventEmitter.$off('test');
eventEmitter.$emit('test', 'hello2');

eventEmitter.$once('test2', data => {
    console.log('🚀 ~ data:', data);
});
eventEmitter.$emit('test2', 'hello');
eventEmitter.$emit('test2', 'hello2');
