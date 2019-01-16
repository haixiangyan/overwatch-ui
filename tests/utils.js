export function testProperty(values) {
    return new Promise((resolve, reject) => {
        values.forEach((value) => resolve(value))
    })
}