export let Singleton = (function () {
    let instance;
    function createInstance() {
        const object = new Object();
        return object;
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

const sing1 = Singleton.getInstance();
const sing2 = Singleton.getInstance();

console.log(sing1 === sing2);
