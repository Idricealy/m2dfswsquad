<template>
  <main>
    <img class="background" src="@/assets/img/m2squad.jpg" alt="Background Image" />
    <div class="overlay">
      <h1>M2 Squad Team</h1>
      <button @click="redirectToSquad">All Students</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import router from "@/router";

const redirectToSquad = () => {
  router.push({ path: '/squad' })
};

</script>

<style scoped>

  main {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: blur(3px);
  }

  .overlay {
    position: relative;
    z-index: 1;
    text-align: center;
    color: white;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db; /* Couleur du bouton, ajustez selon vos préférences */
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.5s;
  }

  button:hover {
    background-color: #148fe1;
    font-size: 20px;
    transition: 0.5s;
  }
</style>
