<script setup lang="ts">
  import type { Profile } from '@/model/Profile';
  import {onMounted, ref} from "vue";
  import Navbar from "@/components/Navbar.vue";
  import '@fortawesome/fontawesome-free/css/all.css';

  const props = defineProps(['id']);
  const profile = ref<Profile | null>();

  onMounted(async () => {
    try {
      const response = await fetch('/src/assets/json/squad-data.json');
      const data = await response.json();
      const foundProfile = data.find((p: Profile) => p.id == props.id);
      console.log(foundProfile, "my profile");

      profile.value = foundProfile;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

  function openLinkdin() {
    window.open("https://www.linkedin.com/in/idricealymourtadhoi/");
  }

  function openGit() {
    window.open("https://github.com/Idricealy");
  }
</script>

<template>
  <Navbar class="navbar-profile"/>

  <div v-if="profile" class="main-profile">
    <div class="main-profile-img-name">
      <img class="main-profile-img" :src="'/'+profile.imageOnHover" >
      <div class="main-profile-name">
        <h1>{{ profile.name}}</h1>
        <div>
          <i @click="openLinkdin" class="logoSocialMedia fa-brands fa-linkedin fa-2xl" style="color: #2695fd; margin-right: 10px" />
          <i @click="openGit" class="logoSocialMedia fa-brands fa-github fa-2xl"/>
        </div>
      </div>
    </div>
    <div class="main-profile-carac">
      <div class="div-carac">
        <i class="fa-solid fa-user fa-xl" /> : {{ profile.age }} years
      </div>
      <div class="div-carac">
        <i class="fa-solid fa-flag fa-xl"></i> : {{ profile.nationality }}
      </div>
      <div class="div-carac">
        <i class="fa-solid fa-thumbs-up fa-xl"></i> : <p v-for="quality in profile.qualities" :key="quality" class="inline-p"> {{ quality }}, </p>
      </div>
      <div class="div-carac">
        <i class="fa-solid fa-thumbs-down fa-xl"></i> : <p v-for="quality in profile.weaknesses" :key="quality" class="inline-p"> {{ quality }}, </p>
      </div>
      <div class="div-carac">
        <i class="fa-solid fa-face-smile"></i> : <p v-for="quality in profile.interests" :key="quality" class="inline-p"> {{ quality }}, </p>
      </div>
    </div>

  </div>
</template>

<style scoped>

  .main-profile {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .main-profile-img-name {
    display: flex;
    width: 1000px;
    height: 500px;
    align-items: center;
    margin-bottom: 40px;
    box-shadow: inset 0 -150px 150px -150px #e7ebef;
  }

  .inline-p {
    display: inline-block;
    margin-right: 10px; /* Ajoutez une marge à droite pour espacer les éléments */
  }

  .main-profile-img {
    height: 450px;
  }

  .main-profile-name {
    display: flex;
    flex-direction: column;
  }

  .logoSocialMedia {
    cursor: pointer;
  }

  .main-profile-carac {
    width: 800px;
    height: 300px;
    font-size: 1em;
    background-color: #c2c0c0;
    padding: 20px;
    border: 5px solid white;
    border-radius: 20px;
    box-shadow: 10px 5px 5px #ffffff;
    overflow: hidden;
  }

  .div-carac {
    display: block;
    margin-bottom: 15px;
  }

  @media (max-width: 950px) {
    .main-profile-img-name {
      font-size: 16px;
    }

    .main-profile-img-name {
      width: auto;
    }

    .main-profile-carac {
      width: auto;
      height: 500px;
    }
  }

  @media (max-width: 768px) {
    .main-profile-img-name {
      font-size: 16px;
    }
  }

  @media (max-width: 500px) {
    .main-profile-img-name {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 1000px;
      height: auto;
      font-size: 20px;
      box-shadow: inset 0 -150px 150px -150px #e7ebef;
    }

    .main-profile-img {
      width: 100%;
      max-height: 450px;
      object-fit: cover;
    }

    .main-profile-name {
      display: flex;
      flex-direction: column;
      padding: 10px;
    }

    .logoSocialMedia {
      cursor: pointer;
    }

    .main-profile-carac {
      width: 100%;
      height: auto;
    }

  }
</style>
