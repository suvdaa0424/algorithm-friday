function allElementsAreNumber(arr) {
    return !arr.some(el => typeof el === 'number');
}

const testData1 = ['hello', null, 0, 10, 'false', -2, true, false];
console.log(allElementsAreNumber(testData1));





let data5 = ['hello', null, 0, 10, 'false', -2, true, false]

let truthyArray = data5.filter((el) => {
    return (!!el)
})

console.log(truthyArray)

let data6 = ['hello', 'hello', 'world', 'world']

let notDuplicatedArray = data6.filter((el, index) => {
    return data6.indexOf(el) === index
})

console.log(notDuplicatedArray)

let data7 = ['hello', 'pancake', 'banana', 'waffle', 'world']

let lessThan6 = data7.filter((el) => {
    return el.length < 6
})

console.log(lessThan6)