const testData = ['steve', 'carol', 'tony', 'peter', 'natasha']
result = testData.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
})
console.log(result)