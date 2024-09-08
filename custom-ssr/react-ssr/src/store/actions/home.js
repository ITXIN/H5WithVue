import * as types from '../action-types'

export default {
    getHomeList() {
        return function (dispatch, getState, request) {
            // 因为这里的 action 都是公共的，客户端/服务端的请求参数可能不一样
            // 所以需要在这里区分当前环境是客户端还是服务端，但是再每个 action 里都做判断会很麻烦
            // 所以这里在不同环境下调用时，给函数传递一个 request ，就可以区分当前环境
            return request.get('/api/users').then(res => {
                let list = res.data
                dispatch({
                    type: types.SET_HOME_LIST,
                    payload: list
                })
            })
        }
    }
}
