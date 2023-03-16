<template>
  <div id="users">

    <!-- heading -->
    <h1 id="user-heading">Welcome to Vue-Social</h1>

    <!-- list of users -->
    <div id="user-list">
      <div v-for="user in displayUsers" :key="user.id">
        <UserCard :user="user" />
      </div>
    </div>

    <!-- pages navigations -->
    <nav>
      <button v-if="currentPage > 1" v-on:click="currentPage--">&lt;&lt;</button>
      <button v-if="currentPage < noOfPages" v-on:click="currentPage++">&gt;&gt;</button>
    </nav>

  </div>
</template>

<script>
import UserCard from './UserCard'
import {mapState} from 'vuex'
export default {
  name: 'UserList',
  data(){
    return{
      pageSize : 10,
      currentPage : 1
    }
  },
  components:{
    UserCard
  },
  computed:{
    ...mapState({
      users : state => state.users
    }),
    displayUsers(){
      let startIndex = (this.currentPage - 1) * this.pageSize;
      let endIndex = startIndex + this.pageSize;
      return this.users.slice(startIndex,endIndex);
    },
    noOfPages(){
      return Math.ceil(this.users.length / this.pageSize);
    }
  },
  created(){
    this.$store.dispatch('getUsers')
  }
}
</script>

<style>
  #users{
    width: 75%;
    margin: auto;
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
</style>