<template>
    <v-container class="fill-height">
        <v-layout align-center align-content-center>
            <v-container>
                <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
                    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

                    <v-text-field v-model="user" density="compact" placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

                    <v-card v-if="!isEmail" class="mb-3" color="surface-variant" variant="tonal">
                        <v-card-text class="text-medium-emphasis text-caption">
                            Warning: not an E-mail address
                        </v-card-text>
                    </v-card>

                    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                        Password

                        <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer"
                            target="_blank">
                            Forgot login password?</a>
                    </div>

                    <v-text-field v-model="password" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                        prepend-inner-icon="mdi-lock-outline" variant="outlined"
                        @click:append-inner="visible = !visible"></v-text-field>

                    <v-card v-if="failCount >= 3" class="mb-12" color="surface-variant" variant="tonal">
                        <v-card-text v-if="failCount" class="text-medium-emphasis text-caption">
                            Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for
                            three
                            hours. If you must login now, you can also click "Forgot login password?" below to reset the
                            login
                            password.
                        </v-card-text>
                    </v-card>

                    <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="login">
                        Log In
                    </v-btn>

                    <v-card-text class="text-center">
                        <v-btn class="text-blue text-decoration-none" rel="noopener noreferrer" target="_blank"
                            @click="$router.push('/signup')">
                            Sign up now <v-icon icon="mdi-chevron-right" />
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-layout>
    </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Api from '@/api/index'
import { useRouter } from 'vue-router'
import { sha256 } from 'js-sha256'

const router = useRouter()

const visible = ref(false)
const user = ref('')
const isEmail = ref(false)
const password = ref('')
const failCount = ref(0)

function verifyEmail(email: string): boolean {
    return email.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) === null ? false : true
}

watch(user, (newValue: string) => {
    //console.log(newValue, verifyEmail(newValue))
    if (verifyEmail(newValue)) {
        isEmail.value = true
    }
    else {
        isEmail.value = false
    }
})

function login(): void {
    let formData = new FormData()
    formData.append('user', user.value)
    formData.append('password', sha256(password.value))
    console.log(sha256(password.value))

    Api.login(formData).then((res) => {
        console.log(res.status)
        if (res.status == 200 && res.ok) {
            console.log('login resolved')
            router.push('/')
            return
        }
        console.log('login rejected')
        //TODO 需要后端存储
        failCount.value += failCount.value < 3 ? 1 : 0
    }).catch(error => console.log(error))
}
</script>