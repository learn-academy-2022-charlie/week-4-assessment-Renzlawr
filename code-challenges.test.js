// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// Create a test with describe, it and two expects with arrayContainings
// make it fail

describe("delFirstShuffle", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(delFirstShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(delFirstShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

// RED 
// FAIL  ./code-challenges.test.js
// delFirstShuffle
//   ✕ takes in an array, removes the first item from the array and shuffles the remaining content. (1 ms)
// ● delFirstShuffle › takes in an array, removes the first item from the array and shuffles the remaining content.
//   ReferenceError: delFirstShuffle is not defined

// b) Create the function that makes the test pass.

// I found a common and accurate way to shuffle arrays through an algorithm called the Fisher-Yates Shuffle
// Create a function named delFirstShuffle that takes in array as its param
// Shift the first element off the array
// Create a for loop to iterate through our array
    // create a local variable named rIndex that contains math random times i rounded down 
    // push array at rIndex into our original array
    // splice our array starting at rIndex and deleting one item
// return the array
// pass test

const delFirstShuffle = (array) => {
    array.shift()
    for(let i = 0; i < array.length; i++) {
        rIndex = Math.floor(Math.random() * i)
        array.push(array[rIndex])
        array.splice(rIndex, 1)
    }
    return array
}

// GREEN
// PASS  ./code-challenges.test.js
// delFirstShuffle
//   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (2 ms)

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

// create a test with describe, it and two expects
// make it fail 

describe("minMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
})

// RED 
// ● minMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
// ReferenceError: minMax is not defined

// b) Create the function that makes the test pass.

// Create a function named minMax that takes in array as its param
// create a variable newArr that contains an empty array
// sort the array in ascending order 
// apply the shift method to the array and push the returned value into a new array
// apply the pop method to the array and push the returned value into the same array as our shifted value
// return newArr
// pass test

const minMax = (array) => {
    let newArr = []
    array.sort((a, b) => a - b)
    newArr.push(array.shift(), array.pop())
    return newArr
}

// GREEN
//  PASS  ./code-challenges.test.js
//  minMax
//  ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order. (5 ms)

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// Create a test with describe, it and one expect
// Make it fail

describe("noDupes", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Two new Arrays
        const testArray3 = [4, 4, 4, 4, 4, 4]
        const testArray4 = [9, 14, 51, 23, 12, 29]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
        expect(noDupes(testArray1, testArray2, testArray3, testArray4)).toEqual([3, 7, 10, 5, 4, 8, 2, 1, 9, 14, 51, 23, 12, 29])
    })
})

// RED
// FAIL  ./code-challenges.test.js
// noDupes
//   ✕ takes in two arrays as arguments and returns one array with no duplicate values. (1 ms)
// ● noDupes › takes in two arrays as arguments and returns one array with no duplicate values.
//   ReferenceError: noDupes is not defined

// b) Create the function that makes the test pass.

// Create a function named noDupes that takes in array1 and array2 as params
// Create a local variable called setComboArr that contains a new set
// our set will take in array 1 and array 2 both using the spread syntax(if we used concat it would break the link and we'd end up with a multi digit number, this way we put array1 and array2 into another array together)
// Next we'll return our setComboArr with the spread syntax to convert it from the set object to an array
// pass test

const noDupesFirst = (array1, array2) => {
    let setComboArr = new Set([...array1, ...array2])
    return [...setComboArr]
}

// GREEN 
// PASS  ./code-challenges.test.js
// noDupes
//   ✓ takes in two arrays as arguments and returns one array with no duplicate values. (2 ms)

// STRETCH - Completed
const noDupesDynamic = (...array) => {
    let setComboArr = new Set(array.flat())
    return [...setComboArr]
}

// Refactored :) I also added two new arrays and updated the toEqual so I could test having dynamic ammount of arrays
const noDupes = (...array) =>  {
    return [...new Set([...array.flat()])]
}
