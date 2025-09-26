<script setup>
import logo from "@assets/logo.png";
import InstagramSVG from "@assets/InstagramSVG.vue";
import TiktokSVG from "@assets/TiktokSVG.vue";

</script>

<template>
    <nav>
        <div class="banner container">
            <div class="link-container">
                <img class="logo-image" :src="logo" :alt="'Logo Icon'" />
                <span class="icon-container">
                    <a href="https://www.instagram.com/b.lakedraws/" target="_blank" rel="noopener noreferrer">
                        <InstagramSVG :width="35" :height="35" />
                        <span class="handle">b.lakedraws</span>
                    </a>
                    <a href="https://www.tiktok.com/@be.lakii" target="_blank" rel="noopener noreferrer">
                        <TiktokSVG :width="35" :height="35" />
                        <span class="handle">be.lakii</span>
                    </a>
                </span>
            </div>
            <h1 class="desktop-name zalando-sans-expanded">Blake Smith</h1>

        </div>
        <!-- <div class="link-container">
            <InstagramSVG :width="35" :height="35" />
            <TiktokSVG :width="35" :height="35" />
        </div> -->
        <h1 class="container mobile-name zalando-sans-expanded">Blake Smith</h1>
    </nav>
</template>

<style scoped>
a {
  position: relative;          /* for underline */
  display: inline-flex;        /* horizontal layout */
  align-items: center;         /* vertically center SVG + text */
  gap: 0.5rem;                 /* space between icon + text */
  color: inherit;
  text-decoration: none;
  font-size: 1.25rem;
  transition: transform 0.2s ease-in-out;
}

/* Optional: keep SVG vertically centered if needed */
a svg {
  display: block;
}

/* Animated underline */
a::after {
  content: "";
  position: absolute;
  bottom: -3px;                /* adjust spacing under text */
  left: 0;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

a:hover::after {
  transform: scaleX(1);
}

.icon-container {
    display: flex;
    gap: 1rem;
}

nav {
    padding: 0.75rem 0;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 20;
    background-color: var(--background);
}

.link-container {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 2rem;
    width: min-content;
}

.banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-image {
    width: 80px;
    height: 80px;
    display: block;
}

.desktop-name {
    font-size: 3rem;
    line-height: 0;
    display: block;
}

.mobile-name {
    font-size: 2rem;
    display: none;
    margin: 0 auto;
    text-align: start;
}

@media screen and (max-width: 767px) {
    .handle {
        display: none;
    }

    .desktop-name {
        display: none;
    }

    .mobile-name {
        display: block;
    }

    .link-container {
        justify-content: space-between;
        width: 100%;
    }
}
</style>