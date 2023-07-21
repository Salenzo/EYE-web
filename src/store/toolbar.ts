// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToolBarStore = defineStore('app', () => {
    const is_api = ref(false)
    const dark = ref(false)
    const pin = ref(true)
    return { is_api, dark, pin }
}, {
    persist: {
        enabled: true,
    },
})
