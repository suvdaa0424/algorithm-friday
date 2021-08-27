function isArray(object) {
    const answer = Array.isArray(object)
    return answer
};
const exampleArray = [1, 2, 3]
const notAnArray = true
console.log(isArray(exampleArray)) // true
console.log(isArray(notAnArray)) // false