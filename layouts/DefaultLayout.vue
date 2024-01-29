<template>
    <v-app>
        <Header/>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script setup>
import {useI18n} from 'vue-i18n';

const {t} = useI18n();
import Header from '../components/Header.vue';
</script>