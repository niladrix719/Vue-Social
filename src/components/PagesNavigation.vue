<template>
  <nav>
    <button v-if="currentPageNum > 1" v-on:click="decreasePageNum">&lt;&lt;</button>
    <button v-if="currentPageNum < noOfPages" v-on:click="increasePageNum">&gt;&gt;</button>
  </nav>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default {
  name: 'PagesNavigation',
  computed:{
    ...mapState({
      currentPageNum: state => state.currentPage
    }),
    ...mapGetters({
      noOfPages : 'noOfPages'
    }),
    ...mapMutations({
      decreasePageNum : 'decreasePageNum',
      increasePageNum : 'increasePageNum'
    })
  }
}
</script>

<style>
  nav{
    margin-top: 4rem;
    text-align: center;
  }
</style>