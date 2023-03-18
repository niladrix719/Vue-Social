<template>
  <div id="modal" :class="{visible: visible}">
    <h3>{{title}}</h3>
    <p>{{body}}</p>
    <button v-on:click="NoVisible()" class="close-btn">Close</button>
    <button v-on:click="NoVisible()">OK</button>
  </div>
</template>

<script>
// importing helper functions  
import {mapState,mapMutations} from 'vuex'

export default {
  name: 'PostModal',

  computed:{
    ...mapState({
      title : state => state.title,
      body : state => state.body,
      visible: state => state.visible
    })
  },

  methods:{
    ...mapMutations({
      NoVisible: 'NoVisible'
    })
  }
}
</script>

<style scoped>
  #modal{
    position: fixed;
    top: 0;
    background-color: #344b5e;
    color: white;
    width: 50%;
    left: 24.5%;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.25s ease-in-out;
  }

  #modal.visible {
    opacity: 1;
  }

  p{
    font-size: 0.9rem;
    line-height: 1.25rem;
  }

  button{
    background-color: #41ba84;
    outline: none;
    border: none;
    height: 1.85rem;
    width: 4.5rem;
    color: white;
    cursor: pointer;
    border-radius: 1rem;
    font-size: 0.95rem;
  }

  .close-btn{
    margin-right: 0.5rem;
    background-color: #ce4b4b;
  }
</style>