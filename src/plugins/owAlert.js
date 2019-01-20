import OwAlert from '../components/OwAlert'

let currentOwAlert

export default {
    install(Vue, options) {
        // Add function $owToast to prototype
        Vue.prototype.$owAlert = function (owAlertOptions) {
            if (currentOwAlert) {
                currentOwAlert.close()
            }
            currentOwAlert = createOwAlert(Vue, owAlertOptions)
        }
    }
}

// Create OwAlert
function createOwAlert(Vue, owAlertOptions) {
    let OwAlertExt = Vue.extend(OwAlert)
    let owAlert = new OwAlertExt({ propsData: owAlertOptions })
    owAlert.$mount()
    document.body.appendChild(owAlert.$el)

    return owAlert
}
