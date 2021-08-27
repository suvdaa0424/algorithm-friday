

function allStringsContainA(arr) {
    return arr.some(string => {
        return typeof string === 'string' && string.indexOf('a') !== -1
    });
}

const testData1 = ['hello', null, 0, 10, 'false', -2, true, false];
console.log(allStringsContainA(testData1));