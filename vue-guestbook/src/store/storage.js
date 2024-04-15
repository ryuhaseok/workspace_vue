import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            apiBaseUrl: "http://3.35.11.103:9000"
            ///apiBaseUrl: "http://localhost:9000"
            
        };
    },
    mutations: {
    },
    plugins: [

    ]
});