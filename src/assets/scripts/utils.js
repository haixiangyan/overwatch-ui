function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj))
}
function findTreeNodeById(root, id) {
    if (!root.children || root.children.length === 0) {
        return undefined
    }
    for (let child of Object.values(root.children)) {
        // Found that object
        if (child.id === id) {
            return child
        }

        // Using DFS to find
        const possibleResult = findTreeNodeById(child, id)
        if (possibleResult) {
            return possibleResult
        }
    }

    return undefined
}
function unique(array) {
    return array.filter((el, index) => array.indexOf(el) === index)
}
export default {
    deepClone,
    findTreeNodeById,
    unique
}