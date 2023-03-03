const sumAll = function(fromValue, toValue) {
    //All given values should be numbers
    if ((typeof fromValue != 'number') || (typeof toValue != 'number')) {
        return "ERROR";
    }
    //Parameters must be positive
    if ((fromValue < 0) || (toValue < 0)) {
        return "ERROR";
    }
    //Change variables if the first number is greater than the second one
    if (fromValue > toValue) {
        const newFromValue = fromValue;
        fromValue = toValue
        toValue = newFromValue;
    }
    //Sum of the parameterss
    let sum = 0;
    for (let i = fromValue; i <= toValue; i++){
        sum = sum +i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
