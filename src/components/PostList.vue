<template>
  <div id="posts">
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
</style>