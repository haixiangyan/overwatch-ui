import OwToast from '../components/OwToast'
export default {
    install(Vue, options) {
        // Add function $owToast to prototype
        Vue.prototype.$owToast = function (owToastOptions) {
            let OwToastExt = Vue.extend(OwToast)
            let owToast = new OwToastExt({
                propsData: owToastOptions
            })
            owToast.$mount()
            document.body.appendChild(owToast.$el)
        }
    }
}