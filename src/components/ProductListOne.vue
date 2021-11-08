<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
        <li v-for="product in saleProducts">
            <span class="name">{{product.name}}</span>
            <span class="price">${{product.price}}</span>
        </li>
    </ul>
    <button v-on:click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

export default {
  computed: {
      products(){
          return this.$store.state.products;
      },
      ...mapGetters([
        'saleProducts'
      ])
  },
  methods: {
    ...mapActions([
        'reducePrice'
      ])
  }
}
</script>

<style>

</style>
