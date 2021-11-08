import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            {name: 'Banana', price: 20},
            {name: 'chocola', price: 40},
            {name: 'Banana', price: 60}
        ]
    },

    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product =>{
                return {
                    name: '**'+product.name+'**',
                    price: product.price / 2
                }
            });
            return saleProducts;
        }
    },

    mutations: {
        reducePrice: state => {
            state.products.forEach(product =>{
                product.price -= 1;
            })
        } 
    },

    actions: {
        reducePrice: (context, payload) =>{
            setTimeout(function(){
                context.commit('reducePrice', payload)
            }, 2000)
        }
    }
})