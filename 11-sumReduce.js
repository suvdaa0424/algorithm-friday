function reducer (accumulator, currentvalue) {
    return accumulator + currentvalue
}
const testData = [19, 28, 47848, 128, 1, 92]
let result = testData.reduce(reducer, 0)

console.log(result)
