<template>
    <div class="d-flex align-center bg-blue py-4 justify-space-between">
    <div class="ml-2">{{ $t('header') }}</div>
        <select v-model="language" class="py-4 px-4 mr-2">
            <option
            v-for="item in locales"
            :key="typeof item === 'object' ? item.code : item"
            :value="typeof item === 'object' ? item.code : item"
            >
            {{ typeof item === "object" ? item.flag : item }} {{ typeof item === "object" ? item.name : "" }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();

const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>