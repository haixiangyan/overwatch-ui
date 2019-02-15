import OwAlert from '../components/Alert/OwAlert'

let currentOwAlert

export default {
    install(Vue, options) {
        // Add function $owToast to prototype
        Vue.prototype.$owAlert = function (owAlertOptions) {
            if (currentOwAlert) {
                currentOwAlert.close()
            }
            currentOwAlert = createOwAlert(Vue, owAlertOptions, onClose)
        }
    }
}

// Create OwAlert
function createOwAlert(Vue, owAlertOptions, onClose) {
    let OwAlertExt = Vue.extend(OwAlert)
    let owAlert = new OwAlertExt({ propsData: owAlertOptions })
    owAlert.$mount()
    owAlert.$on('close', onClose)
    document.body.appendChild(owAlert.$el)

    return owAlert
}

// Close OwAlert handler
function onClose() {
    currentOwAlert = null
}
