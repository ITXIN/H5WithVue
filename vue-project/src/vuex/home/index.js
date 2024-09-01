const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

const state = {
    homeListData: {},
};
const actions = {
    getHomeListData({ commit, dispatch }, parames = {}) {
        return new Promise((resolve, reject) => {
            // 模拟网络请求
            const res = {
                resposeCode: 2000,
                data: {
                    name: 'heyi',
                    age: 18,
                },
            };
            console.log('🚀 ~ returnnewPromise ~ res:', res);
            setTimeout(() => {
                resolve(res);
                commit(UPDATE_USER_DATA, { key: 'homeListData', data: res.data });
                dispatch('getHomeListData2', { res });
            }, 1000);
        });
    },
    getHomeListData2({ commit }, parames = {}) {
        return new Promise((resolve, reject) => {
            // 模拟网络请求
            const res = {
                resposeCode: 2000,
                data: {
                    name: 'heyi',
                    age: 18,
                },
            };
            console.log('🚀 ~ returnnewPromise ~ res:', res);
            setTimeout(() => {
                commit(UPDATE_USER_DATA, { key: 'homeListData', data: res.data });
            });
        });
    },
};

const mutations = {
    [UPDATE_USER_DATA](state, { key, data }) {
        if (key) {
            state[key] = data;
            console.log('🚀 ~ state:', state);
        }
    },
};
export default {
    state,
    actions,
    mutations,
};
