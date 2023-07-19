// Utilities
import { defineStore } from 'pinia'
import { ref } from "vue"

export const useToolBarStore = defineStore('app', () => {
    const dark = ref(false)
    const pin = ref(true)
    return { dark, pin }
}, {
    persist: {
        enabled: true,
    },
})
