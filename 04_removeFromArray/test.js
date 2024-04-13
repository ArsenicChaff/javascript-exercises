const removeFromArray = function(array, ...numbers) {
    let lenInputArray = array.length;
    // console.log(lenInputArray);
    let charInputArray = numbers;
    // console.log(charInputArray);
    let posIfInArray = 99;
    for (i = 0, n = charInputArray.length; i < n; i++) {
        posIfInArray = array.indexOf(charInputArray[i]);  //checks if the value is in the input array
        console.log(posIfInArray);   //stores positional index in reference to input array
        if (posIfInArray > -1) {
            array.splice(posIfInArray, 1)
            let check = array.indexOf(charInputArray[i]);
            if (check > -1) {
                array.splice(posIfInArray, 1)
            }
        }
    }
    console.log(array);
};
removeFromArray([1, 2, 2, 4, 6, 2, 3, 3], 2, 1, 6);