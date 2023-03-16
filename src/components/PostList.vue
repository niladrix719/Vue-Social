<template>
  <div id="posts">
    <router-link to="/"><button class="back-btn"> &lt;</button></router-link>

    <!-- heading -->
    <div id="post-heading">
      <h1> Post Section</h1>
    </div>

    <!-- List of Posts -->
    <div id="post-list">
      <PostCard />
    </div>
    
  </div>
</template>

<script>
import PostCard from './PostCard.vue'
export default {
  name: 'PostList',
  components: {
    PostCard
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