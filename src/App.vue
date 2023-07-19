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
import { useToolBarStore } from '@/store/toolbar'
import { onMounted } from 'vue'

const store = useToolBarStore()
const { dark } = store;

import { useTheme } from 'vuetify'
const theme = useTheme()

onMounted(() => {
  theme.global.name.value = dark ? 'light' : 'dark'
});
</script>

<style lang="scss">
@import "./assets/css/app.scss";
</style>