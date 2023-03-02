const reverseString = function(str) {
    let splitStr = str.split("");
    let reverseStr = splitStr.reverse();
    let reversed = reverseStr.join("");

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
