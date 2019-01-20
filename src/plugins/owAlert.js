import OwAlert from '../components/OwAlert'
export default {
    install(Vue, options) {
        // Add function $owToast to prototype
        Vue.prototype.$owAlert = function (owAlertOptions) {
            let OwAlertExt = Vue.extend(OwAlert)
            let owAlert = new OwAlertExt({
                propsData: owAlertOptions
            })
            owAlert.$mount()
            document.body.appendChild(owAlert.$el)
        }
    }
}