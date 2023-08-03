<template>
    <v-container class="fill-height">
        <v-layout align-center align-content-center>
            <v-container>
                <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
                    <div class="text-subtitle-1 text-medium-emphasis">Account</div>

                    <v-text-field v-model="user" density="compact" placeholder="Email address"
                        prepend-inner-icon="mdi-email-outline" variant="outlined"></v-text-field>

                    <v-card v-if="user !== '' && !isEmail" class="mb-3" color="surface-variant" variant="tonal">
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

                    <v-text-field v-model="password1" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter your password"
                        prepend-inner-icon="mdi-lock-outline" variant="outlined"
                        @click:append-inner="visible = !visible"></v-text-field>

                    <v-text-field v-model="password2" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                        :type="visible ? 'text' : 'password'" density="compact" placeholder="Enter again"
                        prepend-inner-icon="mdi-lock-outline" variant="outlined"
                        @click:append-inner="visible = !visible"></v-text-field>



                    <v-card v-if="password1 !== '' && password1 === password2 && password1.length < 8" class="mb-6"
                        color="surface-variant" variant="tonal">
                        <v-card-text class="text-medium-emphasis text-caption">
                            Warning: password length should be longer than 7
                        </v-card-text>
                    </v-card>
                    <v-card v-if="password1 !== '' && password1 !== password2" class="mb-6" color="surface-variant"
                        variant="tonal">
                        <v-card-text class="text-medium-emphasis text-caption">
                            Warning: passwords are inconsistent
                        </v-card-text>
                    </v-card>
                    <v-card v-if="isEmailUsed" class="mb-6" color="surface-variant" variant="tonal">
                        <v-card-text class="text-medium-emphasis text-caption">
                            Warning: E-mail has already been used
                        </v-card-text>
                    </v-card>

                    <v-btn block class="mb-8" color="blue" size="large" variant="tonal" @click="signup">
                        Sign Up
                    </v-btn>
                </v-card>
            </v-container>
        </v-layout>
    </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Api from '@/api/index'

const visible = ref(false)
const user = ref('')
const isEmail = ref(false)
const password1 = ref('')
const password2 = ref('')
const isEmailUsed = ref(false)

function verifyEmail(email: string): boolean {
    return email.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) === null ? false : true
}

watch(user, (newValue: string) => {
    //console.log(newValue, verifyEmail(newValue))
    isEmail.value = verifyEmail(newValue) ? true : false
})

function signup(): void {
    //校验账号与密码
    if (!isEmail.value || password1.value.length < 8 || password1.value !== password2.value) return

    let formData = new FormData()
    formData.append('user', user.value)
    formData.append('password', password1.value)

    Api.signup(formData).then((res) => {
        console.log(res.status)
        console.log(res)
        if (res.status == 200 && res.ok) {
            console.log('signup resolved')
            return
        }
        console.log('signup rejected')
        isEmailUsed.value = true
    }).catch(error => console.log(error))
}
</script>