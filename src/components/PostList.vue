<template>
  <div id="posts">
    <router-link to="/"><button class="back-btn"> &lt;</button></router-link>

    <!-- heading -->
    <div id="post-heading">
      <h1> Post Section</h1>
    </div>
    
    <!-- List of Posts -->
    <div id="post-list">
      <div v-for="post in displayPosts" :key="post.id" id="posts-card-container">
        <PostCard :post="post" />
      </div>
    </div>

    <!-- pages navigations -->
    <PagesNavigation />

    <!-- Modal Dialog box -->
    <PostModal />
    
  </div>
</template>

<script>
// importing child components   
import PostCard from './PostCard.vue'
import PagesNavigation from './PagesNavigation'
import PostModal from './PostModal.vue'

// importing helper functions
import {mapState} from 'vuex'

export default {
  name: 'PostList',

  computed:{
    ...mapState({
      displayPosts : state => state.displayPosts
    })
  },

  components: {
    PostCard,
    PagesNavigation,
    PostModal
  },
  
  //sending request to fetch from api data after the component is created with userID
  created(){
    this.$store.dispatch('getPosts',{id : this.$route.params.id});
  }
}
</script>

<style>
  #posts{
    width: 75%;
    margin: auto;
  }

  #post-list{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #post-heading{
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 0.5rem;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 2rem;
  }

  #post-heading > h1{
    display: inline;
  }

  .back-btn{
    border-radius: 1rem;
    border: none;
    height: 2.5rem;
    width: 5rem;
    background-color: white;
    box-shadow: 0px 0px 20px 10px lightgrey;
    font-size: 2rem;
    cursor: pointer;
  }

  .back-btn:hover{
    background-color: #344b5e;
    color: white;
  }

  #posts-card-container{
    width: 100%;
  }
</style>