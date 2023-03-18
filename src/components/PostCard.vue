<template>
  <!-- sending data to display in modal -->
  <div class="post-card" v-on:click="showModal({title : post.title, body : post.body})">

    <div>
      <img src="../assets/dp.jpg" alt="Profile Picture" class="post-profile-picture">
    </div>

    <div>
      <h2 class="post-user-name">Niladri Adhikary </h2>
      <p class="post-email">rickyrickado14@gmail.com</p>
      <h2 class="post-title">{{post.title}}</h2>
      <p class="post-para">{{post.body}}</p>
      <button class="view-post-btn">View Post</button>
    </div>

  </div>
</template>

<script>
import {mapMutations} from 'vuex' 
export default {
  name: 'PostCard',

  props:{
    post: Object
  },

  methods:{
    ...mapMutations({
      showModal : 'showModal'
    })
  }
}
</script>

<style>
  .post-card{
    color: #344b5e;
    width: 100%;
    background-color: white;
    box-shadow: 0px 0px 20px 10px lightgrey;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 1rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    gap: 1rem;
    align-items: flex-start;
    margin-bottom: 3rem;
  }

  .post-card:hover{
    transform: scale(1.05);
  }

  .post-user-name{
    font-size: 0.85rem;
    display: inline;
  }

  .post-profile-picture{
    border-radius: 50%;
    height: 3.5rem;
    width: 3.5rem;
  }

  .post-email{
    font-size: 0.85rem;
    margin-bottom: 0rem;
    display: inline;
  }

  .view-post-btn{
    background-color: #41ba84;
    outline: none;
    border: none;
    height: 2.5rem;
    width: 10rem;
    color: white;
    cursor: pointer;
    margin-top: 1.5rem;
    border-radius: 1rem;
    font-size: 0.95rem;
    border-top: 8px solid #344b5e;
  }

  .post-para{
    line-height: 1.25rem;
  }

  .post-title{
    font-size: 1.35rem;
  }
</style>