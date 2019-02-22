import { getJson } from "../util";

export const ADD = 'add';
export const INIT = 'init';

const state = {
    count: 0,
    loading: false,
    data: [],
};
const getters = {
    cut(state) {
        return state.count - 1;
    }
};
const mutations = {
    [ADD](state, count) {
        state.count += count;
    },
    [INIT](state) {
        state.loading = true;
        getJson('/data/query/').then(res => {
            state.data = res.data.data;
            state.loading = false;
        })
    }
};
const actions = {
    [ADD]({ commit }, count) {
        commit(ADD, count);
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};
