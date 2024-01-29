# POC i18n - Nuxt 3

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# yarn
yarn dev
```

## Development steps

Install @nuxtjs/i18n
```bash
# npm
npm install @nuxtjs/i18n

# yarn
yarn install @nuxtjs/i18n
```

Import i18n in the modules (nuxt.config.ts)
```bash
modules: [
  "@nuxtjs/i18n"
]
```

Create your config (nuxt.cinfig.ts)
```bash
i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    defaultLocale: "en-GB",
    locales: [
      {
        code: "en-GB",
        iso: "en-GB",
        name: "English",
        file: "en-GB.json",
        flag: "🇬🇧",
      },
      {
        code: "fr-FR",
        iso: "fr-FR",
        name: "Français",
        file: "fr-FR.json",
        flag: "🇫🇷",
      },
    ],
  },
```

Create your traduction files in a locales folder (1 file / lang)
```bash
#locales/fr-FR.json
{
    "header": "POC utilisant i18n avec Nuxt",
    "title": "Voici la définition de ce qu'est l'internationalisation i18n",
    "contents": {
        "content1": "En développement de logiciel, l’internationalisation (abrégé en i18n, où 18 représente le nombre de caractères entre le i et le n dans le mot) est la mise en place d’un système permettant la régionalisation du logiciel, c’est-à-dire son adaptation à des langues et des cultures différentes. L’objectif de l’internationalisation est donc de produire un programme unique qui puisse inclure plusieurs langues pour l’interface.",
        "content2": "L'internationalisation est donc l'ensemble des mécanismes techniques qui aboutissent à un résultat linguistiquement acceptable dans la langue que l'utilisateur final a choisie. Cependant, elle peut ne pas suffire pour traiter « n'importe quelle langue », du fait que le programme utilise un jeu de caractères limité, ou certaines polices de caractères spécifiques, ou encore parce que l'utilisateur ne dispose pas des bons claviers pour la saisie de données dans telle ou telle autre langue."
    }
}
```

```bash
#locales/en-GB.json
{
    "header": "POC using i18n with Nuxt",
    "title": "Here is the definition of what internationalization (i18n) is",
    "contents": {
        "content1": "In software development, internationalization (abbreviated as i18n, where 18 represents the number of characters between i and n in the word) is the implementation of a system that allows the regionalization of the software, meaning its adaptation to different languages and cultures. The goal of internationalization is to produce a single program that can include multiple languages for the interface.",
        "content2": "Internationalization is, therefore, the set of technical mechanisms that lead to a linguistically acceptable result in the language chosen by the end user. However, it may not be sufficient to handle 'any language' because the program uses a limited character set, or specific fonts, or because the user does not have the right keyboards for data input in one language or another."
    }
}
```

Import vue-i18n in your layout or pages (If you import it in your layout, there's no need to import vue-i18n in each of your pages)
```bash
<script setup>
import {useI18n} from 'vue-i18n';
const {t} = useI18n();
</script>
```

Call your translations in your templates
```bash
# POC_vueI18n.vue
<template>
    <div class="text-h4 my-4">
      {{ $t('title') }}
    </div>
    <FirstComponent />
</template>

# FirstComponent.vue
<template>
    <div>{{ $t('contents.content1') }}</div>
    <div>{{ $t('contents.content2') }}</div>
</template>
```
