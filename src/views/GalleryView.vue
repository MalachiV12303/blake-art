<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import img1 from "@assets/img1.png";
import img2 from "@assets/img2.png";
import img3 from "@assets/img3.png";
import img4 from "@assets/img4.png";
import img5 from "@assets/img5.png";
import img6 from "@assets/img6.png";
import img7 from "@assets/img7.jpg";
import img8 from "@assets/img8.jpg";
import img9 from "@assets/img9.jpg";
import img10 from "@assets/img10.jpg";
import img11 from "@assets/img11.jpg";
import img12 from "@assets/img12.jpg";
import img13 from "@assets/img13.jpg";
import img14 from "@assets/img14.jpg";
import img15 from "@assets/img15.jpg";
import img16 from "@assets/img16.jpg";
import img17 from "@assets/img17.jpg";
import img18 from "@assets/img18.jpg";
import img19 from "@assets/img19.jpg";
import img20 from "@assets/img20.jpg";
import img21 from "@assets/img21.jpg";
import img22 from "@assets/img22.jpg";
import img23 from "@assets/img23.jpg";
import img24 from "@assets/img24.jpg";
import img25 from "@assets/img25.jpg";
import img26 from "@assets/img26.jpg";
import img27 from "@assets/img27.jpg";
import img28 from "@assets/img28.jpg";
import img29 from "@assets/img29.jpg";
import img30 from "@assets/img30.jpg";
import img31 from "@assets/img31.jpg";
import img32 from "@assets/img32.jpg";
import img33 from "@assets/img33.jpg";
import img34 from "@assets/img34.jpg";
import img35 from "@assets/img35.jpg";
import img36 from "@assets/img36.jpg";

const items = [
  { year: 2025, month: 6, url: img7 },
  { year: 2024, month: 9, url: img33 },
  { year: 2025, month: 7, url: img4 },
  { year: 2024, month: 8, url: img23 },
  { year: 2025, month: 3, url: img18 },
  { year: 2024, month: 9, url: img35 },
  { year: 2024, month: 8, url: img26 },
  { year: 2025, month: 5, url: img14 },
  { year: 2025, month: 9, url: img5 },
  { year: 2024, month: 12, url: img20 },
  { year: 2025, month: 9, url: img3 },
  { year: 2025, month: 6, url: img12 },
  { year: 2025, month: 4, url: img13 },
  { year: 2025, month: 5, url: img10 },
  { year: 2025, month: 3, url: img15 },
  { year: 2025, month: 3, url: img16 },
  { year: 2025, month: 1, url: img17 },
  { year: 2025, month: 5, url: img9 },
  { year: 2025, month: 3, url: img19 },
  { year: 2025, month: 9, url: img2 },
  { year: 2024, month: 12, url: img21 },
  { year: 2024, month: 10, url: img22 },
  { year: 2025, month: 2, url: img11 },
  { year: 2025, month: 8, url: img8 },
  { year: 2024, month: 2, url: img25 },
  { year: 2025, month: 8, url: img1 },
  { year: 2024, month: 3, url: img27 },
  { year: 2023, month: 5, url: img28 },
  { year: 2024, month: 1, url: img30 },
  { year: 2023, month: 9, url: img29 },
  { year: 2023, month: 8, url: img31 },
  { year: 2024, month: 5, url: img32 },
  { year: 2025, month: 2, url: img24 },
  { year: 2025, month: 7, url: img6 },
  { year: 2025, month: 3, url: img34 },
  { year: 2024, month: 7, url: img36 },
];

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];
const formatDate = (year: number, month: number) => `${months[month - 1]} - ${year}`;

const selectedIndex = ref<number | null>(null);
const direction = ref<"next" | "prev">("next");

const openImage = (index: number) => (selectedIndex.value = index);
const closeImage = () => (selectedIndex.value = null);
const showNext = () => {
  if (selectedIndex.value === null) return;
  direction.value = "next";
  selectedIndex.value = (selectedIndex.value + 1) % items.length;
};
const showPrev = () => {
  if (selectedIndex.value === null) return;
  direction.value = "prev";
  selectedIndex.value = (selectedIndex.value - 1 + items.length) % items.length;
};

const handleKeydown = (e: KeyboardEvent) => {
  if (selectedIndex.value === null) return;
  if (e.key === "Escape") closeImage();
  else if (e.key === "ArrowRight") showNext();
  else if (e.key === "ArrowLeft") showPrev();
};

const handleWheel = (e: WheelEvent) => {
  if (selectedIndex.value === null) return;
  if (e.deltaY > 0) showNext();
  else if (e.deltaY < 0) showPrev();
};

let touchStartX = 0;
const handleTouchStart = (e: TouchEvent) => (touchStartX = e.touches[0].clientX);
const handleTouchEnd = (e: TouchEvent) => {
  const diffX = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(diffX) > 50) diffX < 0 ? showNext() : showPrev();
};
const getFormattedIndex = (number: number) => String(number).padStart(2, "0");

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("wheel", handleWheel, { passive: true });
});
onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("wheel", handleWheel);
});
watch(selectedIndex, (val) => {
  document.body.style.overflow = val !== null ? "hidden" : "";
});


// 🧠 SEQUENTIAL IMAGE LOADING CONTROL
const visibleCount = ref(1); // number of images allowed to load

function handleImageLoad(event: Event, index: number) {
  // When an image finishes loading, enable the next one
  const img = event.target as HTMLImageElement;
  img.classList.add('loaded');
  if (index + 1 <= items.length) {
    setTimeout(() => {
      visibleCount.value = Math.min(visibleCount.value + 1, items.length);
    }, 100); // slight delay for smooth sequence
  }
}
</script>

<template>
  <!-- Masonry layout -->
  <masonry-wall
    :items="items"
    :ssr-columns="1"
    :column-width="400"
    :gap="8"
  >
    <template #default="{ item, index }">
      <button
        v-if="index < visibleCount"
        @click="openImage(index)"
        class="masonry-item"
      >
        <img
          :src="item.url"
          :alt="'image #' + index"
          class="image"
          @load="handleImageLoad($event, index)"
          decoding="async"
        />
        <span class="tempClass zalando-sans-expanded">{{ formatDate(item.year, item.month) }}</span>
      </button>

      <!-- hidden placeholder to preserve layout while waiting -->
      <div v-else class="masonry-item placeholder"></div>
    </template>
  </masonry-wall>

  <div
    v-if="selectedIndex !== null"
    class="fullscreen-image"
    @click="closeImage"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <button class="nav-btn left zalando-sans-expanded" @click.stop="showPrev">‹</button>

    <div class="counter">
      <span>{{ getFormattedIndex(selectedIndex + 1) }}/{{ items.length }}</span>
    </div>

    <Transition :name="direction">
      <img
        :key="items[selectedIndex].url"
        :src="items[selectedIndex].url"
        :alt="'image #' + selectedIndex"
        class="fullscreen-content"
        @click.stop
      />
    </Transition>

    <button class="nav-btn right zalando-sans-expanded" @click.stop="showNext">›</button>
  </div>
</template>

<style scoped>
.tempClass {
  display: block;
  text-align: start;
  padding-top: 0.25rem;
}
.placeholder {
  width: 100%;
  height: 300px;
  background-color: #111;
  opacity: 0.2;
  border-radius: 6px;
}
.counter {
  position: absolute;
  top: 5%;
  left: 3%;
  font-size: 3rem;
  color: white;
}
.masonry-item {
  width: 100%;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.masonry-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  filter: brightness(95%);
  transition: all 0.2s ease-in-out;
}
.masonry-item img:hover {
  filter: brightness(100%);
}
.fullscreen-image {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.fullscreen-content {
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
}
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: white;
  font-size: 6rem;
  cursor: pointer;
  z-index: 1100;
  transition: all 0.2s ease-in-out;
}
.nav-btn:hover {
  scale: 1.02;
}
.nav-btn.left {
  left: 3%;
}
.nav-btn.right {
  right: 3%;
}
.next-enter-active,
.prev-enter-active {
  transition: all 0.4s ease;
}
.next-leave-active,
.prev-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}
.next-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.next-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.prev-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.prev-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
@media screen and (max-width: 767px) {
  .nav-btn {
    display: none;
  }
}
.image {
  opacity: 0;
  transition: opacity 0.6s ease;
}

.image.loaded {
  opacity: 1;
}
</style>
