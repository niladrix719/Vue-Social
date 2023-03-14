<template>
  <div class="post-card">

    <div>
      <img src="../assets/dp.jpg" alt="Profile Picture" class="post-profile-picture">
    </div>

    <div>
      <h2 class="post-user-name">Niladri Adhikary </h2>
      <p class="post-email">rickyrickado14@gmail.com</p>
      <h2 class="post-title">Title of the post</h2>
      <p class="post-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button class="view-post-btn">View Post</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PostCard'
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