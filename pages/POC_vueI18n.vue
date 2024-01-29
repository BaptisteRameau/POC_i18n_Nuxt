<template>
    <div class="text-h4 my-4">
      {{ $t('title') }}
    </div>
    <FirstComponent />
</template>

<script setup>
definePageMeta({
  layout: "default-layout",
});
</script>