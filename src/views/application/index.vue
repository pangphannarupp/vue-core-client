<template>
    <div class="profile-page">
      <h1>{{ title }}</h1>
      <p>This is the profile page content.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ApplicationPage',
    data() {
      return {
        title: 'Application Page'
      };
    },
  });
  </script>
  
  <style scoped>
  .profile-page {
    padding: 20px;
  }
  </style>
  