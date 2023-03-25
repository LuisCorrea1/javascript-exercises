const palindromes = function (string) {
    const newString = string.replace(/[\W_]/g, "").toLowerCase();
    const reversedString = newString.split("").reverse().join("");

    return newString === reversedString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
