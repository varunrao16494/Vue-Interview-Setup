import { createStore } from "vuex";
const API_URL = "https://lxp-api-develop.azure-api.net/DevStage/courses/discovery-paginated-semantic?page=1&page_size=20&semantic_size=4&language=en";
const store = createStore({
    state() {
        return{
            list: [],
        }
    },
    getters: {
        getList: (state) => state.list,
    },
    mutations: {
        updateList: (state, value) => {
            state.list = value;
        }
    },
    actions: {
        getList: ({commit}) => {
            fetch(API_URL).then(res => res.json())
            .then(res => {
                console.log(res.results);
                commit('updateList', res.results);
            })
        }
    }
})

export default store;
