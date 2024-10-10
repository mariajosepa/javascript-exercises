const removeFromArray = function(arr,...targets) {

    const isTarget = (element) =>{
        return targets.includes(element);
    }
    const resultArray = arr.filter(element => !isTarget(element));

    return resultArray

};

// Test 1: Basic removal
console.log(removeFromArray([1, 2, 3, 4, 5], 2, 4)); // Output: [1, 3, 5]

// Do not edit below this line
module.exports = removeFromArray;
