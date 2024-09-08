import * as types from '../action-types'
let ininState = {
    count: 0
}
export default function (state = ininState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                number: state.number + 1
            }
        default:
            return state
    }
}
