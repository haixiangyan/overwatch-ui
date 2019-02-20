export function testProperty(values, callback) {
    values.forEach(callback)
}
export function initFiles(inputEl) {
    let file1 = new File(['xxx'], 'xxx.txt')
    const data = new DataTransfer()
    data.items.add(file1)
    inputEl.files = data.files

    return inputEl
}
