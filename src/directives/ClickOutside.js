const callbacks = []
const onDocClick = (event) => {
    const {target} = event
    callbacks.forEach((item) => {
        if (item.el === target || item.el.contains(target)) {
            return
        }
        item.callback()
    })
}
const removedDocCLickListener = () => {
    document.removeEventListener('click', onDocClick)
}

document.addEventListener('click', onDocClick)

export default {
    bind(el, binding) {
        callbacks.push({
            el,
            callback: binding.value
        })
    }
}
export {
    removedDocCLickListener
}
