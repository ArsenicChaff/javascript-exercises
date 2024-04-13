const removeFromArray = function(array, ...numbers) {
    let charInputArray = numbers;
    for (i = 0, n = charInputArray.length; i < n; i++) {
        let valueByPosition = charInputArray[i]
        let posIfInArray = array.indexOf(valueByPosition);
        if (posIfInArray > -1) {
            array.splice(posIfInArray, 1)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;