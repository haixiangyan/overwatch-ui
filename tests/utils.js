export function testProperty(values, callback) {
    values.forEach(callback)
}
export function initFiles(inputEl) {
    let file1 = new File(['xxx'], 'xxx.txt')
    let file2 = new File(['yyy'], 'yyy.txt')
    const data = new DataTransfer()
    data.items.add(file1)
    data.items.add(file2)
    inputEl.files = data.files

    return inputEl
}
