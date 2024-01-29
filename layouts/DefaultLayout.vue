<template>
    <v-app>
        <Header/>
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script setup>
import Header from '../components/Header.vue';
</script>