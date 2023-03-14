<template>
  <router-link class="links" to="/post-list">
  <div class="user-card">
    <img src="../assets/dp.jpg" alt="Profile Picture" class="user-profile-picture">
    <p class="user-email">{{user.email}}</p>
    <h2 class="user-name">{{user.name}}</h2>
    <button class="show-post-btn">Show Posts</button>
  </div>
</router-link>
</template>

<script>
export default {
  name: 'UserCard',
  props:{
    user: Object
  }
}
</script>

<style>
  .user-card{
    color: black;
    height: 20rem;
    width: 17rem;
    background-color: white;
    box-shadow: 0px 0px 20px 10px lightgrey;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    padding: 1rem;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }

  .user-card:hover{
    transform: scale(1.05);
  }

  .user-name{
    font-size: 1.2rem;
  }

  .user-profile-picture{
    border-radius: 50%;
    height: 6.5rem;
    width: 6.5rem;
  }

  .user-email{
    font-size: 0.8rem;
    margin-bottom: 0rem;
  }

  .show-post-btn{
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

  .links{
    text-decoration: none;
  }

</style>