<template>
  <v-app>
    <ToolBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import ToolBar from '@/components/ToolBar.vue'
</script>

<style lang="scss">
@import "./assets/css/app.scss";
</style>