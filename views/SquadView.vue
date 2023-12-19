<script setup lang="ts">
  import Navbar from "@/components/Navbar.vue";
  import {onMounted, ref} from "vue";
  import ProfileCard from "@/views/ProfileCard.vue";
  import type {Profile} from "@/model/Profile";
  import router from "@/router";

  const profiles = ref<Profile[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/src/assets/json/squad-data.json"); // Ajuster le chemin d'accès au fichier selon votre structure
      const data = await response.json();
      profiles.value = data; // Assurez-vous que le format du fichier JSON correspond à votre modèle de profil
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  function openProfile(prof: Profile) {
    router.push({ name: 'profile', params: { id: prof.id } });
  }

  onMounted(() => {
    fetchData();
  });
</script>

<template>
  <div>
    <Navbar class="navbar-profile"/>

    <div class="profile-grid">
      <ProfileCard v-for="profile in profiles" :key="profile.id" :profile="profile" @click="openProfile(profile)" />
    </div>
  </div>
</template>

<style scoped>
  .navbar-profile {
    margin-bottom: 50px;
  }

  .profile-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    align-content: start;
  }

  @media (max-width: 900px) {
    .profile-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .profile-grid {
      grid-template-columns: 1fr;
    }
  }

</style>
