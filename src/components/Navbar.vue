<script setup lang="ts">
  import {ref} from "vue";
  import router from "@/router";

  const pageTitle = ref('M2 Squad Team');

  const goBack = () => {
    router.go(-1);
  };
</script>

<template>
  <header class="navbar">
    <div class="navbar-left" @click="goBack" >
        <img class="logo" src="../assets/img/universitalogo.png" alt="Logo" />
    </div>
    <div class="navbar-center">
      <p>{{ pageTitle }}</p>
    </div>
    <div class="navbar-right">
      <button @click="goBack">Back</button>
    </div>
  </header>
</template>

<style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #424242; /* Black background */
    padding: 10px;
    color: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow effect */
  }

  .logo {
    width: 50px;
  }

  .navbar-center {
    flex: 1;
    text-align: center;
  }

  .navbar-right button {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    background-color: #3498db;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>
