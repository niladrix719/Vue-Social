<template>
  <div class="card">
    <img src="../assets/dp.jpg" alt="Profile Picture" class="profile-picture">
    <p class="email">rickyrickado14@gmail.com</p>
    <h2>Niladri Adhikary</h2>
    <button class="btn">Show Posts</button>
  </div>
</template>

<script>
export default {
  name: 'UserCard',
}
</script>

<style>
  .card{
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
    transition: 0.25s ease-in-out;
  }

  .card:hover{
    transform: scale(1.05);
  }

  .profile-picture{
    border-radius: 50%;
    height: 6.5rem;
    width: 6.5rem;
  }

  .email{
    font-size: 0.8rem;
    margin-bottom: 0rem;
  }

  .btn{
    background-color: #4d5ed3;
    outline: none;
    border: none;
    height: 2.5rem;
    width: 10rem;
    color: white;
    cursor: pointer;
    margin-top: 2rem;
    border-radius: 1rem;
    font-size: 1rem;
  }
</style>