const repeatString = function(string, num) {
    let tempOutput = ''
    
    for (i = 0; i < num; i++){
        tempOutput += string;
    }
    console.log(tempOutput);
};

// console.log(repeatString('hey', 9));

// Do not edit below this line
module.exports = repeatString;