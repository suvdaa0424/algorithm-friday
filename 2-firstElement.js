function getFromArray(index, array) {
    array.splice(index)
    return array
}
const exampleArray = [1, 2, 3]
const gotEm = getFromArray(2, exampleArray)
console.log(gotEm) // [ 1, 2 ]