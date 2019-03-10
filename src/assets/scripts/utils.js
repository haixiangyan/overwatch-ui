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
function ajaxCore(method, url, options) {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = () => {
        options.success && options.success(xhr.response)
    }
    xhr.onerror = () => {
        options.fail && options.fail(xhr, xhr.statusCode)
    }
    xhr.send(options.data)
}
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

const ajax = {
    get(url, options) {},
    post(url, options) {
        ajaxCore('POST', url, options)
    }
}
export default {
    deepClone,
    findTreeNodeById,
    unique,
    ajax,
    disableScroll,
    enableScroll
}