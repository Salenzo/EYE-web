// Utilities
import { defineStore } from 'pinia'
import { ref } from "vue"

export const useToolBarStore = defineStore('app', () => {
    const pin = ref(true)
    return { pin }
}, {
    persist: {
        enabled: true,
    },
})
