//The rest parameter allows a function to accept an indefinite number of arguments as an array
const removeFromArray = function(givenArray, ...values) {
const newArray = [];

givenArray.forEach(value => {
    if (!values.includes(value)) {
        newArray.push(value);
    }
});
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
