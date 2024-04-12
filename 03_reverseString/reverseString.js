const reverseString = function(input) {
    let inputArray = input.split('');
    let outputArray = inputArray.reverse();
    let output = outputArray.join('');
    return(output);
};

// Do not edit below this line
module.exports = reverseString;
