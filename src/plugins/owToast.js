import OwToast from '../components/OwToast'
export default {
    install(Vue, options) {
        // Add function $owToast to prototype
        Vue.prototype.$owToast = function (owToastOptions) {
            const { type, title, message } = owToastOptions
            let OwToastExt = Vue.extend(OwToast)
            let owToast = new OwToastExt({
                propsData: {type}
            })
            owToast.$slots.title = [title]
            owToast.$slots.message = [message]
            owToast.$mount()
            document.body.appendChild(owToast.$el)
        }
    }
}