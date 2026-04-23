import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MasonryWall } from '@yeger/vue-masonry-wall'

const app = createApp(App)

app.use(router)
app.component('MasonryWall', MasonryWall)
app.mount('#app')
