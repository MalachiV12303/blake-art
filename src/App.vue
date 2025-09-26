<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from "@components/Navbar.vue";
import Footer from "@components/Footer.vue";
import landingBg from "@assets/landing.png";
</script>

<template>
  <Navbar></Navbar>
  <main class="container zalando-sans-expanded">
    <RouterView v-slot="{ Component }">
      <Transition name='fade' mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <Footer></Footer>
</template>

<style>
:root{
  --background: #ececec;
  --foreground: #131313;
}

body {
  margin: 0;
}

html{
  background-color: var(--background);
  color: var(--foreground);
}

.container {
  max-width: 1400px;
  padding: 0 2rem;
  margin: 0 auto;
}

.zalando-sans-expanded {
  font-family: "Zalando Sans Expanded", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
