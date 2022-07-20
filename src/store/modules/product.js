import axios from 'axios'

const state = {
    productItems: [],
}

const mutations = {
    UPDATE_PRODUCT_ITEMS(state, payload) {
        state.productItems = payload;
    }
}

const actions = {
    async getProductItems({ commit }) {
        let api_url = process.env.VUE_APP_API_URL;
        try {
            const response = await axios.get(`${api_url}/product?keyword=&price=&page=1&limit=10&order=product_name,ASC`);
            commit('UPDATE_PRODUCT_ITEMS', response.data.data.list);
        } catch (error) {
            console.log(error)
        }
    },

    updateProductList: function ({ commit }, payload) {
        commit('UPDATE_PRODUCT_ITEMS', payload)
    }
}

const getters = {
    productItems: state => state.productItems,
    productItemById: (state) => (id) => {
        return state.productItems.find(productItem => productItem.id === id)
    }
}

const productModule = {
    state,
    mutations,
    actions,
    getters
}

export default productModule;