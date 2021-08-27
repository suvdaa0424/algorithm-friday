function addDashes(value) {
    const newArray = Array.from(value.toString()).map(Number)
    return newArray.join("-")
}

const number = 481276
const dashed = addDashes(number)
console.log(dashed)