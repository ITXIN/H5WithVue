const targetMap = new WeakMap();
let activeEffect = null;
const ref = raw => {
    const r = {
        get value() {
            track(r, 'value');
            return raw;
        },
        set value(newValue) {
            raw = newValue;
            trigger(r, 'value');
        },
    };
    return r;
};

const computed = getter => {
    const result = ref();
    effect(() => {
        result.value = getter();
    });
    return result;
};

const effect = eff => {
    console.log('🚀 ~ effect ~ eff:', eff);
    activeEffect = eff;
    activeEffect();
    activeEffect = null;
};

const track = (target, key) => {
    console.log('🚀 ~ track ~ target, key:', target, key, activeEffect);
    if (activeEffect) {
        let depsMap = targetMap.get(target);

        if (!depsMap) {
            depsMap = new Map();
            targetMap.set(target, depsMap);
        }
        let dep = depsMap.get(key);
        if (!dep) {
            dep = new Set();
            depsMap.set(key, dep);
        }
        console.log('🚀 ~ track ~ dep:', dep);
        console.log('🚀 ~ track ~ depsMap:', depsMap);
        console.log('🚀 ~ track ~ targetMap:', targetMap.get(target));
        dep.add(activeEffect);
    }
};

const trigger = (target, key) => {
    console.log('🚀 ~ trigger ~ target, key:', target, key);
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    const dep = depsMap.get(key);
    console.log('🚀 ~ trigger ~ depsMap:', depsMap);
    console.log('🚀 ~ trigger ~ dep:', dep);
    if (dep) {
        dep.forEach(effect => effect());
    }
};
const reactive = target => {
    const handle = {
        get(target, key, receiver) {
            console.log('🚀 ~ get ~ target:', target);
            console.log('🚀 ~ get ~  key:', key);
            console.log('🚀 ~ get ~  receiver:', receiver);

            const result = Reflect.get(target, key, receiver);
            console.log('🚀 ~ get ~ result:', result);
            track(target, key);
            return result;
        },
        set(target, key, value, receiver) {
            console.log('🚀 ~ set ~ target:', target);
            console.log('🚀 ~ set ~  key:', key);
            console.log('🚀 ~ set ~  receiver:', receiver);

            const oldValue = target[key];
            const result = Reflect.set(target, key, value, receiver);
            console.log('🚀 ~ set ~ oldValue:', oldValue);
            console.log('🚀 ~ set ~ result:', result);
            if (oldValue !== value) {
                trigger(target, key);
            }
            return result;
        },
    };
    return new Proxy(target, handle);
};

const product = reactive({
    price: 10,
    quantity: 2,
});

// let total = 0;
// let salePrice = ref(0);
// effect(() => {
//     total = product.price * product.quantity;
// });
// effect(() => {
//     salePrice = total * 0.9;
// });
const salePrice = computed(() => product.price * product.quantity * 0.9);
const total = computed(() => product.price * product.quantity);
console.log(total, salePrice);
product.quantity = 5;
console.log(total, salePrice);
product.price = 20;
console.log(total, salePrice);
