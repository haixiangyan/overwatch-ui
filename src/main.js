import Vue from 'vue'
import App from './App.vue'
import OwUI from './entry'

Vue.config.productionTip = false

Vue.use(OwUI.plugins.$owToast)

new Vue({
    components: {
        ...OwUI.Components
    },
    render: h => h(App),
}).$mount('#app')