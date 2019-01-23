function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}
export default {
    deepClone
}