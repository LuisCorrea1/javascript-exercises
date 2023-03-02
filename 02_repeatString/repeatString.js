const repeatString = function(word, numbOfTimes) {
    let repeatedString = ""
    if(numbOfTimes < 0){
        return 'ERROR';
    } else {
      for (let i = 0; i < numbOfTimes; i++) {
            repeatedString = repeatedString + word;
        }
        return repeatedString;  
    }
    
};

// Do not edit below this line
module.exports = repeatString;
