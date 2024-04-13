const removeFromArray = function(array, ...numbers) {
    let charInputArray = numbers;
    let posIfInArray = 99;
    for (i = 0, n = charInputArray.length; i < n; i++) {
        posIfInArray = array.indexOf(charInputArray[i]);
        console.log(posIfInArray);
        if (posIfInArray > -1) {
            array.splice(posIfInArray, 1)
            let check = array.indexOf(charInputArray[i]);
            if (check > -1) {
                array.splice(posIfInArray, 1)
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;