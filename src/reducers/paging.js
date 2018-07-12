import * as types from '../actions/ActionTypes';

const initialState = {
    stateAA: 0
};

export default function paging(state = initialState, action) {
    switch (action.type) {
        case types.PAGINGNEXT:
            return {
                stateAA: state.stateAA
            };
        default:
            return state;
    }
}
