<template>
    <v-app-bar app flat density="compact" color="primary">
        <!--抽屉-->
        <v-app-bar-nav-icon @click="drawer = !drawer" />

        <!--标题-->
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Hello</span>
            <!--离线状态为EYE 在线状态为用户名-->
            <span color="white">EYE</span>
        </v-toolbar-title>

        <!-- 在v-spacer上面的标签将会在导航栏左侧 在v-spacer下面的标签将会在导航栏右侧 -->
        <v-spacer></v-spacer>

        <!--搜索-->
        <v-btn icon="mdi-magnify" />

        <!--登录-->
        <v-btn icon="mdi-account-circle" />

        <!--主题-->
        <v-btn icon="mdi-theme-light-dark" @click="toggleTheme" />

        <!--设置-->
        <v-btn icon="mdi-cog" />

        <!--固定-->
        <v-btn icon="mdi-pin" v-if="pin" @click="togglePin" />
        <v-btn icon="mdi-pin-off" v-else @click="togglePin" />
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" permanent>
        <v-list nav>
            <v-list-item prepend-icon="mdi-map" title="Plays" value="plays"></v-list-item>
            <v-list-item prepend-icon="mdi-cloud" title="Cloud" value="cloud"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useTheme } from 'vuetify'
import { useToolBarStore } from '@/store/toolbar'
import { storeToRefs } from 'pinia'

const drawer = ref(false)
const theme = useTheme()
const store = useToolBarStore()
const { pin } = storeToRefs(store)

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

function togglePin() {
    pin.value = !pin.value
}
</script>

<style lang="scss" scoped>
.right-icon {
    margin-left: 5px;
    color: #5CBBF6
}
</style>