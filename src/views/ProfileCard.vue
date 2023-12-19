<template>
  <div class="profile-card">
    <div class="image-container">
      <img class="profile-image" :src="profile.image" />
      <img class="profile-image hover-image" :src="profile.imageOnHover" />
    </div>

    <h2>{{ profile.name }}</h2>
    <p class="profile-info">{{ profile.age }} years | {{ profile.nationality }}</p>
  </div>
</template>

<script setup lang="ts">
import '@fortawesome/fontawesome-free/css/all.css';

const props = defineProps(['profile']);
</script>

<style scoped>
  .profile-card {
    text-align: center;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    position: relative;
  }

  .image-container {
    position: relative;
  }

  .profile-image {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    margin-bottom: 10px;
    transition: opacity 0.3s ease-in-out;
  }

  .hover-image {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: opacity 0.3s ease-in-out;
  }

  /* Afficher l'image sur hover */
  .profile-card:hover .profile-image {
    opacity: 0;
  }

  .profile-card:hover .hover-image {
    opacity: 1;
  }

  h2 {
    color: #333;
    margin-bottom: 5px;
    font-size: 18px;
  }

  .profile-info {
    color: #666;
    margin-bottom: 20px;
    font-size: 14px;
  }
</style>
