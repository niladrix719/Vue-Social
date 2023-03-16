<template>
  <div id="posts">
    <router-link to="/"><button class="back-btn"> &lt;</button></router-link>

    <!-- heading -->
    <div id="post-heading">
      <h1> Post Section</h1>
    </div>

    <!-- List of Posts -->
    <div id="post-list">
      <div v-for="post in posts" :key="post.id">
        <PostCard :post="post" />
      </div>
    </div>

    <!-- pages navigations -->
    <PagesNavigation />
    
  </div>
</template>

<script>
import PostCard from './PostCard.vue'
import PagesNavigation from './PagesNavigation'
import {mapState} from 'vuex'
export default {
  name: 'PostList',

  computed:{
    ...mapState({
      posts : state => state.posts
    })
  },

  components: {
    PostCard,
    PagesNavigation
  },

  created(){
    this.$store.dispatch('getPosts')
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
  }
</style>