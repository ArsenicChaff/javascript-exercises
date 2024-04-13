const removeFromArray = function(array, ...numbers) {
    let lenInputArray = array.length;
    // console.log(lenInputArray);
    let charInputArray = numbers;
    // console.log(charInputArray);

    for (i = 0, n = charInputArray.length; i < n; i++) {
        let valueByPosition = charInputArray[i]
        console.log(valueByPosition);
        let posIfInArray = array.indexOf(valueByPosition);  //checks if the value is in the input array
        console.log(posIfInArray);   //stores positional index in reference to input array
        if (posIfInArray > -1) {
            array.splice(posIfInArray, 1)
        }
    }
    console.log(array);
};
removeFromArray([1, 2, 3], 2);