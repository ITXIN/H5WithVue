const UPDATE_DATE_KEY = 'UPDATE_DATE_KEY';
const SET_DATE_STATE = 'SET_DATE_STATE';
const SET_STATUS_DATA = 'SET_STATUS_DATA';

const axios = require('axios');
const state = {
    detailData: {},
    status: {},
    othersData: {},
};
const actions = {
    getRequest: async ({ commit, dispatch }, options = {}) => {
        console.log('========actions', options);
        const url =
            'https://rsb-stg.pingan.com.cn/bron/coss/cust/app/v2/getWindowData?tabCode=JJSC&channelCode=C0012&access_source=H5';
        axios.get(url).then(res => {
            commit(SET_DATE_STATE, { key: 'detailData', value: { test: res?.data } });
            commit(SET_STATUS_DATA, { key: 'status', value: '1' });
            // commit(UPDATE_DATE_KEY,{data:res.data})
            dispatch('getUserInfo').then(res => {
                console.log(res);
            });
        });
    },
    getUserInfo({ commit }) {
        return new Promise(resolve => {
            resolve('');
            commit(SET_STATUS_DATA, { key: 'status', value: '1' });
        });
    },
};
const mutations = {
    [SET_STATUS_DATA](state, { key = '', value = '' }) {
        if (key) {
            state.status = {
                ...state.status,
                [key]: value,
            };
            // console.log('========actions status',state.status)
        }
    },
    [UPDATE_DATE_KEY](state, payload) {
        state.othersData = payload.data;
        // console.log('========actions othersData',state.othersData)
    },
    // 动态设置
    [SET_DATE_STATE](state, { key = '', value = '' }) {
        if (key) {
            state[key] = value;
            console.log('========actions key', key, state.detailData);
        }
    },
};
export default {
    state,
    actions,
    mutations,
};
