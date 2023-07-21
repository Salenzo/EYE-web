<template>
    <v-container fluid>
        <v-row dense>
            <v-col v-for="play in plays" :key="play.id">
                <v-card class="fill-height" max-width="300">
                    <v-img class="align-end text-white" height="150" :src="play.img" cover>
                        <v-card-title>{{ play.title }}</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pt-4">
                        {{ play.owner }}
                    </v-card-subtitle>

                    <v-card-text>
                        <div>{{ play.description }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="orange">
                            Share
                        </v-btn>

                        <v-btn color="orange">
                            Explore
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-spacer />
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue"

type PlayInf = {
    id: number
    ownerID: string
    owner: string
    img: string
    title: string
    description: string

}
const plays = ref<PlayInf[] | null>(null)

function fetchPlays() {
    plays.value = [
        {
            id: 0,
            ownerID: "abc114514",
            owner: "李田所",
            img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            title: "坐忘道",
            description: "A Trip to Yharnam"
        },
        {
            id: 1,
            ownerID: "1919810etc",
            owner: "德川",
            img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            title: "会员制餐厅",
            description: "Whitsunday Island, Whitsunday Islands"
        },
        {
            id: 2,
            ownerID: "1919810etc",
            owner: "德川",
            img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
            title: "点兔",
            description: "none"
        }
    ]
}
fetchPlays()
</script>