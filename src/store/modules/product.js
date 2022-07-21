import axios from 'axios'

const state = {
    productItems: [],
    keyword: "",
    total: 0,
}

const mutations = {
    UPDATE_PRODUCT_ITEMS(state, payload) {
        state.productItems = payload;
    },
    UPDATE_TOTAL(state, payload) {
        state.total = payload;
    },
    UPDATE_KEYWORD(state, payload) {
        state.keyword = payload
    }
}

const actions = {
    async getProductItems({ commit }) {
        let api_url = process.env.VUE_APP_API_URL;
        try {
            const response = await axios.get(`${api_url}/product?keyword=&price=&page=1&limit=10&order=product_name,ASC`);
            commit('UPDATE_PRODUCT_ITEMS', response.data.data.list);
            commit('UPDATE_TOTAL', response.data.data.total);
        } catch (error) {
            console.log(error)
        }
    },

    updateProductList: function ({ commit }, payload) {
        commit('UPDATE_PRODUCT_ITEMS', payload)
    },

    updateTotal: function ({ commit }, payload) {
        commit('UPDATE_TOTAL', payload)
    },

    updateKeyword: function ({ commit }, payload) {
        commit('UPDATE_KEYWORD', payload)
    }
}

const getters = {
    productItems: state => state.productItems,
    total: state => state.total,
    productItemById: (state) => (id) => {
        return state.productItems.find(productItem => productItem.id == id)
    },
    keyword: state => state.keyword
}

const productModule = {
    state,
    mutations,
    actions,
    getters
}

export default productModule;