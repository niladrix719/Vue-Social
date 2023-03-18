<template>
  <nav>
    <button v-if="currentPageNum > 1" v-on:click="decreasePageNum">&lt;&lt;</button>
    <span>{{currentPageNum}}</span> <!-- Displaying current Page -->
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
      increasePageNum : 'increasePageNum',
      setPageNum : 'setPageNum'
    })
  },
  
  // setting current page no. to 1
  mounted(){
    this.$store.commit('setPageNum');
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
    border: none;
  }

  button:active , span {
    background-color: #344b5e;
    color: white;
  }

  span{
    padding: 0.15rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
</style>