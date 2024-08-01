import { createStore } from "vuex";

const store = createStore({
    state() {
        return{
            count: 0,
        }
    },
    getters: {
        getCount: (state) => state.count,
    },
    mutations: {
        updateCount: (state, value) => {
            state.count = value;
        }
    }
})

export default store;
