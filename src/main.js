import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Import global styles
import './assets/styles/global.scss'
import './assets/styles/reset.scss'

new Vue({
    render: h => h(App),
}).$mount('#app')
