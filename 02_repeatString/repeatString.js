const repeatString = function(string, num) {
    let tempOutput = ''
    if (num < 0) {
        return('ERROR');
    }
    for (i = 0; i < num; i++){
        tempOutput += string;
    }
    return(tempOutput);
};

// console.log(repeatString('hey', 9));

// Do not edit below this line
module.exports = repeatString;