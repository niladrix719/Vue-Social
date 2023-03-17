<template>
  <nav>
    <button v-if="currentPageNum > 1" v-on:click="decreasePageNum">&lt;&lt;</button>
    {{currentPageNum}}
    <button v-if="currentPageNum < noOfPages" v-on:click="increasePageNum">&gt;&gt;</button>
  </nav>
</template>

<script>
//importing helper functions
import {mapState,mapGetters,mapMutations} from 'vuex'

export default {
  name: 'PagesNavigation',
  computed:{
    ...mapState({
      currentPageNum: state => state.currentPage
    }),
    ...mapGetters({
      noOfPages : 'noOfPages'
    })
  },
  methods:{
    ...mapMutations({
      decreasePageNum : 'decreasePageNum',
      increasePageNum : 'increasePageNum'
    })
  }
}
</script>

<style scoped>
  nav{
    margin-top: 4rem;
    text-align: center;
  }

  button{
    cursor: pointer;
  }

  button:active{
    background-color: #344b5e;
    color: white;
  }
</style>