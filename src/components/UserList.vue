<template>
  <div id="users">

    <!-- heading -->
    <h1 id="user-heading">Welcome to Vue-Social</h1>

    <!-- sort by name toggle -->
    <button v-on:click="sortUser()" id="sort-btn">Sort by Name</button>

    <!-- list of users -->
    <div id="user-list">
      <div v-for="user in displayUsers" :key="user.id">
        <UserCard :user="user" />
      </div>
    </div>

    <!-- pages navigations -->
    <PagesNavigation />

  </div>
</template>

<script>

// importing components
import UserCard from './UserCard'
import PagesNavigation from './PagesNavigation'

// importing helper fuctions
import {mapGetters,mapMutations} from 'vuex'

export default {
  name: 'UserList',

  components:{
    UserCard,
    PagesNavigation
  },

  computed:{
    ...mapGetters({
      displayUsers : 'displayUsers'
    })
  },

  methods:{
    ...mapMutations({
      sortUser : 'sortUser'
    })
  },

  //sending request to fetch from api data after the component is created
  created(){
    this.$store.dispatch('getUsers')
  }
}

</script>

<style>
  #users{
    width: 75%;
    margin: auto;
    text-align: center;
  }

  #user-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4rem;
  }

  #user-heading{
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 2rem;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 2rem;
  }

  #sort-btn{
    border: none;
    margin-bottom: 3rem;
    background-color: white;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 1rem;
    padding-top: 0;
    border-top: 6px solid transparent;
  }

  #sort-btn:hover{
    background-color: #344b5e;
    color: white;
  }
</style>